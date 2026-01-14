'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'

export default function AboutPreview() {
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

  return (
    <section ref={sectionRef} className="section-padding bg-neutral text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-display-2 font-display mb-6 text-primary-400">
              Despre <span className="text-white">Noi</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              Cu peste 15 ani de experiență în domeniul service-ului auto, GEPA AUTO SERVICE
              este sinonim cu profesionalism, calitate și încredere. Echipa noastră de mecanicieni
              experimentați oferă soluții complete pentru toate nevoile autovehiculului tău.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Ne mândrim cu atelierul modern, echipat cu tehnologie de ultimă generație, și cu
              abordarea noastră orientată către client, unde fiecare detaliu contează.
            </p>
            <Link
              href="/despre"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              Află mai multe
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="text-primary-400 mb-4" size={40} />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-neutral-300">Ani experiență</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="text-primary-400 mb-4" size={40} />
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-neutral-300">Clienți mulțumiți</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="text-primary-400 mb-4" size={40} />
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-neutral-300">Disponibilitate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="text-primary-400 mb-4" size={40} />
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-neutral-300">Garantie calitate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
