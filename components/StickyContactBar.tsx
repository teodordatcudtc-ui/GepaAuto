'use client'

import { Phone, Calendar, Navigation } from 'lucide-react'
import { businessInfo } from '@/data/constants'
import BookingModal from './BookingModal'
import { useState } from 'react'

export default function StickyContactBar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 shadow-lg">
        <div className="grid grid-cols-3 divide-x divide-neutral-200">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex flex-col items-center justify-center py-3 px-2 text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Sună"
          >
            <Phone size={20} />
            <span className="text-xs font-medium mt-1">Sună</span>
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex flex-col items-center justify-center py-3 px-2 text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Programează"
          >
            <Calendar size={20} />
            <span className="text-xs font-medium mt-1">Programează</span>
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 px-2 text-primary-600 hover:bg-primary-50 transition-colors"
            aria-label="Direcții"
          >
            <Navigation size={20} />
            <span className="text-xs font-medium mt-1">Direcții</span>
          </a>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
