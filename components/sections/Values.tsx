'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Shield, Zap } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Calitate',
    description: 'Folosim doar piese și materiale de cea mai înaltă calitate, garantând durabilitate și performanță.',
  },
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Iubim ce facem și ne dedicăm cu pasiune fiecărui proiect, indiferent de complexitate.',
  },
  {
    icon: Shield,
    title: 'Încredere',
    description: 'Construim relații de încredere pe termen lung prin transparență, onestitate și profesionalism.',
  },
  {
    icon: Zap,
    title: 'Eficiență',
    description: 'Lucrăm rapid și eficient, respectând termenele și minimizând timpul de nefuncționare al autovehiculului.',
  },
]

export default function Values() {
  return (
    <section className="section-padding bg-neutral-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 font-display text-neutral mb-6">
            Valorile <span className="gradient-text">Noastre</span>
          </h2>
          <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
            Principiile care ne ghidează în fiecare zi și în fiecare lucrare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral mb-4">{value.title}</h3>
                <p className="text-neutral-mid">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
