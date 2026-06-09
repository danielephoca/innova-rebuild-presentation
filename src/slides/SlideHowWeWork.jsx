import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'
import Timeline from '../components/Timeline'

const phases = [
  { label: 'Step 1', title: 'Safe copy', desc: 'Work on a private copy of the site, never on the live one.', status: 'active' },
  { label: 'Step 2', title: 'Review', desc: 'Every change is checked and approved before it ships.', status: 'active' },
  { label: 'Step 3', title: 'Deploy', desc: 'One repeatable, guarded push promotes it to the live site.', status: 'active' },
  { label: 'Step 4', title: 'Undo', desc: 'If anything looks wrong, we roll back instantly.', status: 'active' },
]

export default function SlideHowWeWork({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
      <SlideHeader
        kicker="How we work now"
        title="A safe, repeatable way to ship changes"
        subtitle="The same disciplined path, every single time."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
        style={{ width: '100%', maxWidth: 940, margin: '12px auto 0' }}
      >
        <Timeline phases={phases} active={isActive} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.8 }}
        style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 15, color: '#A8C7C2', textAlign: 'center', marginTop: 40 }}
      >
        The live site is never edited by hand again. It is only updated through this path.
      </motion.p>
    </div>
  )
}
