import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const problems = [
  { t: 'We edited the live site directly', d: 'Changes were made straight on the real website visitors were using. There was no safe copy to try things on first.' },
  { t: 'No history, no undo', d: 'We could not see what changed, when, or by whom. If something broke, there was no clean way to roll it back.' },
  { t: 'Logic hidden inside the site', d: 'Important business rules lived buried in the database, invisible and impossible to review properly.' },
  { t: 'One mistake could lose real data', d: 'A single bad change could silently destroy live business data: customer leads, users, and records.' },
]

export default function SlideProblem({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
      <SlideHeader
        kicker="Where we started"
        title="We were operating on a live patient"
        subtitle="The website worked, but the way we changed it was fragile and risky."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, width: '100%', maxWidth: 980, margin: '0 auto' }}>
        {problems.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
            style={{ background: '#0D1A18', border: '1px solid #1A3330', borderLeft: '3px solid #BA7517', borderRadius: 12, padding: '22px 26px' }}
          >
            <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 19, color: '#F0FAF8', marginBottom: 8 }}>{p.t}</div>
            <div style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 14, color: '#A8C7C2', lineHeight: 1.55 }}>{p.d}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
