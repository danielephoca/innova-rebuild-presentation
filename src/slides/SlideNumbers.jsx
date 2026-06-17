import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const stats = [
  { n: '1 GB â†’ 700 MB', l: 'Site data cleaned, with zero content lost.' },
  { n: '27+', l: 'Pieces of code now versioned and reviewable.' },
  { n: '21', l: 'Hidden passwords and keys found and removed.' },
  { n: '~3.5 min', l: 'To make a safe copy of the live site for testing.' },
  { n: '5', l: 'Environments working together, end to end.' },
  { n: '1 command', l: 'To undo a bad change and restore the site.' },
]

export default function SlideNumbers({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '56px 80px' }}>
      <SlideHeader
        kicker="By the numbers"
        title="Real progress, already measured"
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, width: '100%', maxWidth: 1000, margin: '0 auto' }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            style={{ background: '#0D1A18', border: '1px solid #1A3330', borderLeft: '3px solid #0C8870', borderRadius: 12, padding: '22px 24px' }}
          >
            <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 34, color: '#0C8870', lineHeight: 1.1 }}>{s.n}</div>
            <div style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, color: '#A8C7C2', marginTop: 8, lineHeight: 1.5 }}>{s.l}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
