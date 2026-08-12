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
    desc: 'Convertimos tus listas de verificación en papel y PDFs en POE digitales con imágenes, videos y pasos guiados, adaptadas al flujo real de tu planta.',
    Icon: ClipboardCheck,
  },
  {
    iconClass: 'icon-blue',
    title: 'Flujos de Trabajo Conectados',
    desc: 'Diseñamos los flujos de aprobación, escalamiento y notificación a la medida de tu operación, sin depender de planillas ni WhatsApp para coordinar al equipo.',
    Icon: GitBranch,
  },
  {
    iconClass: 'icon-green',
    title: 'Información Operacional',
    desc: 'Los datos que hoy se registran en papel pasan a un panel en vivo, para que supervisores y gerencia vean el estado real de la operación sin esperar el reporte del turno.',
    Icon: BarChart3,
  },
  {
    iconClass: 'icon-purple',
    title: 'Seguridad y Cumplimiento',
    desc: 'Incorporamos los permisos de trabajo y pasos de cumplimiento de tu propio protocolo directamente en el flujo, para que quede registro de que cada tarea se hizo como corresponde.',
    Icon: ShieldCheck,
  },
  {
    iconClass: 'icon-orange',
    title: 'Implementación a Medida',
    desc: 'Cada proyecto se levanta según los sistemas y procesos que ya usa tu operación — sin plantillas genéricas, adaptado a tu realidad desde el diagnóstico inicial.',
    Icon: Settings,
  },
  {
    iconClass: 'icon-blue',
    title: 'Funciona en Terreno',
    desc: 'Pensado para celulares y tablets en planta, con modo offline para que el trabajo no se detenga en zonas con poca conectividad.',
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
