import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devsolution.cl'

  const routes = [
    '',
    '/product',
    '/solutions/maintenance',
    '/solutions/production',
    '/solutions/quality',
    '/solutions/safety',
    '/recursos',
    '/empresa',
    '/demo',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
