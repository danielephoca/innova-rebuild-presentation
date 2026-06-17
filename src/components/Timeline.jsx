import { motion } from 'framer-motion'

export default function Timeline({ phases = [], active = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, width: '100%' }}>
      {phases.map((phase, i) => {
        const isActive = phase.status === 'active'
        const color = isActive ? '#0C8870' : '#A8C7C2'

        return (
          <motion.div
            key={phase.label}
            initial={{ opacity: 0, y: 16 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.12 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
          >
            {/* Connector line */}
            {i < phases.length - 1 && (
              <div style={{
                position: 'absolute',
                top: 12,
                left: '50%',
                width: '100%',
                height: 2,
                background: '#1A3330',
              }} />
            )}

            {/* Dot */}
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: isActive ? '#0C8870' : '#132420',
              border: `2px solid ${color}`,
              zIndex: 1,
              flexShrink: 0,
            }} />

            {/* Label and content */}
            <div style={{ marginTop: 12, textAlign: 'center', padding: '0 8px' }}>
              <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 13, color, marginBottom: 4 }}>
                {phase.label}
              </div>
              <div style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 16, color: '#F0FAF8', marginBottom: 6 }}>
                {phase.title}
              </div>
              {phase.desc && (
                <div style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 13, color: '#A8C7C2', lineHeight: 1.5 }}>
                  {phase.desc}
                </div>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
