import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              {businessInfo.name}
            </h3>
            <p className="text-neutral-300 mb-4">
              {businessInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/despre"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link
                  href="/servicii"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  Servicii
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  {businessInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">{businessInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-neutral-300 mb-4">
              <li>Luni - Vineri: {businessInfo.workingHours.weekdays}</li>
              <li>Sâmbătă: {businessInfo.workingHours.saturday}</li>
              <li>Duminică: {businessInfo.workingHours.sunday}</li>
            </ul>
            <div className="mt-4">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} {businessInfo.name}. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/legal"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
              >
                Politici Legale
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
