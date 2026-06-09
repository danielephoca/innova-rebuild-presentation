import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../slides'

export default function Overview({ isOpen, currentIndex, onSelect }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(6, 15, 14, 0.95)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 48,
          }}
        >
          <div style={{
            fontFamily: 'Poppins', fontWeight: 600, fontSize: 20,
            color: '#F0FAF8', marginBottom: 32,
          }}>
            Overview
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            maxWidth: 900,
            width: '100%',
          }}>
            {slides.map((Slide, i) => (
              <motion.button
                key={i}
                onClick={() => onSelect(i)}
                whileHover={{ scale: 1.04 }}
                style={{
                  background: i === currentIndex ? '#132420' : '#0D1A18',
                  border: `2px solid ${i === currentIndex ? '#009883' : '#1A3330'}`,
                  borderRadius: 8,
                  padding: '12px 8px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{
                  width: '100%', aspectRatio: '16/9',
                  background: '#060F0E',
                  borderRadius: 4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  <span style={{ fontFamily: 'Poppins', fontSize: 20, color: '#009883', fontWeight: 700 }}>
                    {i + 1}
                  </span>
                </div>
                <span style={{ fontFamily: 'Poppins', fontSize: 12, color: '#A8C7C2' }}>
                  Slide {i + 1}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
