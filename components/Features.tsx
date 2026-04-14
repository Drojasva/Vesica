const features = [
  {
    icon: '📋',
    iconClass: 'icon-orange',
    title: 'Digital Work Instructions',
    desc: 'Replace paper checklists and PDFs with rich, multimedia SOPs — complete with images, videos, and guided steps that workers can follow on any device.',
  },
  {
    icon: '🔗',
    iconClass: 'icon-blue',
    title: 'Connected Workflows',
    desc: 'Connect people, processes, and systems. Trigger automated notifications, escalations, and approvals based on real-time field data.',
  },
  {
    icon: '📊',
    iconClass: 'icon-green',
    title: 'Operational Insights',
    desc: 'Capture structured data at the point of work and surface actionable insights in live dashboards — for managers, supervisors, and executives.',
  },
  {
    icon: '🛡️',
    iconClass: 'icon-purple',
    title: 'Safety & Compliance',
    desc: 'Embed safety checks, permits-to-work, and compliance steps directly into operational workflows to ensure every task is done safely and correctly.',
  },
  {
    icon: '⚙️',
    iconClass: 'icon-orange',
    title: 'Integrations & APIs',
    desc: 'Seamlessly connect with your existing ERP, CMMS, and IoT systems. Vesica integrates with SAP, Microsoft, Salesforce, and more.',
  },
  {
    icon: '📱',
    iconClass: 'icon-blue',
    title: 'Works Anywhere',
    desc: 'Available on iOS, Android, and web. Offline mode ensures work continues even in the most remote or connectivity-challenged industrial environments.',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="section-tag">Platform Capabilities</div>
      <h2 className="section-title">Everything Your Frontline Needs</h2>
      <p className="section-sub">
        From digital SOPs to real-time analytics, Vesica gives frontline teams the tools to work
        safer, smarter, and faster.
      </p>
      <div className="features-grid">
        {features.map((f) => (
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
