import { motion, AnimatePresence } from 'framer-motion'
import { slidesMeta } from '../data/slides-meta'

export default function PresenterNotes({ isOpen, currentIndex, onClose }) {
  const meta = slidesMeta[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            bottom: 0, left: 0, right: 0,
            background: '#0D1A18',
            borderTop: '1px solid #1A3330',
            padding: '24px 48px',
            zIndex: 100,
            maxHeight: '35vh',
            overflow: 'auto',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 14, color: '#009883' }}>
              Presenter Notes — {meta?.title}
            </span>
            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', color: '#A8C7C2',
                fontFamily: 'Poppins', fontSize: 20, cursor: 'pointer',
              }}
            >
              ×
            </button>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {meta?.notes?.map((note, i) => (
              <li key={i} style={{ fontFamily: 'Poppins', fontSize: 15, color: '#F0FAF8', lineHeight: 1.6 }}>
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
