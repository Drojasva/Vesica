const productLinks = ['Instrucciones de Trabajo', 'Flujos Conectados', 'Analíticas', 'Integraciones', 'App Móvil']
const solutionLinks = ['Manufactura', 'Energía y Servicios', 'Alimentos y Bebidas', 'Químicos', 'Minería']
const resourceLinks = [
  { label: 'Servicios', href: '/recursos' },
  { label: 'Blog', href: '#' },
  { label: 'Casos de Éxito', href: '#' },
  { label: 'Webinars', href: '#' },
  { label: 'Documentación', href: '#' },
  { label: 'Comunidad', href: '#' },
]
const companyLinks = ['Nosotros', 'Carreras', 'Prensa', 'Socios', 'Contacto']

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo" style={{ marginBottom: '16px' }}>
            <div className="nav-logo-icon">V</div>
            <span style={{ fontWeight: 800, fontSize: '20px', color: '#fff', letterSpacing: '-0.5px' }}>
              Vesi<span style={{ color: 'var(--orange)' }}>ca</span>
            </span>
          </div>
          <p>
            La plataforma Connected Worker® de Vesica para operaciones industriales de primera línea.
            Empoderando trabajadores. Mejorando el rendimiento.
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
          <ul>{companyLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Vesica, Inc. Todos los derechos reservados. Connected Worker® es una marca registrada.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos del Servicio</a>
          <a href="#">Configuración de Cookies</a>
        </div>
      </div>
    </footer>
  )
}
