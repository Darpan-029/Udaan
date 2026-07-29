# Implementation Plan - Udaan (SGSITS Indore) Web Application Enhancement

The objective of this project is to build an upgraded, high-performance, and visually stunning web platform for **UDAAN** — the annual Certificate and Gold Medal Distribution Ceremony of **SGSITS Indore**. We will build upon the prototype, bringing modern design aesthetics, rich interactive features, complete brochure/document viewers, digital entry passes with QR codes, a gold medalist lookup portal, and a robust admin dashboard & backend.

---

## User Review Required

> [!IMPORTANT]
> The target event date extracted from the official prototype is **October 8, 2025** at **SGSITS Auditorium, Indore** with dress code requirements (White/off-white kurta-pyjama for boys, salwar-kurta/saree for girls; half-jackets provided at registration).
>
> We will implement full client & backend functionality with simulated persistence for live demonstration, plus downloadable documents (`brochure.pdf`, `schedule.pdf`, `circular.pdf`, `dresscode.docx`) and interactive QR entry pass verification.

---

## Proposed Changes

### Frontend Design & UI/UX

#### Modern UI System & Layout (`src/app/globals.css`, `src/app/layout.tsx`)
- Enhance CSS tokens with glowing glassmorphism gradients, custom scrollbars, gold accent badges, and dark/light mode balance.
- Integrate Google Fonts (Montserrat & Inter) matching the official SGSITS design specs.

#### Header & Navigation (`src/components/navigation.tsx`)
- Responsive sticky navbar with blur backdrop, active section scrolling, quick access to brochure/schedule PDFs, dark/light theme switch, and mobile drawer.

#### Hero Section (`src/components/hero.tsx` & `src/components/countdown-timer.tsx`)
- High-impact hero section with dynamic particle gradient backdrop, SGSITS motto *"आज की सफलता, कल की प्रेरणा"* (Today's success, tomorrow's inspiration).
- Real-time countdown timer to ceremony date (Oct 8, 2025).
- Quick action CTA buttons: "Register Now", "Download Brochure", "View Schedule".
- Live stat counters (500+ Certificate Awardees, 50+ Gold Medalists, 20+ Excellence Years).

#### Interactive About & Venue Section (`src/components/about.tsx`)
- Comprehensive background on SGSITS Indore's legacy.
- Visual event highlights cards (Gold Medals, Merit Certificates, Keynotes, Networking).
- Interactive Venue & Dress Code guide card with visual iconography.

#### Interactive Schedule & Event Timeline (`src/components/schedule.tsx`)
- Multi-track timeline view (Registration & Jacket Distribution, Inauguration & Chief Guest Address, Departmental Gold Medal Distribution, Merit Certificate Awards, High Tea & Networking).
- Search and session category filter buttons.

#### Document & Brochure Hub (`src/components/document-viewer.tsx`)
- Embedded document reader tabbed view allowing instant inline viewing & download of:
  - Official Brochure (`brochure.pdf`)
  - Event Schedule (`schedule.pdf`)
  - Official Circular & Guidelines (`circular.pdf`)
  - Dress Code Details (`dresscode.docx`)

#### Medalist & Awardee Directory (`src/components/medalist-directory.tsx`)
- Interactive searchable & filterable directory of Gold Medalists and Merit Awardees by Department (CSE, IT, ECE, ME, CE, EE, Pharmacy, Applied Sciences) and Batch Year.

#### Enhanced Registration & Digital Pass Generator (`src/components/registration.tsx`)
- Multi-step intuitive form with instant client-side validation.
- Fields: Full Name, Enrollment No, Branch, Batch Year, Award Category (Gold Medal / Merit Certificate), Phone, Email, Address, Number of Attending Guests.
- **Digital Entry Pass Modal**: Upon successful registration, generates an instant digital pass with unique Pass ID, QR Code, dress code instructions, and PDF download / print functionality.

#### Interactive Photo & Video Gallery (`src/components/gallery.tsx`)
- Masonry-style gallery with tab filters (2024 Highlights, Medal Distribution, Dignitaries, Auditorium).
- Lightbox popup view for full-screen image inspection.

#### FAQ & Helpdesk (`src/components/faq.tsx`)
- Accordion FAQ with live instant search bar covering seating, dress code, guest passes, and medal collection procedures.
- Student helpline & support desk contact information.

#### Admin Dashboard (`src/app/admin/page.tsx`)
- Real-time stats grid (Total Registrations, Pending, Approved, Rejected).
- Branch-wise & Award Category-wise interactive distribution charts.
- Registrations management table with status toggles (Approve/Reject), search/filter by branch, and CSV export.

---

### Backend API Services

#### `/api/register/route.ts`
- Handles POST requests with Zod validation.
- Generates unique registration ID, timestamp, QR code payload, and status.

#### `/api/registrations/route.ts`
- GET endpoint with status, branch, search query parameters.
- PATCH endpoint to approve/reject student registrations.
- DELETE endpoint for pass management.

#### `/api/stats/route.ts`
- Dynamic stats calculation for registrations, branch breakdown, and category counts.

#### `/api/verify-pass/[id]/route.ts`
- QR code verification endpoint returning student details and pass validity status.

---

### Media & Static Assets

- Place official logos, QR codes, background banners, and sample document PDFs in `public/images/` and `public/docs/`.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to ensure zero TypeScript or Next.js build errors.
- Run `npm run dev` and verify API endpoints using HTTP fetch checks.

### Manual Verification
- Test interactive registration form submission and digital QR entry pass generation.
- Verify light/dark theme switching and responsive layout on mobile & desktop viewports.
- Check document downloads (`brochure.pdf`, `schedule.pdf`, etc.).
- Validate Admin dashboard registration state updates and filtering.
