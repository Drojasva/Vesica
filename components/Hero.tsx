export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Soluciones Tecnológicas Industriales</div>
        <h1>Herramientas Digitales para<br /><span>Operaciones de Primera Línea</span></h1>
        <p>
          DevSolution acompaña a empresas industriales en su transformación digital con
          instrucciones de trabajo digitales modernas, flujos de trabajo conectados y
          perspectivas operativas en tiempo real — reemplazando el papel y los sistemas heredados.
        </p>
        <div className="hero-btns">
          <a href="/demo" className="btn-hero-primary">Solicitar una Demo</a>
          <a href="#" className="btn-hero-outline">Ver Vista General ▶</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-header">
          <div className="dot dot-r"></div>
          <div className="dot dot-y"></div>
          <div className="dot dot-g"></div>
          <span style={{ color: '#a3a3a3', fontSize: '12px', marginLeft: '8px' }}>
            Panel de Operaciones
          </span>
        </div>
        <div className="hero-visual-body">
          <div className="dashboard-card">
            <h4>Tasa de Finalización</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <div className="big-num">94.7%</div>
              <div className="trend">↑ 12% esta semana</div>
            </div>
            <div className="progress-bar-wrap">
              <div className="pb-label">
                <span>Progreso</span><span>94.7%</span>
              </div>
              <div className="pb">
                <div className="pb-fill" style={{ width: '94.7%' }}></div>
              </div>
            </div>
          </div>

          <div className="db-row">
            <div className="db-col">
              <h4>Trabajadores Activos</h4>
              <div className="val">2,418</div>
              <div className="sub">↑ 8% vs mes anterior</div>
            </div>
            <div className="db-col">
              <h4>Incidentes de Seguridad</h4>
              <div className="val">0</div>
              <div className="sub" style={{ color: '#4ade80' }}>30 días sin incidentes ✓</div>
            </div>
          </div>

          <div style={{ marginTop: '14px' }}>
            <div className="pb-label" style={{ color: '#a3a3a3', fontSize: '13px', marginBottom: '6px' }}>
              <span>Puntaje de Calidad</span>
              <span style={{ color: '#4ade80' }}>98.2%</span>
            </div>
            <div className="pb">
              <div className="pb-fill" style={{ width: '98.2%', background: '#4ade80' }}></div>
            </div>
            <div className="pb-label" style={{ color: '#a3a3a3', fontSize: '13px', marginBottom: '6px', marginTop: '10px' }}>
              <span>Adherencia a POE</span>
              <span style={{ color: 'var(--accent)' }}>87.5%</span>
            </div>
            <div className="pb">
              <div className="pb-fill" style={{ width: '87.5%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
