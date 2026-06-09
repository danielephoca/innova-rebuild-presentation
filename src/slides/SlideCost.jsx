import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const costs = [
  { big: 'Slow', d: 'Because every change was risky, changes were rare and slow. Simple updates waited.' },
  { big: 'Risky', d: 'A small mistake could take the site down or lose data, with no quick way back.' },
  { big: 'Locked in', d: 'Knowledge lived in one person’s head, not in the project. Hard to share or hand over.' },
  { big: 'Costly', d: 'Manual work, paid tools used inefficiently, and constant rework all added up.' },
]

export default function SlideCost({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
      <SlideHeader
        kicker="What it cost us"
        title="The old way was expensive in every sense"
        subtitle="Not just money: time, risk, and the ability to move fast."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, width: '100%', maxWidth: 1040, margin: '0 auto' }}>
        {costs.map((c, i) => (
          <motion.div
            key={c.big}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            style={{ background: '#0D1A18', border: '1px solid #1A3330', borderTop: '3px solid #009883', borderRadius: 12, padding: '24px 22px', textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 28, color: '#009883', marginBottom: 10 }}>{c.big}</div>
            <div style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 13.5, color: '#A8C7C2', lineHeight: 1.55 }}>{c.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
