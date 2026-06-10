import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Maintenance Solutions | Vesica Connected Worker®',
  description: 'Equip your maintenance teams with modern digital tools to manage and continuously improve work processes.',
}

const benefits = [
  {
    title: 'Predictive Maintenance Intelligence',
    desc: 'Go beyond reactive fixes. Capture detailed metadata about work performed leading up to errors or breakdowns — understanding not just what happened, but why.',
  },
  {
    title: 'Real-Time Work Visibility',
    desc: 'Current systems record the "what" and "when" of machine errors, but miss the "why." Vesica captures how work is actually performed, giving maintenance leaders unprecedented visibility.',
  },
  {
    title: 'Continuous SOP Improvement',
    desc: 'Dynamically update standard operating procedures based on real field data. Reduce technician error and improve planned maintenance traceability with every completed task.',
  },
]

const stats = [
  { value: '75%', label: 'Reduction in unplanned downtime' },
  { value: '40%', label: 'Faster mean time to repair' },
  { value: '90%', label: 'SOP adherence rate achieved' },
]

export default function MaintenancePage() {
  return (
    <>
      <Navbar />

      <section className="solution-hero">
        <div className="solution-hero-inner">
          <div className="section-tag">Maintenance Solutions</div>
          <h1 className="solution-hero-title">Achieve On-Time &amp; Error-Free Maintenance</h1>
          <p className="solution-hero-desc">
            Today&apos;s increased operational complexity means that effective maintenance is both
            more important and more challenging than ever. Equip your maintenance teams with the
            modern digital tools they need to manage and continuously improve work processes.
          </p>
          <a href="/demo" className="btn-hero-primary">Request a Demo</a>
        </div>
      </section>

      <section className="solution-quote-section">
        <div className="solution-quote-inner">
          <blockquote className="solution-blockquote">
            &ldquo;In maintenance, ERP systems record that the maintenance work happened, but they
            don&apos;t record the metadata about how things actually happen. Vesica does.&rdquo;
          </blockquote>
          <p className="solution-quote-author">Chief Innovation and Information Technology Officer</p>
          <p className="solution-quote-company">Global Dairy Products Manufacturer</p>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="solution-benefits-inner">
          <h2 className="section-title">Better Visibility, Greater Efficiencies</h2>
          <p className="section-sub" style={{ maxWidth: '620px' }}>
            Capture how maintenance work is actually performed on the floor. Use real-time data
            to fuel prescriptive maintenance that saves time and money.
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
            <h2>Fixing the Issue Before It Occurs</h2>
            <p>
              With more information on how maintenance work on the floor is actually being done,
              your team can manage activities more efficiently and spot trouble before it starts.
              Improved procedural adherence ensures fewer unexpected stops and unplanned downtime.
            </p>
            <p>
              Access to real-time data fuels prescriptive maintenance that can save time and money.
              Empower your maintenance teams to identify patterns, reduce variation, and drive
              continuous improvement from the ground up.
            </p>
          </div>
          <div className="solution-detail-visual">
            <div className="solution-visual-card">
              <div className="solution-visual-icon">🔧</div>
              <h4>Autonomous Maintenance</h4>
              <p>Enable operators to perform routine maintenance tasks independently with guided digital procedures.</p>
            </div>
            <div className="solution-visual-card">
              <div className="solution-visual-icon">📊</div>
              <h4>Data-Driven Decisions</h4>
              <p>Leverage execution data to optimize maintenance schedules and resource allocation.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
