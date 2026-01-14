'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Settings, Search } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative pt-20 lg:pt-24 pb-6 flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-light via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-accent-light rounded-full blur-3xl opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Wrench size={40} className="text-primary-300 opacity-30" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Settings size={35} className="text-primary-400 opacity-25" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Search size={30} className="text-accent opacity-20" />
        </motion.div>
      </div>

      <div ref={heroRef} className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Headline - Asymmetric Layout */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                <h1 className="text-display-1 font-display text-neutral mb-4 text-balance">
                  <span className="block">Service Auto</span>
                  <span className="block gradient-text">Profesional</span>
                  <span className="block text-2xl lg:text-3xl mt-3 text-neutral-mid">
                    în București
                  </span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <p className="text-xl lg:text-2xl text-neutral-mid text-balance">
                  Experiență, profesionalism și pasiune pentru fiecare autovehicul.
                  <br />
                  <span className="text-primary-600 font-semibold">
                    Reparații, întreținere, diagnostic.
                  </span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg overflow-hidden hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 text-center text-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Programează o vizită
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 text-center text-lg"
                >
                  {businessInfo.phone}
                </a>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/hero-image.jpg"
                  alt="GEPA AUTO SERVICE - Service Auto Profesional"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
