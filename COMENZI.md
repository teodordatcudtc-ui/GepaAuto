# 📋 Comenzi Exacte - Copy-Paste Ready

## 🚀 Instalare Inițială

```bash
npm install
```

## 💻 Dezvoltare

```bash
npm run dev
```

Site-ul va rula la: **http://localhost:3000**

## 🏗️ Build pentru Producție

```bash
npm run build
```

## ▶️ Rulare Build de Producție

```bash
npm start
```

## 🔍 Linting

```bash
npm run lint
```

---

## 📦 Librării Folosite (Versiuni)

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0"
  }
}
```

---

## ⚠️ IMPORTANT - Pași Pre-Lansare

1. **Adaugă imagini reale**:
   - Creează folderul `public/gallery/`
   - Adaugă imagini: `1.jpg`, `2.jpg`, `3.jpg`, etc. (minim 9 imagini)

2. **Creează asset-uri**:
   - `public/og-image.jpg` (1200x630px) - pentru social sharing
   - `public/favicon.ico` - favicon site
   - `public/icon-192.png` - icon PWA 192x192
   - `public/icon-512.png` - icon PWA 512x512

3. **Actualizează configurarea**:
   - În `app/layout.tsx` - actualizează Google Verification Code (linia 71)
   - În `app/layout.tsx` și `app/sitemap.ts` - actualizează URL-ul domeniului dacă este diferit de `https://gepa-auto-service.ro`

4. **Testează formularele**:
   - Formular Contact (`/contact`)
   - Modal Booking (buton "Programează" pe mobil sau din hero)

---

## ✅ Verificare Finală

După instalare, verifică:

- [ ] Site-ul se încarcă fără erori
- [ ] Toate paginile sunt accesibile
- [ ] Navigarea funcționează corect
- [ ] Formularele se deschid și funcționează
- [ ] Design-ul este responsive pe mobile
- [ ] Animațiile funcționează corect
- [ ] Linkurile externe (Facebook, telefon) funcționează
