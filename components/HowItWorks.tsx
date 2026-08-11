'use client'

import { useState } from 'react'

const steps = [
  {
    title: 'Crea tus POE Digitales',
    desc: 'Usa nuestro editor sin código para convertir procedimientos existentes en instrucciones de trabajo digitales enriquecidas — rápido. Incluye fotos, videos y lógica de decisión.',
  },
  {
    title: 'Despliega a tus Trabajadores',
    desc: 'Publica para tus equipos de primera línea al instante en cualquier dispositivo. Los trabajadores ven exactamente lo que necesitan, cuando lo necesitan — incluso sin conexión.',
  },
  {
    title: 'Captura Datos Estructurados',
    desc: 'Cada tarea completada genera datos operativos enriquecidos — desde resultados de inspección hasta informes de anomalías — estructurados y listos para el análisis.',
  },
  {
    title: 'Impulsa la Mejora Continua',
    desc: 'Usa paneles y análisis en tiempo real para identificar cuellos de botella, reducir la variación y mantener tus operaciones funcionando al máximo rendimiento.',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(-1)

  return (
    <section className="how">
      <div className="how-content">
        <div className="section-tag">Cómo Funciona</div>
        <h2 className="section-title">Del Papel a lo Digital en Semanas, No Meses</h2>
        <p className="section-sub">
          DevSolution está diseñado para una implementación rápida con mínima inversión en TI.
          Pon a tus equipos de primera línea en marcha rápidamente.
        </p>
        <a
          href="/demo"
          className="btn-primary"
          style={{ display: 'inline-block', marginTop: '10px', padding: '12px 26px', borderRadius: '8px', fontSize: '15px' }}
        >
          Ver Cómo Funciona →
        </a>
      </div>
      <div className="how-steps">
        <div className="timeline-line" />
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`step step-animated ${activeStep === i ? 'step-active' : ''}`}
            style={{ animationDelay: `${i * 0.15}s` }}
            onMouseEnter={() => setActiveStep(i)}
            onMouseLeave={() => setActiveStep(-1)}
          >
            <div className="step-num-wrapper">
              <div className={`step-num ${activeStep === i ? 'step-num-glow' : ''}`}>{i + 1}</div>
            </div>
            <div className="step-card">
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
