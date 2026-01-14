'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
      <div className="flex flex-col items-center justify-center gap-2 text-primary-500">
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ChevronDown size={24} />
      </div>
    </div>
  )
}
