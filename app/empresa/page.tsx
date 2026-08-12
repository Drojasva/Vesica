import type { LucideIcon } from 'lucide-react'
import { DraftingCompass, Handshake, Rocket, Search, ShieldCheck, Target, TrendingUp, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'

export const metadata = {
  title: 'Empresa',
  description: 'Conoce a DevSolution SpA: un equipo con experiencia en operaciones industriales, transformación digital y tecnologías de manufactura.',
}

type CardItem = {
  Icon: LucideIcon
  title: string
  desc: string
}

const values: CardItem[] = [
  {
    Icon: Target,
    title: 'Expertise con Resultados',
    desc: 'Detrás de DevSolution hay un equipo con años de experiencia en operaciones industriales, transformación digital y tecnologías de manufactura. No venimos a aprender — venimos a resolver.'
  },
  {
    Icon: Handshake,
    title: 'Cercanía y Compromiso',
    desc: 'Somos una empresa ágil, con la capacidad de entender tu operación a fondo y adaptarnos a tus necesidades reales. Te acompañamos en cada paso, no como un proveedor más, sino como un socio estratégico.',
  },
  {
    Icon: Zap,
    title: 'Implementación Rápida, Resultados Concretos',
    desc: 'Apostamos por la acción. En semanas, no meses, tu equipo estará usando una plataforma diseñada para trabajar — sin rodeos, sin burocracia, con foco en lo que importa: la ejecución en terreno.',
  },
  {
    Icon: ShieldCheck,
    title: 'Profesionalismo y Calidad',
    desc: 'Cada solución que entregamos pasa por rigurosos estándares de calidad. Sabemos que en la industria no hay margen para el error. Por eso, nuestro trabajo se respalda con excelencia técnica y atención al detalle.',
  },
]

const approach: CardItem[] = [
  {
    Icon: Search,
    title: 'Diagnóstico',
    desc: 'Entendemos tu operación, identificamos puntos de dolor y oportunidades de mejora concretas.',
  },
  {
    Icon: DraftingCompass,
    title: 'Diseño',
    desc: 'Diseñamos una solución a la medida, aprovechando las mejores prácticas de la industria y tecnología de punta.',
  },
  {
    Icon: Rocket,
    title: 'Implementación',
    desc: 'Ponemos en marcha la solución con metodologías ágiles, capacitación al equipo y acompañamiento continuo.',
  },
  {
    Icon: TrendingUp,
    title: 'Optimización',
    desc: 'Medimos resultados, ajustamos procesos y escalamos la solución para maximizar el impacto en tu operación.',
  },
]

const expertise = [
  { value: '15+', label: 'Años de experiencia combinada del equipo' },
  { value: '1', label: 'Cliente actual al que servimos' },
  { value: '100%', label: 'Enfoque dedicado a su operación' },
  { value: '100%', label: 'Compromiso con la calidad y el resultado' },
]

export default function EmpresaPage() {
  return (
    <>
      <div id="empresa-page">
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner solution-hero-split">
          <div className="solution-hero-copy">
            <div className="section-tag">Nosotros</div>
            <h1 className="solution-hero-title">
              Expertise Joven,<br />
              <span style={{ color: 'var(--accent)' }}>Resultados de Clase Mundial</span>
            </h1>
            <p className="solution-hero-desc">
              En DevSolution reunimos a un equipo con amplia experiencia en operaciones industriales
              y transformación digital. Somos una empresa nueva, pero con el profesionalismo y la
              madurez técnica para resolver desafíos complejos en tu operación — desde el primer día.
            </p>
            <a href="/demo" className="btn-hero-primary">Trabajemos Juntos</a>
          </div>
          <div className="solution-hero-art">
            <div
              style={{
                background: 'linear-gradient(135deg, var(--ink) 0%, var(--ink-soft) 100%)',
                borderRadius: '24px',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
              }}
            >
              <Logo variant="light" showTagline size="lg" />
              <span
                style={{
                  fontSize: '13px',
                  color: '#a3a3a3',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                SpA
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;No somos la empresa más grande del mercado. Pero sí la que más se va a
            involucrar con tu operación. Creemos en el trabajo cercano, las soluciones a
            medida y el compromiso real con cada cliente. La experiencia no se mide en años
            corporativos — se mide en resultados concretos.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Equipo Fundador, DevSolution SpA</p>
        </div>
      </section>

      <section className="solution-stats">
        <div className="solution-stats-inner">
          {expertise.map((f) => (
            <div key={f.label} className="solution-stat">
              <div className="solution-stat-value">{f.value}</div>
              <div className="solution-stat-label">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="solution-benefits" style={{ background: 'var(--white)' }}>
        <div className="solution-benefits-inner">
          <h2 className="section-title">Lo Que Nos Define</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            No competimos por ser los más grandes. Competimos por ser los mejores en lo que hacemos.
            Estos pilares sostienen nuestra forma de trabajar.
          </p>
          <div className="solution-benefits-grid">
            {values.map((v) => (
              <div key={v.title} className="solution-benefit-card">
                <div className="solution-card-icon">
                  <v.Icon size={24} strokeWidth={1.8} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-detail" style={{ background: 'var(--surface)' }}>
        <div className="solution-detail-inner">
          <div className="solution-detail-text">
            <h2>Cómo Trabajamos</h2>
            <p>
              No creemos en soluciones empaquetadas que pretenden servir para todos. Cada
              operación industrial es única, con sus propios desafíos, cultura y procesos.
              Por eso nuestro enfoque comienza con una inmersión profunda en tu realidad.
            </p>
            <p>
              Trabajamos codo a codo con cada cliente, desde la gerencia hasta el piso de
              planta, para diseñar soluciones que realmente resuelvan problemas reales.
              Nuestra metodología combina ingeniería industrial, tecnología digital y
              prácticas ágiles para entregar resultados tangibles en tiempo récord.
            </p>
            <p>
              No prometemos milagros. Prometemos profesionalismo, transparencia y un equipo
              comprometido con el éxito de tu operación como si fuera propia.
            </p>
          </div>
          <div className="solution-detail-visual">
            {approach.map((a, i) => (
              <div key={a.title} className="solution-visual-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    style={{
                      background: 'var(--accent)',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '14px',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      minWidth: '28px',
                      textAlign: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div className="solution-step-heading">
                      <a.Icon size={18} strokeWidth={1.8} />
                      <h4 style={{ margin: 0, fontSize: '15px' }}>{a.title}</h4>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', margin: '4px 0 0' }}>{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: 'var(--ink)',
          color: '#fff',
          padding: '80px 5%',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(26px, 3vw, 38px)',
              fontWeight: 800,
              marginBottom: '16px',
              letterSpacing: '-0.5px',
            }}
          >
            Conversemos sobre tu operación
          </h2>
          <p style={{ fontSize: '17px', color: '#a3a3a3', lineHeight: 1.7, marginBottom: '36px' }}>
            Queremos conocer tus desafíos y mostrarte cómo podemos ayudarte a resolverlos.
            Sin guiones ensayados, sin presión comercial — solo una conversación honesta
            entre profesionales que entienden la industria.
          </p>
          <a
            href="/demo"
            className="btn-hero-primary"
            style={{ fontSize: '16px', padding: '16px 36px' }}
          >
            Agendar Conversación
          </a>
          <p style={{ marginTop: '16px', fontSize: '14px', color: '#5a7a9e' }}>
            Sin compromiso — descubre cómo sumamos valor a tu operación
          </p>
        </div>
      </section>

      <Footer />
      </div>
    </>
  )
}
