import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target, duration = 1200, active = true) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return
    const isInt = /^\d+$/.test(String(target))
    if (!isInt) { setCount(target); return }

    startedRef.current = true
    const num = parseInt(target, 10)
    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(progress * num))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])

  return count
}

export default function StatCallout({ value, label, color = '#009883', active = true }) {
  const displayValue = useCountUp(value, 1200, active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
    >
      <span style={{
        fontFamily: 'Poppins',
        fontWeight: 700,
        fontSize: 64,
        lineHeight: 1,
        color,
      }}>
        {displayValue}
      </span>
      <span style={{
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 16,
        color: '#A8C7C2',
      }}>
        {label}
      </span>
    </motion.div>
  )
}
