import { motion } from 'framer-motion'

export default function AnimatedCard({ children, delay = 0, accent = false, accentTop = false, style = {}, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      whileHover={{ scale: 1.02, borderColor: '#0C8870' }}
      style={{
        background: '#0D1A18',
        border: `1px solid #1A3330`,
        borderRadius: 12,
        padding: '28px 32px',
        ...(accent    ? { borderLeft:  '3px solid #0C8870' } : {}),
        ...(accentTop ? { borderTop:   '3px solid #0C8870' } : {}),
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
