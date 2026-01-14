'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ion Popescu',
    role: 'Client de peste 5 ani',
    rating: 5,
    text: 'Serviciu excelent! Echipa este foarte profesionistă și atentă la detalii. Am revenit de multe ori și sunt mereu mulțumit de calitatea lucrărilor.',
  },
  {
    id: 2,
    name: 'Maria Ionescu',
    role: 'Client nou',
    rating: 5,
    text: 'Am fost recomandată de un prieten și nu am fost dezamăgită. Reparația a fost făcută rapid și la prețuri corecte. Recomand cu încredere!',
  },
  {
    id: 3,
    name: 'Alexandru Georgescu',
    role: 'Client de peste 3 ani',
    rating: 5,
    text: 'Cel mai bun service auto din București! Mecanicienii sunt experimentați, atelierul este modern și prețurile sunt corecte. Mulțumesc echipei!',
  },
  {
    id: 4,
    name: 'Elena Radu',
    role: 'Clientă',
    rating: 5,
    text: 'Am fost impresionată de profesionalismul echipei. Totul a fost explicat clar, iar lucrarea a fost finalizată la timp. Voi reveni cu siguranță!',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-display text-neutral mb-6">
            Ce Spun <span className="gradient-text">Clienții</span>
          </h2>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            Suntem mândri de încrederea pe care clienții noștri o acordă serviciilor noastre.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <Quote className="text-primary-300 mb-6" size={40} />
              <p className="text-xl text-neutral mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg text-neutral mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-neutral-mid text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-primary-500 fill-primary-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Testimonial următor"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
