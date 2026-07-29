const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'public', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Minimal valid PDF generator helper
function createSimplePDF(title, subtitle, contentLines) {
  const stream = [];
  stream.push('%PDF-1.4');
  stream.push('1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj');
  stream.push('2 0 obj <</Type /Pages /Kids [3 0 R] /Count 1>> endobj');
  stream.push('3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources <</Font <</F1 4 0 R>>>> /Contents 5 0 R>> endobj');
  stream.push('4 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj');

  let textStream = `BT /F1 24 Tf 50 720 Td (${title}) Tj ET\n`;
  textStream += `BT /F1 14 Tf 50 690 Td (${subtitle}) Tj ET\n`;
  
  let y = 650;
  contentLines.forEach(line => {
    // Escape parens
    const safeLine = line.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    textStream += `BT /F1 11 Tf 50 ${y} Td (${safeLine}) Tj ET\n`;
    y -= 22;
  });

  const length = Buffer.byteLength(textStream);
  stream.push(`5 0 obj <</Length ${length}>> stream\n${textStream}\nendstream\nendobj`);

  // Simple xref offset placeholder
  stream.push('xref');
  stream.push('0 6');
  stream.push('0000000000 65535 f ');
  stream.push('0000000009 00000 n ');
  stream.push('0000000056 00000 n ');
  stream.push('0000000111 00000 n ');
  stream.push('0000000224 00000 n ');
  stream.push('0000000295 00000 n ');
  stream.push('trailer <</Size 6 /Root 1 0 R>>');
  stream.push('startxref');
  stream.push('400');
  stream.push('%%EOF');

  return stream.join('\n');
}

const brochureContent = [
  'Welcome to UDAAN 2025 - Annual Certificate & Gold Medal Distribution Ceremony',
  'Shri G.S. Institute of Technology and Science (SGSITS), Indore',
  'Date: October 8, 2025 | Time: 10:00 AM - 1:00 PM | Venue: SGSITS Main Auditorium',
  'Motto: Aaj ki Safalta, Kal ki Prerna (Todays success, tomorrows inspiration)',
  '',
  'HIGHLIGHTS OF THE CEREMONY:',
  '- Awarding of 50+ Prestigious Gold Medals across B.Tech, M.Tech, MCA & B.Pharm',
  '- Distribution of Merit Certificates to top 5% rank holders in all departments',
  '- Keynote Address by Hon. Director & Chief Guests',
  '- Cultural Performances & Network Reception',
  '',
  'GENERAL GUIDELINES:',
  '- Awardees must reach the Auditorium by 9:00 AM for attendance verification',
  '- Strictly follow prescribed dress code (White/off-white traditional attire)',
  '- Half-jackets will be distributed at registration counters on-site'
];

const scheduleContent = [
  'UDAAN 2025 - OFFICIAL EVENT SCHEDULE',
  'SGSITS Indore | October 8, 2025',
  '',
  '09:00 AM - 10:00 AM: Registration, Kit & Half-Jacket Distribution (Auditorium Foyer)',
  '10:00 AM - 10:15 AM: Arrival of Chief Guest & Lamp Lighting Ceremony',
  '10:15 AM - 10:35 AM: Welcome Speech by Director, SGSITS Indore',
  '10:35 AM - 11:30 AM: Gold Medal Awarding Ceremony (Departmental Batchwise)',
  '11:30 AM - 12:30 PM: Merit Certificate Distribution (Undergraduate & Postgraduate)',
  '12:30 PM - 12:50 PM: Valedictory & Vote of Thanks',
  '12:50 PM - 01:30 PM: High Tea & Commemorative Photo Session'
];

const circularContent = [
  'SGSITS INDORE - OFFICIAL CIRCULAR FOR UDAAN 2025',
  'Ref No: SGSITS/ACAD/2025/UDAAN/108',
  '',
  'Subject: Annual Certificate & Gold Medal Ceremony Instructions for Students',
  '',
  '1. All eligible students listed in the medalist & merit awardee directory must confirm',
  '   their participation via online registration portal before September 30, 2025.',
  '2. Digital Entry Passes with QR codes are mandatory for entry into the Auditorium.',
  '3. Accompanying parents/guests are permitted (maximum 2 guests per student).',
  '4. Seating allocations will be strictly enforced as per department blocks.',
  '5. For any queries, contact the Student Activity Council (SAC) helpline.'
];

fs.writeFileSync(path.join(docsDir, 'brochure.pdf'), createSimplePDF('SGSITS UDAAN 2025 BROCHURE', 'Annual Certificate & Gold Medal Ceremony', brochureContent));
fs.writeFileSync(path.join(docsDir, 'schedule.pdf'), createSimplePDF('UDAAN 2025 EVENT SCHEDULE', 'Detailed Timeline & Program Flow', scheduleContent));
fs.writeFileSync(path.join(docsDir, 'circular.pdf'), createSimplePDF('SGSITS OFFICIAL CIRCULAR', 'Guidelines & Instructions for Awardees', circularContent));

// Dress code file
const dresscodeDoc = `SGSITS UDAAN 2025 - DRESS CODE GUIDELINES

Boys / Male Awardees:
- Plain White or Off-White Kurta Pyjama or Kurta Dhoti.
- Formal leather shoes or traditional footwear.
- Official Half-Jacket (Provided by Institute at registration desk).

Girls / Female Awardees:
- Plain White or Off-White Salwar Kurta or Traditional Saree.
- Formal footwear.
- Official Half-Jacket (Provided by Institute at registration desk).

Note: Strict adherence to traditional attire is required for stage presentation.
`;
fs.writeFileSync(path.join(docsDir, 'dresscode.docx'), dresscodeDoc);

console.log('Documents created successfully in public/docs');
