import { ClipboardCheck, Gauge } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Soluciones de Producción',
  description: 'Optimiza los flujos de trabajo de producción, aumenta el rendimiento y empodera a tu fuerza laboral de primera línea con DevSolution SpA.',
}

const benefits = [
  {
    title: 'Optimiza los Flujos de Trabajo de Producción',
    desc: 'En el mercado global cada vez más competitivo de hoy, el enfoque digital adecuado impulsa los niveles de producción a nuevas alturas. Equipa a tu fuerza laboral con las mejores herramientas para hacer el trabajo correctamente, cada vez.',
  },
  {
    title: 'Empodera Trabajadores, Acelera Ganancias',
    desc: 'El trabajo conectado convierte a los trabajadores de primera línea en solucionadores de problemas comprometidos, mientras proporciona a los gerentes de planta y línea las perspectivas que necesitan para optimizar las operaciones y ejecutar mejor el trabajo.',
  },
  {
    title: 'Integra Eficiencias en el Proceso',
    desc: 'Con POE digitales interactivos, los trabajadores tienen acceso inmediato a orientación sobre cómo ejecutar mejor sus tareas. Los datos que capturan activan la siguiente tarea — las eficiencias están integradas.',
  },
]

const stats = [
  { value: '5%', label: 'Aumento en OEE' },
  { value: '60%', label: 'Incorporación más rápida de trabajadores' },
  { value: '35%', label: 'Mejora en métricas de calidad' },
]

export default function ProductionPage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner">
          <div className="section-tag">Soluciones de Producción</div>
          <h1 className="solution-hero-title">Una Estrategia más Inteligente para Impulsar la Productividad</h1>
          <p className="solution-hero-desc">
            Acelera las ganancias de producción y reduce los cuellos de botella en todas tus
            operaciones sin comprometer la calidad ni la seguridad. DevSolution brinda a tus equipos
            de primera línea las herramientas digitales para trabajar más rápido, más inteligente
            y más eficientemente.
          </p>
          <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;El mundo digital en el que estamos ahora — y DevSolution juega en este mundo — es
            nuestro próximo gran salto en la manufactura que realmente va a cambiar la
            productividad del trabajador industrial.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Vicepresidente, Ingeniería y Tecnología de Procesos</p>
          <p className="solution-quote-company">Fabricante Químico Líder</p>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">Visibilidad del Piso a la Dirección</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Transforma tus operaciones de producción con captura de datos en tiempo real,
            instrucciones de trabajo guiadas e información procesable en todos los niveles
            de tu organización.
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
            <h2>Empoderando Trabajadores, Acelerando Ganancias</h2>
            <p>
              Acelera las ganancias de producción y reduce los cuellos de botella en todas tus
              operaciones sin comprometer la calidad ni la seguridad. El trabajo conectado
              convierte a los trabajadores de primera línea en solucionadores de problemas
              comprometidos, mientras proporciona a los gerentes de planta y línea las
              perspectivas que necesitan.
            </p>
            <p>
              Con POE digitales interactivos, los trabajadores tienen acceso inmediato y fácil a
              la orientación sobre cómo ejecutar mejor sus respectivas tareas. Los datos que
              capturan activan la siguiente tarea. Las eficiencias están integradas; el
              crecimiento de la producción también.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><Gauge size={24} strokeWidth={1.8} /></div>
              <h4>Mayor Rendimiento</h4>
              <p>Reduce los tiempos de cambio y elimina los cuellos de botella de producción con flujos de trabajo digitales guiados.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><ClipboardCheck size={24} strokeWidth={1.8} /></div>
              <h4>Aseguramiento de Calidad</h4>
              <p>Integra controles de calidad directamente en los flujos de trabajo de producción para detectar defectos en la fuente.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
