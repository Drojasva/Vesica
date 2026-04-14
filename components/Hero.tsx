export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Connected Worker® Platform</div>
        <h1>Digital Tools for<br /><span>Frontline Operations</span></h1>
        <p>
          Vesica empowers industrial frontline workers with modern digital work instructions,
          connected workflows, and real-time operational insights — replacing paper and legacy systems.
        </p>
        <div className="hero-btns">
          <a href="#" className="btn-hero-primary">Request a Demo</a>
          <a href="#" className="btn-hero-outline">Watch Overview ▶</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-header">
          <div className="dot dot-r"></div>
          <div className="dot dot-y"></div>
          <div className="dot dot-g"></div>
          <span style={{ color: '#8aa4c6', fontSize: '12px', marginLeft: '8px' }}>
            Operations Dashboard
          </span>
        </div>
        <div className="hero-visual-body">
          <div className="dashboard-card">
            <h4>Task Completion Rate</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <div className="big-num">94.7%</div>
              <div className="trend">↑ 12% this week</div>
            </div>
            <div className="progress-bar-wrap">
              <div className="pb-label">
                <span>Progress</span><span>94.7%</span>
              </div>
              <div className="pb">
                <div className="pb-fill" style={{ width: '94.7%' }}></div>
              </div>
            </div>
          </div>

          <div className="db-row">
            <div className="db-col">
              <h4>Active Workers</h4>
              <div className="val">2,418</div>
              <div className="sub">↑ 8% vs last month</div>
            </div>
            <div className="db-col">
              <h4>Safety Incidents</h4>
              <div className="val">0</div>
              <div className="sub" style={{ color: '#4ade80' }}>30 days clean ✓</div>
            </div>
          </div>

          <div style={{ marginTop: '14px' }}>
            <div className="pb-label" style={{ color: '#b8c8e0', fontSize: '13px', marginBottom: '6px' }}>
              <span>Quality Score</span>
              <span style={{ color: '#4ade80' }}>98.2%</span>
            </div>
            <div className="pb">
              <div className="pb-fill" style={{ width: '98.2%', background: '#4ade80' }}></div>
            </div>
            <div className="pb-label" style={{ color: '#b8c8e0', fontSize: '13px', marginBottom: '6px', marginTop: '10px' }}>
              <span>SOP Adherence</span>
              <span style={{ color: '#f26522' }}>87.5%</span>
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
