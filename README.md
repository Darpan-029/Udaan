# UDAAN - SGSITS Indore Annual Award Ceremony Website

A modern, responsive website for the UDAAN Certificate and Gold Medal Distribution Ceremony at SGSITS Indore.

## Features

### Frontend
- **Modern UI/UX**: Built with Next.js 14, React, and Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful transitions and animations
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Theme switching with next-themes
- **Interactive Components**:
  - Hero section with countdown timer
  - About section with statistics
  - Event schedule
  - Photo gallery with lightbox
  - FAQ accordion
  - Registration form with validation
  - Navigation with mobile menu

### Backend
- **API Routes**: RESTful API for registration and data management
- **Form Validation**: Zod schema validation
- **Admin Dashboard**: Statistics and registration management
- **Mock Data**: Ready for database integration

### Additional Features
- Multi-language support (Hindi/English)
- Accessibility features (ARIA labels, keyboard navigation)
- SEO optimized
- Fast loading with Next.js optimizations
- Print-ready QR codes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Udaan
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
udaan-website/
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── admin/        # Admin dashboard
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── about.tsx
│   │   ├── countdown-timer.tsx
│   │   ├── faq.tsx
│   │   ├── footer.tsx
│   │   ├── gallery.tsx
│   │   ├── hero.tsx
│   │   ├── navigation.tsx
│   │   ├── registration.tsx
│   │   ├── schedule.tsx
│   │   └── theme-provider.tsx
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static assets
├── docs/                 # PDF documents
├── images/               # Images and QR codes
└── package.json
```

## API Endpoints

### POST /api/register
Submit a new registration
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "enrollment": "123456",
  "branch": "CSE",
  "year": "4",
  "category": "gold-medal",
  "guests": "2",
  "address": "Full address here"
}
```

### GET /api/stats
Get registration statistics

### GET /api/registrations
Get all registrations (with optional status filter)

### PATCH /api/registrations/[id]
Update registration status

### DELETE /api/registrations/[id]
Delete a registration

## Customization

### Event Details
Update event information in:
- `src/components/hero.tsx` - Hero section and countdown
- `src/components/schedule.tsx` - Event schedule
- `src/components/about.tsx` - About section

### Styling
Modify colors and themes in:
- `src/app/globals.css` - CSS variables for theming
- `tailwind.config.ts` - Tailwind configuration

### API Integration
Replace mock data in API routes with actual database calls:
- `src/app/api/register/route.ts`
- `src/app/api/registrations/route.ts`
- `src/app/api/stats/route.ts`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project and deploy the `.next` folder to any hosting platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is owned by SGSITS Indore.

## Contact

For any queries, contact: udaan@sgsits.ac.in

---

**आज की सफलता, कल की प्रेरणा**
*Today's success, tomorrow's inspiration*
