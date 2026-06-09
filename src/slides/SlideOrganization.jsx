import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const rows = [
  { thing: 'A real feature (a calculator, a locator)', home: 'Its own self-contained module' },
  { thing: 'Small shared tweaks and glue', home: 'One shared core module' },
  { thing: 'How the site looks', home: 'The theme' },
  { thing: 'Always-on safety guards', home: 'Protected, can’t be switched off' },
  { thing: 'Business logic', home: 'Never hidden in the database' },
]

export default function SlideOrganization({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
      <SlideHeader
        kicker="Project organization"
        title="A place for everything"
        subtitle="Clear boundaries mean anyone can find, understand, and safely change the code."
      />

      <div style={{ width: '100%', maxWidth: 920, margin: '0 auto' }}>
        {rows.map((r, i) => (
          <motion.div
            key={r.thing}
            initial={{ opacity: 0, x: -16 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.12 + i * 0.1 }}
            style={{
              display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 20,
              background: '#0D1A18', border: '1px solid #1A3330', borderRadius: 10,
              padding: '16px 24px', marginBottom: 10,
            }}
          >
            <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 15, color: '#A8C7C2' }}>{r.thing}</span>
            <span style={{ color: '#009883', fontSize: 18 }}>→</span>
            <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 15, color: '#F0FAF8', textAlign: 'right' }}>{r.home}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
