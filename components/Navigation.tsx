'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/despre', label: 'Despre Noi' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-display font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            {businessInfo.shortName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-primary-600 ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-neutral'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500" />
                )}
              </Link>
            ))}
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">{businessInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-neutral'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center gap-2 mt-4 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">{businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
