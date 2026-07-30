import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL("https://udaan.sgsits.ac.in"),
  title: "Udaan 2026 • SGSITS Indore - Graduation & Certificate Ceremony",
  description: "आज की सफलता, कल की प्रेरणा - Today's success, tomorrow's inspiration. Celebrating achievement and excellence at SGSITS Indore.",
  keywords: ["Udaan 2026", "SGSITS", "Indore", "Graduation", "Certificate Ceremony", "Gold Medal"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Udaan 2026 • SGSITS Indore",
    description: "Annual Certificate & Gold Medal Distribution Ceremony at SGSITS Indore.",
    url: "https://udaan.sgsits.ac.in",
    siteName: "SGSITS UDAAN 2026",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
