const stats = [
  { num: '75%', label: 'Reduction in unplanned\ndowntime' },
  { num: '3M+', label: 'Work instructions\ncompleted digitally' },
  { num: '60%', label: 'Faster onboarding\nfor new workers' },
  { num: '40%', label: 'Reduction in quality\ndefects' },
]

export default function Stats() {
  return (
    <section className="stats">
      <h2>Proven Impact at Scale</h2>
      <p>
        Vesica delivers measurable outcomes across manufacturing, energy, and food &amp; beverage
        industries worldwide.
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
