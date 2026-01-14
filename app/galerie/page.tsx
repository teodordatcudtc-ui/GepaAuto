import type { Metadata } from 'next'
import GalleryHero from '@/components/sections/GalleryHero'
import GalleryGrid from '@/components/sections/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Galerie foto cu lucrările noastre, atelierul și echipa GEPA AUTO SERVICE.',
  openGraph: {
    title: 'Galerie | GEPA AUTO SERVICE',
    description: 'Galerie foto cu lucrările și atelierul nostru.',
  },
}

export default function GaleriePage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
