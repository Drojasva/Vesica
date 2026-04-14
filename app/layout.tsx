import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vesica Connected Worker® Software | Insights for Frontline Operations',
  description:
    'Vesica empowers industrial frontline workers with modern digital work instructions, connected workflows, and real-time operational insights.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
