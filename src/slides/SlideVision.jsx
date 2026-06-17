import { motion } from 'framer-motion'

export default function SlideVision({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', color: '#0C8870', marginBottom: 18 }}
      >
        The vision
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
        style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 50, lineHeight: 1.18, color: '#F0FAF8', marginBottom: 22, maxWidth: 900 }}
      >
        Build it once. Reuse it everywhere.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.24 }}
        style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 20, color: '#A8C7C2', lineHeight: 1.55, maxWidth: 760, margin: '0 auto' }}
      >
        We are not just fixing one website. We are building a modern foundation, then dropping that same foundation onto every site we run, in days instead of months.
      </motion.p>
    </div>
  )
}
