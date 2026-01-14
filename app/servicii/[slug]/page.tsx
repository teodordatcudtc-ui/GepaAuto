import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/sections/ServiceDetail'
import { services } from '@/data/services'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Serviciu Negăsit',
    }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | GEPA AUTO SERVICE`,
      description: service.description,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetail service={service} />
}
