import type { LucideIcon } from 'lucide-react'
import { BarChart3, ClipboardCheck, GitBranch, Settings, ShieldCheck, Smartphone } from 'lucide-react'

type Feature = {
  iconClass: string
  title: string
  desc: string
  Icon: LucideIcon
}

const features: Feature[] = [
  {
    iconClass: 'icon-orange',
    title: 'Instrucciones de Trabajo Digitales',
    desc: 'Reemplaza listas de verificación en papel y PDFs con POE multimedia enriquecidas — con imágenes, videos y pasos guiados que los trabajadores pueden seguir desde cualquier dispositivo.',
    Icon: ClipboardCheck,
  },
  {
    iconClass: 'icon-blue',
    title: 'Flujos de Trabajo Conectados',
    desc: 'Conecta personas, procesos y sistemas. Activa notificaciones automatizadas, escalamientos y aprobaciones basadas en datos de campo en tiempo real.',
    Icon: GitBranch,
  },
  {
    iconClass: 'icon-green',
    title: 'Información Operacional',
    desc: 'Captura datos estructurados en el punto de trabajo y genera información procesable en paneles en vivo — para gerentes, supervisores y ejecutivos.',
    Icon: BarChart3,
  },
  {
    iconClass: 'icon-purple',
    title: 'Seguridad y Cumplimiento',
    desc: 'Integra controles de seguridad, permisos de trabajo y pasos de cumplimiento directamente en los flujos de trabajo operativos para garantizar que cada tarea se realice de forma segura y correcta.',
    Icon: ShieldCheck,
  },
  {
    iconClass: 'icon-orange',
    title: 'Integraciones y APIs',
    desc: 'Conéctate sin problemas con tus sistemas ERP, CMMS e IoT existentes. DevSolution se integra con SAP, Microsoft, Salesforce y más.',
    Icon: Settings,
  },
  {
    iconClass: 'icon-blue',
    title: 'Funciona en Cualquier Lugar',
    desc: 'Disponible en iOS, Android y web. El modo offline garantiza que el trabajo continúe incluso en los entornos industriales más remotos o con conectividad limitada.',
    Icon: Smartphone,
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-tag">Capacidades de la Plataforma</div>
      <h2 className="section-title">Todo lo que tu Primera Línea Necesita</h2>
      <p className="section-sub">
        Desde POE digitales hasta análisis en tiempo real, DevSolution brinda a los equipos de primera
        línea las herramientas para trabajar de forma más segura, inteligente y rápida.
      </p>
      <div className="features-hero-row">
        {features.slice(0, 2).map((f) => (
          <div key={f.title} className="feature-card feature-card-hero">
            <div className={`feat-icon ${f.iconClass}`}><f.Icon size={24} strokeWidth={1.8} /></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="features-grid">
        {features.slice(2).map((f) => (
          <div key={f.title} className="feature-card">
            <div className={`feat-icon ${f.iconClass}`}><f.Icon size={24} strokeWidth={1.8} /></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
