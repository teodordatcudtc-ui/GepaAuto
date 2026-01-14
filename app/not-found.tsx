import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light">
      <div className="text-center px-4">
        <h1 className="text-display-2 font-display text-neutral mb-4">404</h1>
        <p className="text-xl text-neutral-mid mb-8">Pagina nu a fost găsită</p>
        <Link 
          href="/"
          className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
        >
          Înapoi la Home
        </Link>
      </div>
    </div>
  )
}
