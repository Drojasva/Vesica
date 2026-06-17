import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Servicios | Vesica Connected Worker®',
  description: 'Servicios profesionales de Transformación Digital y Mejora Continua. Acelera tu implementación con expertos en análisis sintáctico.',
}

const serviceCategories = [
  {
    title: 'Servicios de autoría:',
    subtitle: 'Escalar en todas las instalaciones, sin importar el tamaño o la ubicación',
    items: ['Creación de plantillas', 'Consejos sobre construcción de plantillas'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 16H32M16 22H32M16 28H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="28" y="30" width="12" height="12" rx="2" fill="currentColor" opacity="0.15"/>
        <path d="M32 34V38M30 36H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Servicios de implementación:',
    subtitle: 'Acelera tu implementación y el tiempo para obtener valor',
    items: ['Formación', 'Consultoría de implementación', 'Gestión de proyectos'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="18" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
        <rect x="24" y="6" width="18" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18H18M12 24H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28 14H36M28 18H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="33" cy="33" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M33 30V33L35 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Servicios de integración:',
    subtitle: 'Integra Vesica con tu pila tecnológica existente',
    items: ['Arquitectura de soluciones', 'Soporte para API', 'Trabajo de desarrollo', 'Desarrollo personalizado'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14L6 24L14 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 14L42 24L34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8L20 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Servicios de Inteligencia Empresarial:',
    subtitle: 'Ampliar la visibilidad hacia insights accionables',
    items: ['Recogida de requisitos', 'Soporte para API', 'Trabajo de desarrollo', 'Big data y ciencia de datos', 'Aprendizaje automático, inteligencia artificial'],
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="28" width="8" height="14" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="20" width="8" height="22" rx="2" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="26" y="12" width="8" height="30" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="36" y="6" width="8" height="36" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 24L20 16L30 20L42 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="24" r="2.5" fill="currentColor"/>
        <circle cx="20" cy="16" r="2.5" fill="currentColor"/>
        <circle cx="30" cy="20" r="2.5" fill="currentColor"/>
        <circle cx="42" cy="8" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function RecursosPage() {
  return (
    <>
      <Navbar />

      <section className="servicios-hero">
        <div className="servicios-hero-inner">
          <h1>Servicios profesionales de Transformación Digital y Mejora Continua</h1>
          <p>
            Estás ocupado y tu equipo está saturado. Los expertos en análisis sintáctico están aquí
            para acelerar tu implementación, ayudándote a alcanzar tus objetivos aún más rápido.
          </p>
        </div>
      </section>

      <section className="servicios-grid-section">
        <div className="servicios-grid-inner">
          <h2>Nuestro conjunto de servicios</h2>
          <div className="servicios-grid">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="servicio-card">
                <h3>{cat.title}</h3>
                <p className="servicio-subtitle">{cat.subtitle}</p>
                <div className="servicio-card-body">
                  <div className="servicio-icon">{cat.icon}</div>
                  <ul className="servicio-list">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="servicios-accelerate">
        <div className="servicios-accelerate-inner">
          <h2>Nuestro equipo de Servicios acelerará tu éxito con Vesica.</h2>

          <div className="servicios-modern-grid">
            <div className="servicios-modern-card">
              <div className="servicios-modern-img-wrapper">
                <img src="/celular.png" alt="Digitalización móvil" className="servicios-modern-img" />
                <div className="servicios-modern-overlay"></div>
              </div>
              <div className="servicios-modern-content">
                <span className="servicios-modern-tag">01</span>
                <h3>Hazte digital más rápido</h3>
                <p>
                  Nuestros expertos en Servicios pueden impulsar tu transición del papel al móvil
                  primero en la fábrica, construyendo la base digital necesaria para futuros
                  proyectos de transformación digital.
                </p>
              </div>
            </div>

            <div className="servicios-modern-card">
              <div className="servicios-modern-img-wrapper">
                <img src="/dashboard.png" alt="Dashboard de conectividad" className="servicios-modern-img" />
                <div className="servicios-modern-overlay"></div>
              </div>
              <div className="servicios-modern-content">
                <span className="servicios-modern-tag">02</span>
                <h3>Conecta a tus trabajadores para mejorar la seguridad, la calidad y la productividad</h3>
                <p>
                  Acorta el tiempo de acción —y los resultados— con expertos listos para permitir
                  la colaboración en tiempo real de Vesica entre los trabajadores de primera línea y
                  las personas, sistemas, información y máquinas que necesitan para dar lo mejor de
                  sí mismos.
                </p>
              </div>
            </div>

            <div className="servicios-modern-card">
              <div className="servicios-modern-img-wrapper">
                <img src="/tableta.png" alt="Escala global" className="servicios-modern-img" />
                <div className="servicios-modern-overlay"></div>
              </div>
              <div className="servicios-modern-content">
                <span className="servicios-modern-tag">03</span>
                <h3>Escala tu nueva solución digital para trabajadores de primera línea</h3>
                <p>
                  Una vez que hayas conectado a Vesica, nuestros expertos en Servicios estarán listos
                  para extenderse rápida y eficientemente a los trabajadores de primera línea en tus
                  fábricas en todo el mundo, sin importar el tamaño o la ubicación, desbloqueando
                  nuevos conocimientos para impulsar la excelencia operativa a gran escala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="servicios-testimonial">
        <div className="servicios-testimonial-inner">
          <blockquote>
            &ldquo;El equipo de éxito del cliente de Vesica ha proporcionado una orientación informada
            y perspicaz sobre cómo utilizar Vesica en nuestros programas de calidad y seguridad. Su
            enfoque en resultados rápidos y adopción rápida es fundamental en un momento en que el
            mercado se mueve tan rápido y necesitamos ser más ágiles que nunca.&rdquo;
          </blockquote>
          <p className="testimonial-author">Todd Wing</p>
          <p className="testimonial-role">Responsable de Ingeniería de Fabricación, Southern Motion</p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
