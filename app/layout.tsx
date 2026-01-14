import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StickyContactBar from '@/components/StickyContactBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'GEPA AUTO SERVICE - Service Auto Profesional în București',
    template: '%s | GEPA AUTO SERVICE',
  },
  description: 'Service auto profesional în București. Reparații, întreținere, diagnostic auto. Experiență și profesionalism pentru mașina ta.',
  keywords: ['service auto', 'reparații auto', 'București', 'diagnostic auto', 'GEPA AUTO'],
  authors: [{ name: 'GEPA AUTO SERVICE' }],
  creator: 'GEPA AUTO SERVICE',
  publisher: 'GEPA AUTO SERVICE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gepa-auto-service.ro'),
  alternates: {
    canonical: '/',
    languages: {
      'ro-RO': '/ro',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://gepa-auto-service.ro',
    siteName: 'GEPA AUTO SERVICE',
    title: 'GEPA AUTO SERVICE - Service Auto Profesional în București',
    description: 'Service auto profesional în București. Reparații, întreținere, diagnostic auto.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GEPA AUTO SERVICE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEPA AUTO SERVICE - Service Auto Profesional',
    description: 'Service auto profesional în București',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'GEPA AUTO SERVICE',
              image: 'https://gepa-auto-service.ro/og-image.jpg',
              '@id': 'https://gepa-auto-service.ro',
              url: 'https://gepa-auto-service.ro',
              telephone: '+40746576385',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Drumul Regimentului 52',
                addressLocality: 'București',
                postalCode: '013887',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.50561859688319,
                longitude: 26.04722737666406,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.facebook.com/p/GEPA-AUTO-Service-100067002489189/',
              ],
            }),
          }}
        />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  )
}
