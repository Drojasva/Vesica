import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devsolution.cl'
const companyName = 'DevSolution SpA'
const defaultTitle = 'DevSolution SpA | Soluciones Tecnológicas para la Industria'
const defaultDescription =
  'DevSolution SpA acompaña a empresas industriales en su transformación digital con soluciones tecnológicas prácticas, seguras y escalables.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${companyName}`,
  },
  description: defaultDescription,
  keywords: ['DevSolution SpA', 'transformación digital', 'industria 4.0', 'tecnología industrial', 'software industrial'],
  authors: [{ name: companyName }],
  creator: companyName,
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: companyName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
