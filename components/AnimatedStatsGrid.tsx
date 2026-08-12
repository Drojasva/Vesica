'use client'

import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export type AnimatedStatItem = {
  value: string
  label: string
}

function parseStatDisplay(display: string): { value: number; suffix: string } {
  const match = display.trim().match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { value: 0, suffix: display }
  return { value: Number(match[1]), suffix: match[2] }
}

function AnimatedStatValue({
  display,
  inView,
  className,
}: {
  display: string
  inView: boolean
  className: string
}) {
  const { value, suffix } = parseStatDisplay(display)
  const motionValue = useMotionValue(0)
  const [current, setCurrent] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!inView) return

    if (prefersReducedMotion) {
      motionValue.set(value)
      setCurrent(value)
      return
    }

    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setCurrent(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, motionValue, prefersReducedMotion, value])

  return (
    <div className={className}>
      {current}
      {suffix}
    </div>
  )
}

type AnimatedStatsGridProps = {
  stats: AnimatedStatItem[]
  variant?: 'home' | 'solution'
}

export default function AnimatedStatsGrid({ stats, variant = 'solution' }: AnimatedStatsGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  const isHome = variant === 'home'
  const gridClass = isHome ? 'stats-grid' : 'solution-stats-inner'
  const itemClass = isHome ? 'stat-item' : 'solution-stat'
  const valueClass = isHome ? 'stat-num' : 'solution-stat-value'
  const labelClass = isHome ? 'stat-label' : 'solution-stat-label'

  return (
    <div className={gridClass} ref={ref}>
      {stats.map((s) => (
        <div key={`${s.value}-${s.label}`} className={itemClass}>
          <AnimatedStatValue display={s.value} inView={inView} className={valueClass} />
          <div className={labelClass} style={isHome ? { whiteSpace: 'pre-line' } : undefined}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
