import type { Metadata } from 'next'
import AboutHero from '@/components/sections/AboutHero'
import MissionVision from '@/components/sections/MissionVision'
import Team from '@/components/sections/Team'
import Values from '@/components/sections/Values'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'GEPA AUTO SERVICE - Experiență, profesionalism și pasiune pentru service auto. Află mai multe despre echipa noastră și valorile noastre.',
  openGraph: {
    title: 'Despre Noi | GEPA AUTO SERVICE',
    description: 'Află mai multe despre GEPA AUTO SERVICE, echipa noastră și valorile noastre.',
  },
}

export default function DesprePage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <Values />
      <Team />
    </>
  )
}
