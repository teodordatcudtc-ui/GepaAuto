'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const teamMembers = [
  {
    name: 'Echipa Noastră',
    role: 'Mecanicieni Experțizați',
    description: 'Echipa noastră este formată din mecanicieni cu experiență de peste 10 ani în domeniu, certificați și în continuă formare profesională.',
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-display text-neutral mb-6">
            Echipa <span className="gradient-text">Noastră</span>
          </h2>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            Profesioniști dedicați, cu experiență și pasiune pentru service auto.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 lg:p-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral mb-3">{teamMembers[0].name}</h3>
                <p className="text-lg text-primary-700 font-semibold mb-4">{teamMembers[0].role}</p>
                <p className="text-neutral-mid leading-relaxed">{teamMembers[0].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
