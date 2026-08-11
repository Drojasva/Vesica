import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import Image from 'next/image'

export const metadata = {
  title: 'Soluciones de Calidad',
  description: 'Optimiza los procesos de aseguramiento de calidad, auditorías y trazabilidad con las herramientas digitales de DevSolution SpA.',
}

const useCases = [
  {
    icon: '✅',
    title: 'Liberación de Producto',
    desc: 'Digitaliza los checklists de liberación de producto para garantizar que cada lote cumpla con los estándares de calidad antes de salir de la línea.',
  },
  {
    icon: '👁️',
    title: 'Inspección Visual',
    desc: 'Estandariza las inspecciones visuales con guías digitales paso a paso, captura fotográfica y criterios de aceptación/rechazo claros e intuitivos.',
  },
  {
    icon: '📱',
    title: 'Inspección Remota',
    desc: 'Permite a los expertos de calidad supervisar y validar inspecciones a distancia en tiempo real, escalando su expertise sin necesidad de estar presentes.',
  },
  {
    icon: '📑',
    title: 'LPAs / Trazabilidad de Auditoría',
    desc: 'Automatiza las Auditorías por Capas del Proceso (LPA) y mantén un registro digital completo que garantiza trazabilidad total ante certificaciones y auditorías.',
  },
]

const benefits = [
  {
    title: 'Calidad Integrada al Proceso',
    desc: 'Los controles de calidad se ejecutan como parte del flujo de trabajo, no como una actividad separada. Detecta defectos en la fuente y reduce rechazos y reprocesos.',
  },
  {
    title: 'Trazabilidad Completa',
    desc: 'Cada inspección, medición y decisión queda documentada digitalmente. Genera registros de auditoría que cumplen con ISO, FDA, GMP y cualquier estándar regulatorio.',
  },
  {
    title: 'Mejora Continua Basada en Datos',
    desc: 'Identifica tendencias de no-conformidades, variaciones y oportunidades de mejora con analytics en tiempo real sobre tus procesos de calidad.',
  },
]

const stats = [
  { value: '35%', label: 'Mejora en métricas de calidad' },
  { value: '50%', label: 'Reducción en tiempo de auditorías' },
  { value: '70%', label: 'Menos defectos por lote producido' },
]

export default function QualityPage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner solution-hero-split">
          <div className="solution-hero-copy">
            <div className="section-tag">Soluciones de Calidad</div>
            <h1 className="solution-hero-title">Calidad sin Concesiones, Desde el Piso</h1>
            <p className="solution-hero-desc">
              Optimiza el aseguramiento de calidad, las auditorías y los procesos de certificación.
              DevSolution brinda visibilidad total sobre la ejecución y el cumplimiento, convirtiendo
              cada inspección en datos accionables.
            </p>
            <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
          </div>
          <div className="solution-hero-art" style={{ position: 'relative', width: '100%', minHeight: '320px' }}>
            <Image
              src="/quality-inspection.svg"
              alt="Panel digital de inspección de calidad"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;Con DevSolution, los procesos de calidad dejaron de ser formularios en papel que
            nadie revisaba. Ahora cada inspección genera datos que nos permiten mejorar
            continuamente.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Director de Calidad</p>
          <p className="solution-quote-company">Fabricante Farmacéutico Global</p>
        </div>
      </section>

      <section className="solution-use-cases">
        <div className="solution-use-cases-inner">
          <h2 className="section-title">Casos de Uso de Calidad</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Desde liberación de producto hasta auditorías por capas, digitaliza cada
            punto de control de calidad en tu operación.
          </p>
          <div className="solution-use-cases-grid">
            {useCases.map((uc) => (
              <div key={uc.title} className="solution-use-case-card">
                <div className="solution-use-case-icon">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">De la Inspección a la Inteligencia</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Transforma tus procesos de calidad en un sistema inteligente que aprende,
            mejora y documenta automáticamente cada decisión.
          </p>
          <div className="solution-benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="solution-benefit-card">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-stats">
        <div className="solution-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="solution-stat">
              <div className="solution-stat-value">{s.value}</div>
              <div className="solution-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="solution-detail">
        <div className="solution-detail-inner">
          <div className="solution-detail-text">
            <h2>Calidad que se Construye con Cada Tarea</h2>
            <p>
              Cuando los controles de calidad están integrados en el flujo de trabajo diario,
              los defectos se detectan en la fuente — no al final de la línea. Tus trabajadores
              capturan datos de calidad como parte natural de su trabajo.
            </p>
            <p>
              Los registros digitales generados automáticamente simplifican las auditorías,
              aceleran las certificaciones y proporcionan evidencia irrefutable de cumplimiento
              regulatorio en cualquier momento.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon">🔍</div>
              <h4>Inspección en el Punto de Trabajo</h4>
              <p>Los operadores realizan inspecciones guiadas con criterios visuales y numéricos directamente en su estación de trabajo.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon">📈</div>
              <h4>Analytics de Calidad</h4>
              <p>Dashboards en tiempo real que muestran tendencias de no-conformidades, tasas de rechazo y oportunidades de mejora.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
