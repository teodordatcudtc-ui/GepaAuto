'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { Service } from '@/data/services'
import { Wrench, Settings, Search, Droplet, Circle, Hammer, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  settings: Settings,
  search: Search,
  droplet: Droplet,
  circle: Circle,
  tool: Hammer,
}

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.icon] || Wrench

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-neutral-light via-white to-primary-50 overflow-hidden">
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Înapoi la servicii
            </Link>
            <div className="w-20 h-20 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon size={40} className="text-primary-600" />
            </div>
            <h1 className="text-display-2 font-display text-neutral mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-neutral-mid max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-display-3 font-display text-neutral mb-6">Despre acest serviciu</h2>
            <p className="text-lg text-neutral-mid leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <h3 className="text-2xl font-bold text-neutral mb-6">Ce include serviciul:</h3>
            <ul className="space-y-4 mb-12">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-lg text-neutral-mid">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-neutral mb-4">
                Interesat de acest serviciu?
              </h3>
              <p className="text-neutral-mid mb-6">
                Contactează-ne pentru o consultanță gratuită sau programează o vizită.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                Programează acum
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
