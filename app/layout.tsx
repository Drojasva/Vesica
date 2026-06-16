import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vesica Connected Worker® Software | Perspectivas para Operaciones de Primera Línea',
  description:
    'Vesica empodera a los trabajadores industriales de primera línea con instrucciones de trabajo digitales modernas, flujos de trabajo conectados y perspectivas operativas en tiempo real.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
