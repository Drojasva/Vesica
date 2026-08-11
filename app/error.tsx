'use client'

import Link from 'next/link'

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 5%',
        textAlign: 'center',
        background: 'var(--ink)',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '12px',
          }}
        >
          Algo salió mal
        </div>
        <h1
          style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          Ocurrió un error inesperado
        </h1>
        <p
          style={{
            fontSize: '17px',
            color: '#a3a3a3',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}
        >
          Por favor, inténtalo de nuevo o vuelve a la página de inicio.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={reset}
            style={{
              background: 'var(--accent)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Intentar de Nuevo
          </button>
          <Link
            href="/"
            style={{
              border: '2px solid rgba(255,255,255,0.4)',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </section>
  )
}
