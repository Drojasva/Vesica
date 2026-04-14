const logos = ['Heineken', 'Colgate', 'Dow', 'Nutrien', 'Veolia', 'ArcelorMittal', 'Bunge']

export default function LogosBar() {
  return (
    <div className="logos-bar">
      <p>Trusted by world-class industrial companies</p>
      <div className="logos-grid">
        {logos.map((name) => (
          <div key={name} className="logo-pill">{name}</div>
        ))}
      </div>
    </div>
  )
}
