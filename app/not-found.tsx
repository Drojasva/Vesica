import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="solution-hero">
        <div className="solution-hero-inner">
          <div className="section-tag">404</div>
          <h1 className="solution-hero-title">Página No Encontrada</h1>
          <p className="solution-hero-desc">
            La página que buscas no existe o aún no ha sido creada.
          </p>
          <Link href="/" className="btn-hero-primary">
            Volver al Inicio
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
