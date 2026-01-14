'use client'

import { motion } from 'framer-motion'

export default function LegalContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          <h1 className="text-display-1 font-display text-neutral mb-8">Politici Legale</h1>

          <div className="space-y-12">
            <div>
              <h2 className="text-display-3 font-display text-neutral mb-6">
                Politica de Confidențialitate
              </h2>
              <div className="text-neutral-mid space-y-4 leading-relaxed">
                <p>
                  GEPA AUTO SERVICE respectă confidențialitatea vizitatorilor site-ului nostru și
                  se angajează să protejeze informațiile personale furnizate.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Colectarea Informațiilor
                </h3>
                <p>
                  Colectăm informații personale doar când acestea sunt furnizate voluntar de către
                  utilizatori prin formularele de contact sau programare. Informațiile colectate
                  includ: nume, email, telefon și mesaj.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Utilizarea Informațiilor
                </h3>
                <p>
                  Informațiile colectate sunt folosite exclusiv pentru a răspunde la solicitările
                  dumneavoastră, pentru a programa vizite și pentru a îmbunătăți serviciile noastre.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Securitatea Datelor
                </h3>
                <p>
                  Implementăm măsuri de securitate pentru a proteja informațiile personale împotriva
                  accesului neautorizat, modificării, dezvăluirii sau distrugerii.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-display-3 font-display text-neutral mb-6">
                Termeni și Condiții
              </h2>
              <div className="text-neutral-mid space-y-4 leading-relaxed">
                <p>
                  Prin accesarea și utilizarea acestui site, acceptați termenii și condițiile de mai jos.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Utilizarea Site-ului
                </h3>
                <p>
                  Site-ul este destinat pentru informare despre serviciile oferite de GEPA AUTO SERVICE.
                  Conținutul site-ului este proprietatea noastră și este protejat de legile drepturilor
                  de autor.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Limitarea Răspunderii
                </h3>
                <p>
                  GEPA AUTO SERVICE nu își asumă răspunderea pentru daune directe sau indirecte
                  rezultate din utilizarea sau imposibilitatea utilizării site-ului.
                </p>
                <h3 className="text-xl font-semibold text-neutral mt-6 mb-3">
                  Modificări
                </h3>
                <p>
                  Ne rezervăm dreptul de a modifica termenii și condițiile în orice moment, fără
                  notificare prealabilă.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="text-neutral-mid">
                Pentru întrebări despre politicile noastre, vă rugăm să ne contactați la{' '}
                <a href="mailto:contact@gepa-auto-service.ro" className="text-primary-600 hover:underline">
                  contact@gepa-auto-service.ro
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
