import { motion } from 'framer-motion'

export default function SlideHeader({ kicker, title, subtitle, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ textAlign: align, marginBottom: 28 }}
    >
      {kicker && (
        <div style={{
          fontFamily: 'Poppins', fontWeight: 600, fontSize: 13,
          letterSpacing: 1.5, textTransform: 'uppercase',
          color: '#009883', marginBottom: 12,
        }}>
          {kicker}
        </div>
      )}
      <h1 style={{
        fontFamily: 'Poppins', fontWeight: 600, fontSize: 40,
        lineHeight: 1.15, color: '#F0FAF8', marginBottom: subtitle ? 12 : 0,
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{
          fontFamily: 'Poppins', fontWeight: 400, fontSize: 18,
          color: '#A8C7C2', lineHeight: 1.5, maxWidth: 820,
          margin: align === 'center' ? '0 auto' : 0,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
