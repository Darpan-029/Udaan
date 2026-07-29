import Link from "next/link"
import { Award, Mail, Phone, MapPin, Calendar, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-white rounded-lg shadow-sm border">
                <img
                  src="/images/sgsits_logo.png"
                  alt="SGSITS Indore"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-wide">UDAAN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              आज की सफलता, कल की प्रेरणा<br />
              Today&apos;s success, tomorrow&apos;s inspiration
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#schedule" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#register" className="hover:text-primary transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs/brochure.pdf" className="hover:text-primary transition-colors">Brochure</Link></li>
              <li><Link href="/docs/schedule.pdf" className="hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link href="/docs/dresscode.docx" className="hover:text-primary transition-colors">Dress Code</Link></li>
              <li><Link href="#circular" className="hover:text-primary transition-colors">Circular & Guidelines</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>SGSITS, Indore</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>udaan@sgsits.ac.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 731 2764 576</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <Link href="https://facebook.com/sgsits" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/sgsits_official" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/sgsits" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SGSITS Indore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
