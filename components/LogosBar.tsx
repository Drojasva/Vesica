export default function LogosBar() {
  return (
    <div className="logos-bar">
      <p>Empresas con las que trabajamos</p>
      <div className="logos-client-shell">
        <div className="client-logo-card">
          <span className="client-logo-eyebrow">Cliente activo</span>
          <div className="client-logo-plate">
            <img src="/agrosuper-logo.png" alt="Agrosuper" className="client-logo-image" />
          </div>
          <span className="client-logo-copy">
            Acompañando operaciones industriales con soluciones digitales prácticas.
          </span>
        </div>
      </div>
    </div>
  )
}
