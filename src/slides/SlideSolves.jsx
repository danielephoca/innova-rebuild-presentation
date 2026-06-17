import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const pillars = [
  { t: 'Performance', d: 'A faster, lighter site for every visitor.' },
  { t: 'Quality in the UI', d: 'A cleaner, consistent look we fully control.' },
  { t: 'Version control', d: 'Full history, review on every change, instant undo.' },
  { t: 'Lower costs', d: 'Less manual work, less rework, tools used well.' },
  { t: 'Upskilling the team', d: 'Everyone works the modern, professional way.' },
  { t: 'AI built in', d: 'An AI co-engineer helps at every step of the work.' },
]

export default function SlideSolves({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '56px 80px' }}>
      <SlideHeader
        kicker="What this project solves"
        title="Six problems, one project"
        subtitle="Everything we are building serves these six goals."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, width: '100%', maxWidth: 1020, margin: '0 auto' }}>
        {pillars.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.09 }}
            whileHover={{ scale: 1.02, borderColor: '#0C8870' }}
            style={{ background: '#0D1A18', border: '1px solid #1A3330', borderRadius: 12, padding: '24px 24px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#0C8870' }} />
              <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 19, color: '#F0FAF8' }}>{p.t}</div>
            </div>
            <div style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, color: '#A8C7C2', lineHeight: 1.55 }}>{p.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
