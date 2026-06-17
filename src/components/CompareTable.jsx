import { motion } from 'framer-motion'

export default function CompareTable({ rows = [], active = true }) {
  return (
    <div style={{ width: '100%' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, marginBottom: 2 }}>
        <div />
        <div style={{
          fontFamily: 'Poppins', fontWeight: 600, fontSize: 14,
          color: '#A8C7C2', textAlign: 'center', padding: '8px 16px',
        }}>
          Without AI
        </div>
        <div style={{
          fontFamily: 'Poppins', fontWeight: 600, fontSize: 14,
          color: '#0C8870', textAlign: 'center', padding: '8px 16px',
          borderBottom: '2px solid #0C8870',
        }}>
          With Innova AI
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: -16 }}
          animate={active ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.12 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 1,
            borderBottom: '1px solid #1A3330',
          }}
        >
          <div style={{
            fontFamily: 'Poppins', fontWeight: 600, fontSize: 14,
            color: '#F0FAF8', padding: '12px 16px',
          }}>
            {row.label}
          </div>
          <div style={{
            fontFamily: 'Poppins', fontWeight: 400, fontSize: 14,
            color: '#A8C7C2', padding: '12px 16px', textAlign: 'center',
          }}>
            {row.before}
          </div>
          <div style={{
            fontFamily: 'Poppins', fontWeight: 400, fontSize: 14,
            color: '#F0FAF8', padding: '12px 16px', textAlign: 'center',
            background: '#0D1A18',
          }}>
            {row.after}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
