'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import ServiceCard from '@/components/ServiceCard'

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const featuredServices = services.slice(0, 3)

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header - Asymmetric */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-display-2 font-display text-neutral mb-6">
              Serviciile <span className="gradient-text">Noastre</span>
            </h2>
            <p className="text-lg text-neutral-mid">
              Oferim servicii complete de service auto, de la reparații majore la întreținere preventivă.
              Fiecare serviciu este executat cu profesionalism și atenție la detalii.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Non-uniform */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
          >
            Vezi toate serviciile
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
