import type { LucideIcon } from 'lucide-react'
import { AlertTriangle, BarChart3, ClipboardCheck, LockKeyhole, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import AnimatedStatsGrid from '@/components/AnimatedStatsGrid'
import Image from 'next/image'

export const metadata = {
  title: 'Soluciones de Seguridad',
  description: 'Digitaliza tus programas de seguridad con DevSolution SpA para proteger a tu fuerza laboral, garantizar el cumplimiento normativo y prevenir incidentes.',
}

type UseCase = {
  Icon: LucideIcon
  title: string
  desc: string
}

const useCases: UseCase[] = [
  {
    Icon: LockKeyhole,
    title: 'Bloqueo/Etiquetado (LOTO)',
    desc: 'Digitaliza los procedimientos de bloqueo y etiquetado para garantizar que cada paso se complete en el orden correcto, con evidencia fotográfica y verificación en tiempo real.',
  },
  {
    Icon: ShieldCheck,
    title: 'Rondas de Seguridad',
    desc: 'Estandariza las inspecciones de seguridad con checklists digitales que aseguran cobertura completa y generan datos accionables para la mejora continua.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Análisis de Seguridad en el Trabajo (JSA)',
    desc: 'Facilita la identificación y evaluación de riesgos directamente en el punto de trabajo, con flujos guiados que documentan peligros y controles preventivos.',
  },
  {
    Icon: AlertTriangle,
    title: 'Reporte de Cuasi-Incidentes',
    desc: 'Empodera a los trabajadores para reportar cuasi-incidentes en tiempo real desde cualquier dispositivo, alimentando un sistema de alerta temprana que previene accidentes graves.',
  },
]

const benefits = [
  {
    title: 'Cultura de Seguridad Proactiva',
    desc: 'Transforma la seguridad de reactiva a proactiva. Captura datos de cada procedimiento para identificar patrones de riesgo antes de que se conviertan en incidentes.',
  },
  {
    title: 'Cumplimiento Normativo Continuo',
    desc: 'Mantén tu operación siempre lista para auditorías con registros digitales completos, trazabilidad de cada acción y evidencia documentada automáticamente.',
  },
  {
    title: 'Visibilidad en Tiempo Real',
    desc: 'Los líderes de seguridad obtienen dashboards en tiempo real sobre el estado de cumplimiento, tasas de incidentes y áreas de oportunidad en toda la organización.',
  },
]

const stats = [
  { value: '85%', label: 'Reducción en incidentes reportables' },
  { value: '95%', label: 'Adherencia a procedimientos de seguridad' },
  { value: '60%', label: 'Aumento en reportes de cuasi-incidentes' },
]

export default function SafetyPage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner solution-hero-split">
          <div className="solution-hero-copy">
            <div className="section-tag">Soluciones de Seguridad</div>
            <h1 className="solution-hero-title">Seguridad a Escala: Protege a tu Fuerza Laboral</h1>
            <p className="solution-hero-desc">
              La seguridad a escala es más crítica que nunca. Digitaliza tus programas de seguridad
              para garantizar el cumplimiento, empoderar a tus trabajadores y prevenir incidentes
              antes de que ocurran — todo desde una plataforma conectada.
            </p>
            <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
          </div>
          <div className="solution-hero-art" style={{ position: 'relative', width: '100%', minHeight: '320px' }}>
            <Image
              src="/safety-operations.svg"
              alt="Panel digital de seguridad industrial"
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
            &ldquo;Digitalizar los componentes del programa de seguridad y analizar los datos
            resultantes nos ha permitido hacer cambios proactivamente antes de que ocurran
            incidentes en el lugar de trabajo.&rdquo;
          </blockquote>
          <p className="solution-quote-author">VP de Operaciones Globales</p>
          <p className="solution-quote-company">Fabricante Global de Alimentos</p>
        </div>
      </section>

      <section className="solution-use-cases">
        <div className="solution-use-cases-inner">
          <h2 className="section-title">Casos de Uso de Seguridad</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Desde procedimientos LOTO hasta reportes de cuasi-incidentes, DevSolution digitaliza
            cada aspecto de tu programa de seguridad industrial.
          </p>
          <div className="solution-use-cases-grid">
            {useCases.map((uc) => (
              <div key={uc.title} className="solution-use-case-card">
                <div className="solution-use-case-icon"><uc.Icon size={24} strokeWidth={1.8} /></div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">Prevenir, No Solo Reaccionar</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Con datos de ejecución en tiempo real, tu equipo de seguridad puede anticiparse
            a los riesgos y construir una cultura de prevención sostenible.
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
        <AnimatedStatsGrid stats={stats} />
      </section>

      <section className="solution-detail">
        <div className="solution-detail-inner">
          <div className="solution-detail-text">
            <h2>Construyendo una Cultura de Seguridad desde el Piso</h2>
            <p>
              Los trabajadores de primera línea son tu primera línea de defensa. Cuando tienen
              las herramientas digitales correctas, reportan más, actúan más rápido y siguen
              los procedimientos con mayor consistencia.
            </p>
            <p>
              DevSolution conecta cada procedimiento de seguridad con datos accionables, permitiendo
              a los líderes identificar tendencias, cerrar brechas de cumplimiento y demostrar
              mejora continua ante auditores y reguladores.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><LockKeyhole size={24} strokeWidth={1.8} /></div>
              <h4>Procedimientos LOTO Digitales</h4>
              <p>Guía paso a paso con verificación fotográfica para garantizar el aislamiento seguro de energía en cada intervención.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon"><BarChart3 size={24} strokeWidth={1.8} /></div>
              <h4>Alertas Tempranas</h4>
              <p>Analiza patrones de cuasi-incidentes y desviaciones para intervenir antes de que ocurra un accidente.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
