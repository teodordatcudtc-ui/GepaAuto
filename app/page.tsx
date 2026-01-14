import Hero from '@/components/sections/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview'
import AboutPreview from '@/components/sections/AboutPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollIndicator />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
