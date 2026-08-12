'use client'

import AnimatedStatsGrid from './AnimatedStatsGrid'

const stats = [
  { value: '75%', label: 'Reducción en tiempo de\ninactividad no planificado' },
  { value: '3M+', label: 'Instrucciones de trabajo\ncompletadas digitalmente' },
  { value: '60%', label: 'Incorporación más rápida\npara nuevos trabajadores' },
  { value: '40%', label: 'Reducción en defectos\nde calidad' },
]

export default function Stats() {
  return (
    <section className="stats">
      <h2>Impacto Comprobado a Escala</h2>
      <p>
        DevSolution ofrece resultados medibles en industrias manufactureras, energéticas y de
        alimentos y bebidas en todo el mundo.
      </p>
      <AnimatedStatsGrid stats={stats} variant="home" />
    </section>
  )
}
