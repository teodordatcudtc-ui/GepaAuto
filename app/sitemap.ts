import { MetadataRoute } from 'next'
import { services } from '@/data/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gepa-auto-service.ro'

  const routes = [
    '',
    '/despre',
    '/servicii',
    '/galerie',
    '/contact',
    '/legal',
  ]

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/servicii/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
