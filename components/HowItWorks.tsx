const steps = [
  {
    title: 'Build Your Digital SOPs',
    desc: 'Use our no-code editor to convert existing procedures into rich digital work instructions — fast. Include photos, videos, and decision logic.',
  },
  {
    title: 'Deploy to Your Workers',
    desc: 'Publish to your frontline teams instantly on any device. Workers see exactly what they need, when they need it — even offline.',
  },
  {
    title: 'Capture Structured Data',
    desc: 'Every task completed generates rich operational data — from inspection results to anomaly reports — structured and ready for analysis.',
  },
  {
    title: 'Drive Continuous Improvement',
    desc: 'Use real-time dashboards and analytics to identify bottlenecks, reduce variation, and keep your operations running at peak performance.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how-content">
        <div className="section-tag">How It Works</div>
        <h2 className="section-title">From Paper to Digital in Weeks, Not Months</h2>
        <p className="section-sub">
          Vesica is designed for rapid deployment with minimal IT overhead. Get your frontline
          teams up and running fast.
        </p>
        <a
          href="#"
          className="btn-primary"
          style={{ display: 'inline-block', marginTop: '10px', padding: '12px 26px', borderRadius: '8px', fontSize: '15px' }}
        >
          See How It Works →
        </a>
      </div>
      <div className="how-steps">
        {steps.map((step, i) => (
          <div key={step.title} className="step">
            <div className="step-num">{i + 1}</div>
            <div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
