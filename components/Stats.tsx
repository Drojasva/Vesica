const stats = [
  { num: '75%', label: 'Reducción en tiempo de\ninactividad no planificado' },
  { num: '3M+', label: 'Instrucciones de trabajo\ncompletadas digitalmente' },
  { num: '60%', label: 'Incorporación más rápida\npara nuevos trabajadores' },
  { num: '40%', label: 'Reducción en defectos\nde calidad' },
]

export default function Stats() {
  return (
    <section className="stats">
      <h2>Impacto Comprobado a Escala</h2>
      <p>
        Vesica ofrece resultados medibles en industrias manufactureras, energéticas y de
        alimentos y bebidas en todo el mundo.
      </p>
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.num} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label" style={{ whiteSpace: 'pre-line' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
