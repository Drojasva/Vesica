const testimonials = [
  {
    text: '"DevSolution ha transformado la forma en que nuestros equipos de primera línea trabajan. Eliminamos el papel por completo y nuestros indicadores de calidad mejoraron en más de un 35% durante los primeros seis meses."',
    initials: 'JR',
    avatarClass: 'av-1',
    name: 'James Rodríguez',
    role: 'VP de Operaciones · Global Beverage Co.',
  },
  {
    text: '"La velocidad con la que pudimos digitalizar nuestros POE fue notable. Nuestra tasa de incidentes de seguridad se redujo a cero durante el primer trimestre de implementación."',
    initials: 'SK',
    avatarClass: 'av-2',
    name: 'Sarah Kim',
    role: 'Directora de EHS · Fabricante Químico',
  },
  {
    text: '"Nuestros nuevos trabajadores son completamente productivos en la mitad del tiempo en comparación con antes de DevSolution. Las instrucciones guiadas hacen que la incorporación sea increíblemente eficiente."',
    initials: 'MT',
    avatarClass: 'av-3',
    name: 'Marco Torres',
    role: 'Gerente de Planta · Corporación de Procesamiento de Alimentos',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-tag">Casos de Éxito</div>
      <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
      <p className="section-sub">
        Empresas industriales líderes confían en DevSolution para gestionar sus operaciones más críticas.
      </p>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testi-card">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">{t.text}</p>
            <div className="testi-author">
              <div className={`testi-avatar ${t.avatarClass}`}>{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
