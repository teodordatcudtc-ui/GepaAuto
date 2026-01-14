'use client'

import { mapEmbed } from '@/data/constants'

export default function MapEmbed() {
  return (
    <section className="w-full h-[500px] lg:h-[600px] bg-neutral-200">
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: mapEmbed }}
      />
    </section>
  )
}
