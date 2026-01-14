'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { businessInfo } from '@/data/constants'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulare trimitere email (în producție, folosește un API endpoint)
    const emailBody = `
Programare nouă - GEPA AUTO SERVICE

Nume: ${formData.name}
Telefon: ${formData.phone}
Email: ${formData.email}
Data: ${formData.date}
Ora: ${formData.time}
Serviciu: ${formData.service}
Mesaj: ${formData.message}
    `.trim()

    const mailtoLink = `mailto:${businessInfo.email}?subject=Programare nouă&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          service: '',
          message: '',
        })
      }, 2000)
    }, 500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-neutral">Programează o vizită</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Închide"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-lg text-neutral">Programarea a fost trimisă!</p>
              <p className="text-neutral-mid mt-2">Vă vom contacta în curând.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-neutral mb-1">
                    Data preferată *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-neutral mb-1">
                    Ora preferată *
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral mb-1">
                  Serviciu dorit
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Selectează un serviciu</option>
                  <option value="reparatii-auto">Reparații Auto</option>
                  <option value="intretinere-auto">Întreținere Auto</option>
                  <option value="diagnostic-auto">Diagnostic Auto</option>
                  <option value="schimb-ulei-filtre">Schimb Ulei și Filtre</option>
                  <option value="pneuri-jante">Pneuri și Jante</option>
                  <option value="vulcanizare">Vulcanizare</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">
                  Mesaj (opțional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Anulează
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite programarea'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
