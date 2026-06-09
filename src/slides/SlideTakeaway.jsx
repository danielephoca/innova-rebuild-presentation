import { motion } from 'framer-motion'

export default function SlideTakeaway({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', color: '#009883', marginBottom: 18 }}
      >
        The takeaway
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
        style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 46, lineHeight: 1.2, color: '#F0FAF8', marginBottom: 24, maxWidth: 920 }}
      >
        We rebuilt how the work is done, not the website itself.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.24 }}
        style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 20, color: '#A8C7C2', lineHeight: 1.6, maxWidth: 780, margin: '0 auto' }}
      >
        Faster, safer, cheaper, and built to last, with the whole team working the modern way. The content stayed. The foundation is new, and it is ready to reuse on every site.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
        style={{ marginTop: 44, fontFamily: 'Poppins' }}
      >
        <span style={{ fontWeight: 500, fontSize: 14, color: '#F0FAF8' }}>Daniel Saul</span>
        <span style={{ fontSize: 14, color: '#A8C7C2', margin: '0 8px' }}>|</span>
        <span style={{ fontWeight: 400, fontSize: 14, color: '#A8C7C2' }}>Thank you</span>
      </motion.div>
    </div>
  )
}
