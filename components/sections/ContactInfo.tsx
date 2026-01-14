'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Facebook } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-display-3 font-display text-neutral mb-6">Informații de contact</h2>
        <p className="text-lg text-neutral-mid mb-8">
          Suntem disponibili pentru a răspunde la întrebările tale și pentru a programa o vizită.
        </p>
      </div>

      <div className="space-y-6">
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group"
        >
          <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-neutral mb-1">Telefon</h3>
            <p className="text-primary-600 font-medium">{businessInfo.phoneFormatted}</p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-6 bg-neutral-light rounded-xl">
          <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-neutral mb-1">Adresă</h3>
            <p className="text-neutral-mid">{businessInfo.address}</p>
          </div>
        </div>

        <a
          href={`mailto:${businessInfo.email}`}
          className="flex items-start gap-4 p-6 bg-neutral-light rounded-xl hover:bg-neutral-100 transition-colors group"
        >
          <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-neutral mb-1">Email</h3>
            <p className="text-neutral-mid">{businessInfo.email}</p>
          </div>
        </a>

        <div className="flex items-start gap-4 p-6 bg-neutral-light rounded-xl">
          <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-neutral mb-1">Program</h3>
            <div className="text-neutral-mid space-y-1">
              <p>Luni - Vineri: {businessInfo.workingHours.weekdays}</p>
              <p>Sâmbătă: {businessInfo.workingHours.saturday}</p>
              <p>Duminică: {businessInfo.workingHours.sunday}</p>
            </div>
          </div>
        </div>

        <a
          href={businessInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 bg-neutral-light rounded-xl hover:bg-neutral-100 transition-colors group"
        >
          <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Facebook className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-neutral mb-1">Facebook</h3>
            <p className="text-neutral-mid">Urmărește-ne pe Facebook</p>
          </div>
        </a>
      </div>
    </motion.div>
  )
}
