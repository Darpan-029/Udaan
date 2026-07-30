const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const docsDir = path.join(__dirname, '..', 'public', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

function escapePdfText(line) {
  return line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

/**
 * Valid PDF generator with exact cross-reference (xref) byte offset
 * calculation -- every offset is measured from the buffer as it is built,
 * not hardcoded, so the xref table is actually correct.
 */
function createSimplePDF(title, subtitle, contentLines) {
  let textStream = `BT /F1 24 Tf 50 720 Td (${escapePdfText(title)}) Tj ET\n`;
  textStream += `BT /F1 14 Tf 50 690 Td (${escapePdfText(subtitle)}) Tj ET\n`;

  let y = 650;
  contentLines.forEach(line => {
    textStream += `BT /F1 11 Tf 50 ${y} Td (${escapePdfText(line)}) Tj ET\n`;
    y -= 22;
  });

  const header = '%PDF-1.4\n';
  const obj1 = '1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj\n';
  const obj2 = '2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj\n';
  const obj3 = '3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources <</Font <</F1 4 0 R>>>> /Contents 5 0 R>> endobj\n';
  const obj4 = '4 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj\n';

  const textStreamByteLength = Buffer.byteLength(textStream, 'utf8');
  const obj5 = `5 0 obj <</Length ${textStreamByteLength}>> stream\n${textStream}\nendstream\nendobj\n`;

  const offsets = [0];
  let currentOffset = Buffer.byteLength(header, 'utf8');

  offsets.push(currentOffset); // obj 1
  currentOffset += Buffer.byteLength(obj1, 'utf8');

  offsets.push(currentOffset); // obj 2
  currentOffset += Buffer.byteLength(obj2, 'utf8');

  offsets.push(currentOffset); // obj 3
  currentOffset += Buffer.byteLength(obj3, 'utf8');

  offsets.push(currentOffset); // obj 4
  currentOffset += Buffer.byteLength(obj4, 'utf8');

  offsets.push(currentOffset); // obj 5
  currentOffset += Buffer.byteLength(obj5, 'utf8');

  const startXrefOffset = currentOffset;

  let xrefStr = 'xref\n0 6\n0000000000 65535 f \n';
  for (let i = 1; i <= 5; i++) {
    xrefStr += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  const trailerStr = `trailer <</Size 6 /Root 1 0 R>>\nstartxref\n${startXrefOffset}\n%%EOF\n`;

  const fullPdfStr = header + obj1 + obj2 + obj3 + obj4 + obj5 + xrefStr + trailerStr;
  return Buffer.from(fullPdfStr, 'utf8');
}

/**
 * Minimal real .docx (OOXML) writer. A .docx is a ZIP archive -- this
 * builds an actual DEFLATE-compressed ZIP with correct CRC-32s and byte
 * offsets, using only Node's built-in zlib (no dependency).
 */
function createMinimalDocx(textLines) {
  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;

  const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

  const paragraphs = textLines.map(line => `<w:p><w:r><w:t xml:space="preserve">${line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</w:t></w:r></w:p>`).join('');

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${paragraphs}
  </w:body>
</w:document>`;

  const files = [
    { name: '[Content_Types].xml', content: Buffer.from(contentTypesXml, 'utf8') },
    { name: '_rels/.rels', content: Buffer.from(relsXml, 'utf8') },
    { name: 'word/document.xml', content: Buffer.from(documentXml, 'utf8') },
  ];

  function crc32(buf) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < buf.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c;
  }

  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const file of files) {
    const fileNameBuf = Buffer.from(file.name, 'utf8');
    const fileCrc = crc32(file.content);
    const compData = zlib.deflateRawSync(file.content);

    const lh = Buffer.alloc(30 + fileNameBuf.length);
    lh.writeUInt32LE(0x04034b50, 0); // PK\x03\x04
    lh.writeUInt16LE(20, 4); // version needed
    lh.writeUInt16LE(0, 6); // flags
    lh.writeUInt16LE(8, 8); // compression method (deflate)
    lh.writeUInt16LE(0, 10); // time
    lh.writeUInt16LE(0, 12); // date
    lh.writeUInt32LE(fileCrc, 14);
    lh.writeUInt32LE(compData.length, 18);
    lh.writeUInt32LE(file.content.length, 22);
    lh.writeUInt16LE(fileNameBuf.length, 26);
    lh.writeUInt16LE(0, 28);
    fileNameBuf.copy(lh, 30);

    localHeaders.push(lh, compData);

    const ch = Buffer.alloc(46 + fileNameBuf.length);
    ch.writeUInt32LE(0x02014b50, 0); // PK\x01\x02
    ch.writeUInt16LE(20, 4); // version made by
    ch.writeUInt16LE(20, 6); // version needed
    ch.writeUInt16LE(0, 8); // flags
    ch.writeUInt16LE(8, 10); // compression method
    ch.writeUInt16LE(0, 12); // time
    ch.writeUInt16LE(0, 14); // date
    ch.writeUInt32LE(fileCrc, 16);
    ch.writeUInt32LE(compData.length, 20);
    ch.writeUInt32LE(file.content.length, 24);
    ch.writeUInt16LE(fileNameBuf.length, 28);
    ch.writeUInt16LE(0, 30); // extra len
    ch.writeUInt16LE(0, 32); // comment len
    ch.writeUInt16LE(0, 34); // disk start
    ch.writeUInt16LE(0, 36); // int attr
    ch.writeUInt32LE(0, 38); // ext attr
    ch.writeUInt32LE(offset, 42); // local header offset
    fileNameBuf.copy(ch, 46);

    centralHeaders.push(ch);

    offset += lh.length + compData.length;
  }

  const centralDirOffset = offset;
  let centralDirSize = 0;
  centralHeaders.forEach(ch => { centralDirSize += ch.length; });

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); // PK\x05\x06
  eocd.writeUInt16LE(0, 4); // disk num
  eocd.writeUInt16LE(0, 6); // start disk
  eocd.writeUInt16LE(files.length, 8); // entries on disk
  eocd.writeUInt16LE(files.length, 10); // total entries
  eocd.writeUInt32LE(centralDirSize, 12);
  eocd.writeUInt32LE(centralDirOffset, 16);
  eocd.writeUInt16LE(0, 20); // comment len

  return Buffer.concat([...localHeaders, ...centralHeaders, eocd]);
}

const brochureContent = [
  'Welcome to UDAAN 2026 - Annual Certificate & Gold Medal Distribution Ceremony',
  'Shri G.S. Institute of Technology and Science (SGSITS), Indore',
  'Date: Thursday, 27 August 2026 | Time: 09:00 AM - 04:00 PM IST | Venue: SGSITS Main Auditorium',
  'Motto: Aaj ki Safalta, Kal ki Prerna (Todays success, tomorrows inspiration)',
  '',
  'HIGHLIGHTS OF THE CEREMONY:',
  '- Awarding of 50+ Prestigious Gold Medals across B.Tech, M.Tech, MCA & B.Pharm',
  '- Distribution of Merit Certificates to top 5% rank holders in all departments',
  '- Keynote Address by Hon. Director & Chief Guests',
  '- Cultural Performances & Network Reception',
  '',
  'GENERAL GUIDELINES:',
  '- Awardees must reach the Auditorium by 09:00 AM for attendance verification',
  '- Strictly follow prescribed dress code (White/off-white traditional attire)',
  '- Half-jackets will be distributed at registration counters on-site'
];

const scheduleContent = [
  'UDAAN 2026 - OFFICIAL EVENT SCHEDULE',
  'SGSITS Indore | Thursday, 27 August 2026',
  '',
  '09:00 AM - 10:00 AM: Registration, Kit & Half-Jacket Distribution (Auditorium Foyer)',
  '10:00 AM - 10:15 AM: Arrival of Chief Guest & Lamp Lighting Ceremony',
  '10:15 AM - 10:35 AM: Welcome Speech by Director, SGSITS Indore',
  '10:35 AM - 11:30 AM: Gold Medal Awarding Ceremony (Departmental Batchwise)',
  '11:30 AM - 12:30 PM: Merit Certificate Distribution (Undergraduate & Postgraduate)',
  '12:30 PM - 12:50 PM: Valedictory & Vote of Thanks',
  '12:50 PM - 04:00 PM: High Tea, Interactive Sessions & Photo Session'
];

const circularContent = [
  'SGSITS INDORE - OFFICIAL CIRCULAR FOR UDAAN 2026',
  'Ref No: SGSITS/ACAD/2026/UDAAN/108',
  '',
  'Subject: Annual Certificate & Gold Medal Ceremony Instructions for Students',
  '',
  '1. All eligible students listed in the medalist & merit awardee directory must confirm',
  '   their participation via online registration portal before August 20, 2026.',
  '2. Digital Entry Passes with QR codes are mandatory for entry into the Auditorium.',
  '3. Accompanying parents/guests are permitted (maximum 2 guests per student).',
  '4. Seating allocations will be strictly enforced as per department blocks.',
  '5. For any queries, contact the Student Activity Council (SAC) helpline.'
];

const dresscodeContent = [
  'SGSITS UDAAN 2026 - DRESS CODE GUIDELINES',
  '',
  'Boys / Male Awardees:',
  '- Plain White or Off-White Kurta Pyjama or Kurta Dhoti.',
  '- Formal leather shoes or traditional footwear.',
  '- Official Half-Jacket (Provided by Institute at registration desk).',
  '',
  'Girls / Female Awardees:',
  '- Plain White or Off-White Salwar Kurta or Traditional Saree.',
  '- Formal footwear.',
  '- Official Half-Jacket (Provided by Institute at registration desk).',
  '',
  'Note: Strict adherence to traditional attire is required for stage presentation.'
];

fs.writeFileSync(path.join(docsDir, 'brochure.pdf'), createSimplePDF('SGSITS UDAAN 2026 BROCHURE', 'Annual Certificate & Gold Medal Ceremony', brochureContent));
fs.writeFileSync(path.join(docsDir, 'schedule.pdf'), createSimplePDF('UDAAN 2026 EVENT SCHEDULE', 'Detailed Timeline & Program Flow', scheduleContent));
fs.writeFileSync(path.join(docsDir, 'circular.pdf'), createSimplePDF('SGSITS OFFICIAL CIRCULAR', 'Guidelines & Instructions for Awardees', circularContent));
fs.writeFileSync(path.join(docsDir, 'dresscode.docx'), createMinimalDocx(dresscodeContent));

console.log('Documents created successfully in public/docs');
