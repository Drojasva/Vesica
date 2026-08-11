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
            <h1>Software de Flujo de Trabajo<br /><span>para Operaciones Industriales</span></h1>
            <p>Una estrategia más inteligente para impulsar la productividad.</p>
          </div>
        </div>
      </section>

      {/* Feature 1: Streamline Production */}
      <section className={styles.productFeature}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div>
            <div className={styles.imageContainerSquare}>
              <Image src="/tableta.png" alt="Flujo de Trabajo en Tablet" fill className={styles.objectCover} />
            </div>
          </div>
          <div className={styles.productFeatureText}>
            <h2>Optimiza la producción para aumentar el rendimiento</h2>
            <p>En el mercado global cada vez más competitivo de hoy, el enfoque digital adecuado puede impulsar tus niveles de producción a nuevas alturas. Comienza equipando a tu fuerza laboral con las mejores herramientas y el soporte que necesita para hacer el trabajo correctamente, cada vez.</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.productQuote}>
        <div className={styles.container}>
          <blockquote>
            &ldquo;El mundo digital en el que estamos ahora – y DevSolution juega en este mundo – es nuestro próximo gran salto en la manufactura que realmente va a cambiar la productividad del trabajador industrial como no se ha visto en 40 años.&rdquo;
          </blockquote>
          <div>
            <p className={styles.authorRole}>Vicepresidente, Ingeniería y Tecnología de Procesos</p>
            <p className={styles.authorCompany}>Fabricante Químico Líder</p>
          </div>
        </div>
      </section>

      {/* Feature 2: Empowering Workers */}
      <section className={`${styles.productFeature} ${styles.productFeatureAlt}`}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div>
            <div className={styles.imageContainerWide}>
              <Image src="/dashboard.png" alt="Panel de Operaciones" fill className={styles.objectContain} />
            </div>
          </div>
          <div className={styles.productFeatureText}>
            <h2>Empoderando trabajadores, acelerando ganancias</h2>
            <p>Acelera las ganancias de producción y reduce los cuellos de botella en todas tus operaciones sin comprometer la calidad ni la seguridad. El trabajo conectado convierte a los trabajadores de primera línea en solucionadores de problemas comprometidos, mientras proporciona a los gerentes de planta y línea las perspectivas que necesitan para optimizar las operaciones y ejecutar mejor el trabajo.</p>
            <a href="#" className={styles.btnProductPrimary}>Solicitar una Demo</a>
          </div>
        </div>
      </section>

      {/* Feature 3: Embedding Efficiencies */}
      <section className={styles.productFeature}>
        <div className={`${styles.container} ${styles.productFeatureGrid}`}>
          <div className={styles.productFeatureText}>
            <h2>Incorporando eficiencias en el proceso</h2>
            <p>Con POE digitales interactivos, los trabajadores tienen acceso inmediato y fácil a la orientación sobre cómo ejecutar mejor sus respectivas tareas. Los datos que capturan, como los resultados de inspección, activan la siguiente tarea. Las eficiencias están integradas; el crecimiento de la producción también.</p>
            <a href="#" className={styles.btnProductPrimary}>Leer Caso de Éxito</a>
          </div>
          <div>
            <div className={styles.imageContainerWide}>
              <Image src="/celular.png" alt="Eficiencia Móvil" fill className={styles.objectContain} />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className={styles.getStartedSection}>
        <div className={styles.container}>
          <span className={styles.getStartedTag}>Comienza Ahora</span>
          <h2 className={styles.getStartedHeading}>Bienvenido a tu futuro digital</h2>
          <p className={styles.getStartedText}>
            Agenda una demo personalizada y un experto te mostrará cómo funciona DevSolution.
          </p>
          <div className={styles.getStartedBtns}>
            <a href="#" className={styles.btnOutline}>Comenzar</a>
            <a href="#" className={styles.btnFilled}>Agendar Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
