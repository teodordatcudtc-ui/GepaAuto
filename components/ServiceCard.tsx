'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Wrench, Settings, Search, Droplet, Circle, Hammer, LucideIcon } from 'lucide-react'
import { Service } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  settings: Settings,
  search: Search,
  droplet: Droplet,
  circle: Circle,
  tool: Hammer,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = iconMap[service.icon] || Wrench

  return (
    <div
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white border-2 border-neutral-200 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon size={32} className="text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral mb-4">{service.title}</h3>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-neutral-mid text-sm">
                  <span className="text-primary-500 mt-1 flex-shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2 text-primary-600 font-semibold">
              <span>Află mai multe</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 flex flex-col text-white">
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <ul className="space-y-2 mb-6 flex-grow">
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary-200 mt-1">✓</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/servicii/${service.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Detalii complete
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
