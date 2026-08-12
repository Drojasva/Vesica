import { BarChart3, Wrench } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Soluciones de Mantenimiento',
  description: 'Equipa a tus equipos de mantenimiento con herramientas digitales modernas de DevSolution SpA para gestionar y mejorar continuamente los procesos de trabajo.',
}

const benefits = [
  {
    title: 'Inteligencia de Mantenimiento Predictivo',
    desc: 'Ve más allá de las reparaciones reactivas. Captura metadatos detallados sobre el trabajo realizado antes de fallas o averías — entendiendo no solo lo que sucedió, sino por qué.',
  },
  {
    title: 'Visibilidad del Trabajo en Tiempo Real',
    desc: 'Los sistemas actuales registran el "qué" y el "cuándo" de los errores de las máquinas, pero omiten el "por qué". DevSolution captura cómo se realiza realmente el trabajo, brindando a los líderes de mantenimiento una visibilidad sin precedentes.',
  },
  {
    title: 'Mejora Continua de POE',
    desc: 'Actualiza dinámicamente los procedimientos operativos estándar basados en datos de campo reales. Reduce el error del técnico y mejora la trazabilidad del mantenimiento planificado con cada tarea completada.',
  },
]

const stats = [
  { value: '75%', label: 'Reducción en tiempo de inactividad no planificado' },
  { value: '40%', label: 'Tiempo medio de reparación más rápido' },
  { value: '90%', label: 'Tasa de adherencia a POE alcanzada' },
]

export default function MaintenancePage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner">
          <div className="section-tag">Soluciones de Mantenimiento</div>
          <h1 className="solution-hero-title">Logra un Mantenimiento a Tiempo y Sin Errores</h1>
          <p className="solution-hero-desc">
            La mayor complejidad operativa actual hace que el mantenimiento efectivo sea tanto
            más importante como más desafiante que nunca. Equipa a tus equipos de mantenimiento
            con las herramientas digitales modernas que necesitan para gestionar y mejorar
            continuamente los procesos de trabajo.
          </p>
          <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;En mantenimiento, los sistemas ERP registran que el trabajo de mantenimiento
            ocurrió, pero no registran los metadatos sobre cómo suceden realmente las cosas.
            DevSolution lo hace.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Director de Innovación y Tecnología de la Información</p>
          <p className="solution-quote-company">Fabricante Global de Productos Lácteos</p>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">Mejor Visibilidad, Mayores Eficiencias</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Captura cómo se realiza realmente el trabajo de mantenimiento en el piso. Usa datos
            en tiempo real para impulsar un mantenimiento prescriptivo que ahorra tiempo y dinero.
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
            <h2>Solucionando el Problema Antes de que Ocurra</h2>
            <p>
              Con más información sobre cómo se está realizando realmente el trabajo de
              mantenimiento en el piso, tu equipo puede gestionar las actividades de manera
              más eficiente y detectar problemas antes de que comiencen. Una mejor adherencia
              a los procedimientos garantiza menos paradas inesperadas y tiempo de inactividad
              no planificado.
            </p>
            <p>
              El acceso a datos en tiempo real impulsa un mantenimiento prescriptivo que puede
              ahorrar tiempo y dinero. Empodera a tus equipos de mantenimiento para identificar
              patrones, reducir la variación e impulsar la mejora continua desde el piso.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><Wrench size={24} strokeWidth={1.8} /></div>
              <h4>Mantenimiento Autónomo</h4>
              <p>Permite a los operadores realizar tareas de mantenimiento rutinarias de forma independiente con procedimientos digitales guiados.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><BarChart3 size={24} strokeWidth={1.8} /></div>
              <h4>Decisiones Basadas en Datos</h4>
              <p>Aprovecha los datos de ejecución para optimizar los programas de mantenimiento y la asignación de recursos.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
