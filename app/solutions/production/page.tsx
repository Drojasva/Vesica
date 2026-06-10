import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Production Solutions | Vesica Connected Worker®',
  description: 'Streamline production workflows, increase throughput, and empower your frontline workforce with digital tools.',
}

const benefits = [
  {
    title: 'Streamline Production Workflows',
    desc: 'In today\'s increasingly competitive global marketplace, the right digital approach propels production levels to new heights. Equip your workforce with best-in-class tools to get the job done right, every time.',
  },
  {
    title: 'Empower Workers, Accelerate Gains',
    desc: 'Connected work turns frontline workers into engaged problem-solvers while providing plant and line managers the insights they need to optimize operations and execute work better.',
  },
  {
    title: 'Embed Efficiencies Into the Process',
    desc: 'With interactive digital SOPs, workers have immediate access to guidance on how to best execute their tasks. Data points they capture trigger the next task — efficiencies are baked in.',
  },
]

const stats = [
  { value: '5%', label: 'Increase in OEE' },
  { value: '60%', label: 'Faster worker onboarding' },
  { value: '35%', label: 'Improvement in quality metrics' },
]

export default function ProductionPage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner">
          <div className="section-tag">Production Solutions</div>
          <h1 className="solution-hero-title">A Smarter Strategy for Driving Productivity</h1>
          <p className="solution-hero-desc">
            Accelerate production gains and reduce bottlenecks across your operations without
            compromising quality or safety. Vesica gives your frontline teams the digital tools
            they need to work faster, smarter, and more efficiently.
          </p>
          <a href="/demo" className="btn-hero-primary">Request a Demo</a>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;The digital world that we&apos;re in now — and Vesica plays in this world — is
            our next major leap in manufacturing that really is going to change productivity for
            the industrial worker.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Vice President, Engineering and Process Technology</p>
          <p className="solution-quote-company">Leading Chemical Manufacturer</p>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">From Floor to C-Suite Visibility</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Transform your production operations with real-time data capture, guided work
            instructions, and actionable insights at every level of your organization.
          </p>
          <div className="solution-benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="solution-benefit-card">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-stats">
        <div className="solution-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="solution-stat">
              <div className="solution-stat-value">{s.value}</div>
              <div className="solution-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="solution-detail">
        <div className="solution-detail-inner">
          <div className="solution-detail-text">
            <h2>Empowering Workers, Accelerating Gains</h2>
            <p>
              Accelerate production gains and reduce bottlenecks across your operations without
              compromising quality or safety. Connected work turns frontline workers into engaged
              problem-solvers while providing plant and line managers the insights they need.
            </p>
            <p>
              With interactive, digital SOPs, workers have immediate, easy access to guidance on
              how to best execute their respective tasks. The data points they capture trigger
              the next task. Efficiencies are baked in; production growth, too.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon">⚡</div>
              <h4>Increased Throughput</h4>
              <p>Reduce changeover times and eliminate production bottlenecks with guided digital workflows.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon">✅</div>
              <h4>Quality Assurance</h4>
              <p>Embed quality checks directly into production workflows to catch defects at the source.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
