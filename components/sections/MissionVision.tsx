'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding bg-white -mt-8 lg:-mt-12">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-50 rounded-2xl p-8 lg:p-12"
          >
            <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-display-3 font-display text-neutral mb-6">Misiunea Noastră</h2>
            <p className="text-lg text-neutral-mid leading-relaxed mb-4">
              Să oferim servicii de service auto de cea mai înaltă calitate, folosind tehnologie
              modernă și echipă experimentată, pentru a menține autovehiculele clienților noștri
              în stare optimă de funcționare.
            </p>
            <p className="text-lg text-neutral-mid leading-relaxed">
              Ne angajăm să oferim transparență totală, prețuri corecte și servicii rapide,
              construind relații de încredere pe termen lung cu fiecare client.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral text-white rounded-2xl p-8 lg:p-12"
          >
            <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-display-3 font-display text-primary-400 mb-6">Viziunea Noastră</h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              Să devenim cel mai de încredere service auto din București, recunoscut pentru
              excelență, inovație și satisfacția clienților.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Vrem să construim o comunitate de clienți mulțumiți care ne recomandă cu încredere
              și să continuăm să ne dezvoltăm, adoptând cele mai noi tehnologii și standarde
              din industrie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
