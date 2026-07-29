import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Udaan • SGSITS Indore - Annual Certificate and Gold Medal Distribution Ceremony",
  description: "आज की सफलता, कल की प्रेरणा - Today's success, tomorrow's inspiration. Celebrating achievement and excellence at SGSITS Indore.",
  keywords: ["Udaan", "SGSITS", "Indore", "Certificate Ceremony", "Gold Medal", "Achievement"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
