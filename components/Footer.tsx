import Logo from './Logo'

const productLinks = ['Instrucciones de Trabajo Digitales', 'Flujos Conectados', 'Analíticas Operacionales', 'Integraciones', 'App Móvil']
const solutionLinks = ['Manufactura', 'Energía y Servicios', 'Alimentos y Bebidas', 'Químicos', 'Minería']
const resourceLinks = [
  { label: 'Servicios', href: '/recursos' },
  { label: 'Blog', href: '#' },
  { label: 'Casos de Éxito', href: '#' },
  { label: 'Webinars', href: '#' },
  { label: 'Documentación', href: '#' },
  { label: 'Comunidad', href: '#' },
]
const companyLinks = [
  { label: 'Nosotros', href: '/empresa' },
  { label: 'Carreras', href: '#' },
  { label: 'Prensa', href: '#' },
  { label: 'Socios', href: '#' },
  { label: 'Contacto', href: '/demo' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div style={{ marginBottom: '16px' }}>
            <Logo variant="light" />
          </div>
          <p>
            Soluciones tecnológicas para operaciones industriales de primera línea.
            Acompañamos a empresas en su transformación digital con profesionalismo y resultados medibles.
          </p>
        </div>

        <div className="footer-col">
          <h5>Producto</h5>
          <ul>{productLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Soluciones</h5>
          <ul>{solutionLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Recursos</h5>
          <ul>{resourceLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Empresa</h5>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DevSolution SpA. Todos los derechos reservados.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos del Servicio</a>
          <a href="#">Configuración de Cookies</a>
        </div>
      </div>
    </footer>
  )
}
