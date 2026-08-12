export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Soluciones Tecnológicas</div>
        <h1>Herramientas Digitales para<br /><span>Operaciones de Primera Línea</span></h1>
        <p>
          DevSolution acompaña a empresas industriales en su transformación digital con
          instrucciones de trabajo digitales modernas, flujos de trabajo conectados y
          perspectivas operativas en tiempo real — reemplazando el papel y los sistemas heredados.
        </p>
        <div className="hero-btns">
          <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
          <a href="/product" className="btn-hero-outline">Ver Vista General ▶</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-header">
          <div className="dot dot-r"></div>
          <div className="dot dot-y"></div>
          <div className="dot dot-g"></div>
          <span style={{ color: 'var(--on-dark-body)', fontSize: '12px', marginLeft: '8px' }}>
            Panel de Operaciones
          </span>
        </div>
        <div className="hero-visual-body">
          <div className="dashboard-card">
            <h4>Tasa de Finalización</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <div className="big-num">91.3%</div>
              <div className="trend">↑ 6% esta semana</div>
            </div>
            <div className="progress-bar-wrap">
              <div className="pb-label">
                <span>Progreso</span><span>91.3%</span>
              </div>
              <div className="pb">
                <div className="pb-fill" style={{ width: '91.3%' }}></div>
              </div>
            </div>
          </div>

          <div className="db-row">
            <div className="db-col">
              <h4>Trabajadores Activos</h4>
              <div className="val">1,860</div>
              <div className="sub">↑ 5% vs mes anterior</div>
            </div>
            <div className="db-col">
              <h4>Incidentes de Seguridad</h4>
              <div className="val">0</div>
              <div className="sub" style={{ color: 'var(--success)' }}>18 días sin incidentes ✓</div>
            </div>
          </div>

          <div style={{ marginTop: '14px' }}>
            <div className="pb-label" style={{ color: 'var(--on-dark-body)', fontSize: '13px', marginBottom: '6px' }}>
              <span>Puntaje de Calidad</span>
              <span style={{ color: 'var(--success)' }}>95.6%</span>
            </div>
            <div className="pb">
              <div className="pb-fill" style={{ width: '95.6%', background: 'var(--success)' }}></div>
            </div>
            <div className="pb-label" style={{ color: 'var(--on-dark-body)', fontSize: '13px', marginBottom: '6px', marginTop: '10px' }}>
              <span>Adherencia a POE</span>
              <span style={{ color: 'var(--accent)' }}>82.4%</span>
            </div>
            <div className="pb">
              <div className="pb-fill" style={{ width: '82.4%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
