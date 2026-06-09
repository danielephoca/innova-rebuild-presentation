import { motion } from 'framer-motion'
import SlideHeader from '../components/SlideHeader'

const sites = ['innova.co', 'nextac.com', 'aioair', 'osmofancoils', 'loophp', '…and the next one']

export default function SlideReuse({ isActive }) {
  return (
    <div className="slide-root" style={{ flexDirection: 'column', justifyContent: 'center', padding: '60px 80px' }}>
      <SlideHeader
        kicker="Why it matters"
        title="The same foundation, on every site"
        subtitle="What we build for Innova becomes the template for all of our sites."
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', maxWidth: 900, margin: '0 auto 32px' }}>
        {sites.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
            style={{
              background: i === 0 ? '#009883' : '#0D1A18',
              border: `1px solid ${i === 0 ? '#009883' : '#1A3330'}`,
              borderRadius: 999, padding: '12px 26px',
              fontFamily: 'Poppins', fontWeight: 600, fontSize: 16,
              color: '#F0FAF8',
            }}
          >
            {s}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.7 }}
        style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 18, color: '#A8C7C2', textAlign: 'center', maxWidth: 760, margin: '0 auto', lineHeight: 1.55 }}
      >
        Once the foundation is proven on Innova, rolling it out to the next site takes days, not months. The hard work is done only once.
      </motion.p>
    </div>
  )
}
