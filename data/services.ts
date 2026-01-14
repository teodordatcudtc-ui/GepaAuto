export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  fullDescription: string
  icon: string
  features: string[]
  price?: string
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'reparatii-auto',
    title: 'Reparații Auto',
    shortDescription: 'Reparații complete pentru toate mărcile de autovehicule',
    description: 'Servicii profesionale de reparații auto pentru toate mărcile și modelele',
    fullDescription: 'Oferim servicii complete de reparații auto pentru toate mărcile și modelele de autovehicule. Echipa noastră de mecanicieni experimentați poate rezolva orice problemă, de la reparații minore la reparații majore ale motorului, transmisiei sau sistemelor electronice.',
    icon: 'wrench',
    features: [
      'Reparații motor',
      'Reparații transmisie',
      'Reparații sistem electric',
      'Reparații sistem de frânare',
      'Reparații sistem de direcție',
      'Diagnostic complet',
    ],
  },
  {
    id: '2',
    slug: 'intretinere-auto',
    title: 'Întreținere Auto',
    shortDescription: 'Servicii de întreținere preventivă pentru mașina ta',
    description: 'Întreținere regulată pentru a menține mașina în stare optimă',
    fullDescription: 'Întreținerea regulată este esențială pentru durata de viață și performanța autovehiculului tău. Oferim servicii complete de întreținere, inclusiv schimb de ulei, filtre, verificări periodice și multe altele.',
    icon: 'settings',
    features: [
      'Schimb ulei și filtre',
      'Verificări periodice',
      'Ajustări și calibrare',
      'Lubrifiere',
      'Verificare sistem de răcire',
      'Verificare baterie',
    ],
  },
  {
    id: '3',
    slug: 'diagnostic-auto',
    title: 'Diagnostic Auto',
    shortDescription: 'Diagnostic profesional cu echipamente moderne',
    description: 'Diagnostic complet al autovehiculului cu tehnologie de ultimă generație',
    fullDescription: 'Folosim echipamente moderne de diagnostic pentru a identifica rapid și precis orice problemă cu autovehiculul tău. Diagnosticul nostru acoperă toate sistemele: motor, transmisie, frâne, suspensie și electronice.',
    icon: 'search',
    features: [
      'Diagnostic computerizat',
      'Citire coduri eroare',
      'Testare sisteme',
      'Raport detaliat',
      'Consultanță tehnică',
      'Estimare costuri',
    ],
  },
  {
    id: '4',
    slug: 'schimb-ulei-filtre',
    title: 'Schimb Ulei și Filtre',
    shortDescription: 'Schimb rapid și profesional de ulei și filtre',
    description: 'Servicii de schimb ulei și filtre cu produse de calitate',
    fullDescription: 'Schimbul regulat al uleiului și filtrelor este crucial pentru performanța motorului. Oferim servicii rapide și profesionale folosind doar produse de calitate superioară.',
    icon: 'droplet',
    features: [
      'Schimb ulei motor',
      'Schimb filtru ulei',
      'Schimb filtru aer',
      'Schimb filtru habitaclu',
      'Schimb filtru combustibil',
      'Verificare nivel lichide',
    ],
  },
  {
    id: '5',
    slug: 'pneuri-jante',
    title: 'Pneuri și Jante',
    shortDescription: 'Servicii complete pentru pneuri și jante',
    description: 'Montare, echilibrare, rotație și reparare pneuri',
    fullDescription: 'Oferim servicii complete pentru pneuri și jante: montare, echilibrare, rotație, reparare și vânzare. Avem pneuri pentru toate tipurile de autovehicule și sezoane.',
    icon: 'circle',
    features: [
      'Montare pneuri',
      'Echilibrare roți',
      'Rotație pneuri',
      'Reparare pneuri',
      'Vânzare pneuri',
      'Schimb jante',
    ],
  },
  {
    id: '6',
    slug: 'vulcanizare',
    title: 'Vulcanizare',
    shortDescription: 'Servicii profesionale de vulcanizare',
    description: 'Reparare și vulcanizare pneuri pentru toate tipurile de vehicule',
    fullDescription: 'Servicii profesionale de vulcanizare și reparare pneuri. Reparăm pene, tăieturi și alte deteriorări ale pneurilor, prelungind durata lor de viață și economisind bani.',
    icon: 'tool',
    features: [
      'Reparare pene',
      'Vulcanizare tăieturi',
      'Reparare jante',
      'Verificare presiune',
      'Echilibrare după reparare',
      'Consultanță',
    ],
  },
]
