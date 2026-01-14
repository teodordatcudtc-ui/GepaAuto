import type { Metadata } from 'next'
import LegalContent from '@/components/sections/LegalContent'

export const metadata: Metadata = {
  title: 'Politici Legale',
  description: 'Politica de confidențialitate și termeni și condiții GEPA AUTO SERVICE.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LegalPage() {
  return <LegalContent />
}
