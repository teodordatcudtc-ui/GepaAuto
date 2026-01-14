import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/ServicesHero'
import ServicesList from '@/components/sections/ServicesList'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Servicii complete de service auto: reparații, întreținere, diagnostic, schimb ulei, filtre, pneuri și multe altele.',
  openGraph: {
    title: 'Servicii | GEPA AUTO SERVICE',
    description: 'Servicii complete de service auto profesionale.',
  },
}

export default function ServiciiPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
    </>
  )
}
