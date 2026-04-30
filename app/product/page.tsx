import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import styles from './product.module.css'

export default function ProductPage() {
  return (
    <div className={styles.productPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.productHero}>
        <div className={styles.container}>
          <div>
            <h1>Connected Worker<sup>®</sup><br /><span>Production Workflow Software</span></h1>
            <p>A smarter strategy for driving productivity.</p>
          </div>
        </div>
      </section>

      {/* Feature 1: Streamline Production */}
      <section className={styles.productFeature}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div>
            <div className={styles.imageContainerSquare}>
              <Image src="/tableta.png" alt="Tablet Workflow" fill className={styles.objectCover} />
            </div>
          </div>
          <div className={styles.productFeatureText}>
            <h2>Streamline production for increased throughput</h2>
            <p>In today's increasingly competitive global marketplace, the right digital approach can propel your production levels to new heights. Start by equipping your workforce with the best-in-class tools and support it needs to get the job done right, every time.</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.productQuote}>
        <div className={styles.container}>
          <blockquote>
            "The digital world that we're in now – and Parsable plays in this world – is our next major leap in manufacturing that really is going to change productivity for the American worker that we haven't seen in 40 years."
          </blockquote>
          <div>
            <p className={styles.authorRole}>Vice President, Engineering and Process Technology</p>
            <p className={styles.authorCompany}>ChampionX</p>
          </div>
        </div>
      </section>

      {/* Feature 2: Empowering Workers */}
      <section className={`${styles.productFeature} ${styles.productFeatureAlt}`}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div>
            <div className={styles.imageContainerWide}>
              <Image src="/dashboard.png" alt="Dashboard Workflow" fill className={styles.objectContain} />
            </div>
          </div>
          <div className={styles.productFeatureText}>
            <h2>Empowering workers, accelerating gains</h2>
            <p>Accelerate production gains and reduce bottlenecks across your operations without compromising quality or safety. Connected work turns frontline workers into engaged problem-solvers while providing plant and line managers the insights they need to optimize operations and execute work better.</p>
            <a href="#" className={styles.btnProductPrimary}>Get a Demo</a>
          </div>
        </div>
      </section>

      {/* Feature 3: Embedding Efficiencies */}
      <section className={styles.productFeature}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div className={styles.productFeatureText}>
            <h2>Embedding efficiencies into the process</h2>
            <p>With interactive, digital SOPs, workers have immediate, easy access to the guidance on how to best execute their respective tasks. The data points they capture, such as inspection results, trigger the next task. Efficiencies are baked in; production growth, too.</p>
            <a href="#" className={styles.btnProductPrimary}>Read Customer Story</a>
          </div>
          <div>
            <div className={styles.imageContainerWide}>
              <Image src="/celular.png" alt="Mobile Efficiency" fill className={styles.objectContain} />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className={styles.getStartedSection}>
        <div className={styles.container}>
          <span className={styles.getStartedTag}>Get Started</span>
          <h2 className={styles.getStartedHeading}>Welcome to your digital future</h2>
          <p className={styles.getStartedText}>
            Schedule a custom demo and have an expert show you how Parsable works.
          </p>
          <div className={styles.getStartedBtns}>
            <a href="#" className={styles.btnOutline}>Get Started</a>
            <a href="#" className={styles.btnFilled}>Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
