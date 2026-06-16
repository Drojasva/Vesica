const logos = ['Heineken', 'Colgate', 'Dow', 'Nutrien', 'Veolia', 'ArcelorMittal', 'Bunge']

export default function LogosBar() {
  return (
    <div className="logos-bar">
      <p>Confiado por empresas industriales de clase mundial</p>
      <div className="logos-marquee-wrapper">
        <div className="logos-marquee-track">
          {logos.map((name) => (
            <div key={name} className="logo-card">
              <span className="logo-name">{name}</span>
            </div>
          ))}
          {logos.map((name) => (
            <div key={`dup-${name}`} className="logo-card" aria-hidden="true">
              <span className="logo-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
