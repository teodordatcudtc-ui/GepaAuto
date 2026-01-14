'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'
import { businessInfo } from '@/data/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulare trimitere email (în producție, folosește un API endpoint)
    const emailBody = `
Mesaj nou de pe site - GEPA AUTO SERVICE

Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Subiect: ${formData.subject}

Mesaj:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:${businessInfo.email}?subject=${encodeURIComponent(formData.subject || 'Contact de pe site')}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      }, 3000)
    }, 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
    >
      <h2 className="text-display-3 font-display text-neutral mb-6">Trimite un mesaj</h2>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-primary-600" size={32} />
          </div>
          <p className="text-lg text-neutral font-semibold mb-2">Mesaj trimis cu succes!</p>
          <p className="text-neutral-mid">Vă vom răspunde în cel mai scurt timp.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-2">
                Subiect
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">
              Mesaj *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Se trimite...'
            ) : (
              <>
                <Send size={20} />
                Trimite mesajul
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}
