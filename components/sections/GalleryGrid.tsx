'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

// Placeholder images - în producție, înlocuiește cu imagini reale
const galleryImages = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Atelier GEPA AUTO', category: 'atelier' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Echipament modern', category: 'echipament' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Lucrări în desfășurare', category: 'lucrari' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Echipa noastră', category: 'echipa' },
  { id: 5, src: '/gallery/5.jpg', alt: 'Reparații auto', category: 'lucrari' },
  { id: 6, src: '/gallery/6.jpg', alt: 'Diagnostic auto', category: 'echipament' },
  { id: 7, src: '/gallery/7.jpg', alt: 'Service auto', category: 'atelier' },
  { id: 8, src: '/gallery/8.jpg', alt: 'Mecanicieni la lucru', category: 'echipa' },
  { id: 9, src: '/gallery/9.jpg', alt: 'Reparații', category: 'lucrari' },
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <section className="section-padding bg-white -mt-8 lg:-mt-12">
        <div className="container-custom">
          {/* Non-classic grid layout - overlapping cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="aspect-square bg-neutral-200 relative">
                  {/* Placeholder - înlocuiește cu Image component din Next.js */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                    <span className="text-primary-700 font-semibold">{image.alt}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Click pentru a mări
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
                aria-label="Închide"
              >
                <X size={32} />
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-mid">
                    {galleryImages.find((img) => img.id === selectedImage)?.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
