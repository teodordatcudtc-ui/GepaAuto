'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20H20zm-2 0v2H0v-2h18zm0-4v2H0v-2h18zm0-4v2H0v-2h18zm0-4v2H0v-2h18z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-2 font-display mb-6">
            Gata să începem?
          </h2>
          <p className="text-xl mb-10 text-primary-100">
            Contactează-ne astăzi pentru o consultanță gratuită sau programează o vizită.
            Echipa noastră este pregătită să te ajute cu orice nevoie de service auto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar size={20} />
              Programează acum
            </Link>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={20} />
              {businessInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
