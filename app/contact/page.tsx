import type { Metadata } from 'next'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import MapEmbed from '@/components/MapEmbed'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează GEPA AUTO SERVICE. Telefon: 0746576385. Adresă: Drumul Regimentului 52, București 013887.',
  openGraph: {
    title: 'Contact | GEPA AUTO SERVICE',
    description: 'Contactează-ne pentru programări și consultanță.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-padding bg-neutral-light -mt-8 lg:-mt-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <MapEmbed />
    </>
  )
}
