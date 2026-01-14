'use client'

import { motion } from 'framer-motion'

export default function GalleryHero() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 flex items-center justify-center bg-gradient-to-br from-neutral-light via-white to-primary-50 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-display-2 font-display text-neutral mb-4">
            Galerie <span className="gradient-text">Foto</span>
          </h1>
          <p className="text-lg lg:text-xl text-neutral-mid max-w-2xl mx-auto">
            Explorează atelierul nostru și lucrările noastre.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
