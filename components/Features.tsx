const features = [
  {
    iconClass: 'icon-orange',
    title: 'Digital Work Instructions',
    desc: 'Replace paper checklists and PDFs with rich, multimedia SOPs — complete with images, videos, and guided steps that workers can follow on any device.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-blue',
    title: 'Connected Workflows',
    desc: 'Connect people, processes, and systems. Trigger automated notifications, escalations, and approvals based on real-time field data.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5l7 7" />
        <circle cx="18" cy="6" r="3" />
        <path d="M15 6H9" />
        <circle cx="6" cy="18" r="3" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-green',
    title: 'Operational Insights',
    desc: 'Capture structured data at the point of work and surface actionable insights in live dashboards — for managers, supervisors, and executives.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="4 8 8 4 14 10 20 4" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-purple',
    title: 'Safety & Compliance',
    desc: 'Embed safety checks, permits-to-work, and compliance steps directly into operational workflows to ensure every task is done safely and correctly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-orange',
    title: 'Integrations & APIs',
    desc: 'Seamlessly connect with your existing ERP, CMMS, and IoT systems. Vesica integrates with SAP, Microsoft, Salesforce, and more.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-blue',
    title: 'Works Anywhere',
    desc: 'Available on iOS, Android, and web. Offline mode ensures work continues even in the most remote or connectivity-challenged industrial environments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
        <rect x="1" y="6" width="5" height="10" rx="1" ry="1" />
        <line x1="3.5" y1="14" x2="3.5" y2="14.01" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-tag">Platform Capabilities</div>
      <h2 className="section-title">Everything Your Frontline Needs</h2>
      <p className="section-sub">
        From digital SOPs to real-time analytics, Vesica gives frontline teams the tools to work
        safer, smarter, and faster.
      </p>
      <div className="features-hero-row">
        {features.slice(0, 2).map((f) => (
          <div key={f.title} className="feature-card feature-card-hero">
            <div className={`feat-icon ${f.iconClass}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="features-grid">
        {features.slice(2).map((f) => (
          <div key={f.title} className="feature-card">
            <div className={`feat-icon ${f.iconClass}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
