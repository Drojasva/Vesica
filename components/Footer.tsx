import Logo from './Logo'

const productLinks = [
  { label: 'Producto', href: '/product' },
  { label: 'Solicitar Demo', href: '/demo' },
]
const solutionLinks = [
  { label: 'Mantenimiento', href: '/solutions/maintenance' },
  { label: 'Producción', href: '/solutions/production' },
  { label: 'Seguridad', href: '/solutions/safety' },
  { label: 'Calidad', href: '/solutions/quality' },
]
const resourceLinks = [
  { label: 'Servicios', href: '/recursos' },
]
const companyLinks = [
  { label: 'Nosotros', href: '/empresa' },
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
          <ul>{productLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
        <div className="footer-col">
          <h5>Soluciones</h5>
          <ul>{solutionLinks.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
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
        <span>Transformación digital industrial con foco en ejecución.</span>
      </div>
    </footer>
  )
}
