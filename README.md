# GEPA AUTO SERVICE - Site Web

Site web complet funcțional pentru GEPA AUTO SERVICE, construit cu Next.js 14, TypeScript, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- **Design Premium Anti-Template**: Layout asimetric, animații fluide, identitate vizuală unică
- **Multi-Page Real**: Routing complet cu Next.js App Router
- **Responsive Mobile-First**: Design optimizat pentru toate dispozitivele
- **SEO Optimizat**: Meta tags, JSON-LD structured data, sitemap.xml, robots.txt
- **Accesibilitate**: ARIA labels, contrast optim, navigare cu tastatură
- **Interacțiuni Avansate**: 
  - Carduri flip 3D
  - Carousel testimoniale
  - Cursor custom (desktop)
  - Scroll animations
  - Hover effects
  - Sticky contact bar (mobile)
  - Booking modal

## 📁 Structura Proiectului

```
gepa-auto/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal cu metadata
│   ├── page.tsx           # Pagina Home
│   ├── despre/            # Pagina Despre Noi
│   ├── servicii/          # Pagina Servicii + pagini individuale
│   ├── galerie/            # Pagina Galerie
│   ├── contact/            # Pagina Contact
│   ├── legal/              # Pagina Politici Legale
│   ├── sitemap.ts          # Generare sitemap.xml
│   ├── robots.ts           # Generare robots.txt
│   └── globals.css         # Stiluri globale
├── components/             # Componente React
│   ├── sections/          # Secțiuni de pagină
│   ├── Navigation.tsx     # Navigare principală
│   ├── Footer.tsx         # Footer
│   ├── CursorFollower.tsx # Cursor custom
│   ├── StickyContactBar.tsx # Bară contact mobil
│   └── ...
├── data/                   # Date și constante
│   ├── services.ts        # Lista serviciilor
│   └── constants.ts       # Informații business
├── public/                 # Asset-uri statice
└── package.json           # Dependințe
```

## 🛠️ Instalare și Rulare

### 1. Instalează dependințele

```bash
npm install
```

### 2. Rulează serverul de dezvoltare

```bash
npm run dev
```

Site-ul va fi disponibil la [http://localhost:3000](http://localhost:3000)

### 3. Build pentru producție

```bash
npm run build
npm start
```

## 🎨 Personalizare

### Schimbarea Culorilor

Culorile principale sunt definite în `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#b5ae1e',  // Galben principal
    // ... variante
  }
}
```

Pentru a schimba paleta de culori, modifică valorile în `tailwind.config.ts`.

### Modificarea Conținutului

#### Informații Business
Editează `data/constants.ts`:
- Nume business
- Telefon
- Adresă
- Email
- Social media

#### Servicii
Editează `data/services.ts` pentru a adăuga, modifica sau șterge servicii.

#### Testimoniale
Editează array-ul `testimonials` în `components/sections/Testimonials.tsx`.

### Adăugarea Imaginilor

1. **Galerie**: Adaugă imagini în `public/gallery/` (1.jpg, 2.jpg, etc.)
2. **OG Image**: Adaugă `public/og-image.jpg` (1200x630px)
3. **Favicon**: Adaugă `public/favicon.ico`
4. **Icons**: Adaugă `public/icon-192.png` și `public/icon-512.png`

## 📱 Pagini Disponibile

- `/` - Home (Hero, Servicii Preview, Despre Preview, Testimoniale, CTA)
- `/despre` - Despre Noi (Misiune, Viziune, Valori, Echipă)
- `/servicii` - Lista Serviciilor
- `/servicii/[slug]` - Pagini individuale pentru fiecare serviciu
- `/galerie` - Galerie Foto
- `/contact` - Formular Contact + Informații + Hartă
- `/legal` - Politici Legale

## ✨ Elemente Interacțive Implementate

1. ✅ Hover animations (tranziții fluide)
2. ✅ Scroll animations (reveal la scroll)
3. ✅ Carduri servicii flip 3D
4. ✅ Carousel testimoniale (autoplay + manual)
5. ✅ Sticky contact bar pe mobil
6. ✅ CTA "Book a slot" cu modal
7. ✅ Page transitions subtile
8. ✅ Scroll indicator
9. ✅ Loader inițial
10. ✅ Feedback vizual la click
11. ✅ Tipografie mare, aerisită
12. ✅ Contrast tipografic extrem
13. ✅ Background-uri subtile
14. ✅ Secțiuni cu fundal inversat
15. ✅ Cursor custom (desktop)
16. ✅ Hover cu follow-cursor
17. ✅ Galerie non-clasică (lightbox)
18. ✅ Reveal la scroll
19. ✅ Animații bazate pe scroll progress
20. ✅ Delay-uri diferite între elemente

## 🔍 SEO

- ✅ Meta tags complete per pagină
- ✅ JSON-LD LocalBusiness structured data
- ✅ Sitemap.xml generat automat
- ✅ Robots.txt configurat
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Hreflang (ro-RO)

## ♿ Accesibilitate

- ✅ ARIA labels pe elemente interactive
- ✅ Contrast cromatic optim (WCAG AA)
- ✅ Navigare cu tastatură
- ✅ Focus states vizibile
- ✅ Semantic HTML
- ✅ Alt text pentru imagini (de adăugat)

## 📦 Dependințe Principale

- **next**: ^14.2.0 - Framework React
- **react**: ^18.3.0 - Biblioteca UI
- **framer-motion**: ^11.0.0 - Animații
- **tailwindcss**: ^3.4.0 - Stilizare
- **lucide-react**: ^0.344.0 - Iconuri
- **typescript**: ^5.3.0 - Type safety

## 📋 Checklist Post-Lansare

### Înainte de Lansare

- [ ] Adaugă imagini reale în `public/gallery/`
- [ ] Creează `public/og-image.jpg` (1200x630px)
- [ ] Adaugă favicon (`public/favicon.ico`)
- [ ] Adaugă iconuri PWA (`public/icon-192.png`, `public/icon-512.png`)
- [ ] Actualizează Google Verification Code în `app/layout.tsx`
- [ ] Testează toate formularele (contact, booking)
- [ ] Verifică toate linkurile externe
- [ ] Testează pe dispozitive mobile
- [ ] Verifică accesibilitatea (screen reader, keyboard navigation)
- [ ] Rulează Lighthouse audit (SEO, Performance, Accessibility)
- [ ] Configurează domeniul și hosting
- [ ] Actualizează URL-urile în `data/constants.ts` și `app/layout.tsx`

### După Lansare

- [ ] Submit sitemap la Google Search Console
- [ ] Configurează Google Analytics (opțional)
- [ ] Monitorizează erorile (Sentry sau similar)
- [ ] Testează formularele în producție
- [ ] Verifică viteza de încărcare
- [ ] Testează pe diferite browsere

## 🐛 Rezolvarea Problemelor

### Eroare la build
```bash
# Șterge .next și reinstalează
rm -rf .next node_modules
npm install
npm run build
```

### Stiluri nu se aplică
Verifică că `tailwind.config.ts` include toate căile corecte.

### Animații nu funcționează
Asigură-te că `framer-motion` este instalat corect și că componentele sunt marcate cu `'use client'`.

## 📞 Suport

Pentru întrebări sau probleme, contactează echipa de dezvoltare.

---

**GEPA AUTO SERVICE** - Service Auto Profesional în București
