import { useState } from 'react'
import { motion } from 'framer-motion'

const POSITIONS = {
  center:       { x: 250, y: 200 },
  left:         { x: 60,  y: 200 },
  right:        { x: 440, y: 200 },
  top:          { x: 250, y: 40  },
  'bottom-left':  { x: 80,  y: 340 },
  'bottom-right': { x: 420, y: 340 },
}

export default function FlowDiagram({ nodes = [], active = true }) {
  const [tooltip, setTooltip] = useState(null)

  const center = nodes.find(n => n.position === 'center')
  const spokes = nodes.filter(n => n.position !== 'center')

  return (
    <div style={{ position: 'relative', width: 500, height: 400 }}>
      <svg width="500" height="400" style={{ position: 'absolute', top: 0, left: 0 }}>
        {spokes.map((node, i) => {
          const from = POSITIONS['center']
          const to   = POSITIONS[node.position] || { x: 250, y: 200 }
          return (
            <motion.line
              key={node.id}
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke="#1A3330"
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={active ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: 'easeOut' }}
            />
          )
        })}
      </svg>

      {nodes.map((node, i) => {
        const pos  = POSITIONS[node.position] || POSITIONS['center']
        const isCtr = node.position === 'center'

        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={active ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12, ease: 'easeOut' }}
            onMouseEnter={() => node.tooltip && setTooltip(node.id)}
            onMouseLeave={() => setTooltip(null)}
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              left: pos.x,
              top:  pos.y,
              background: isCtr ? '#009883' : '#0D1A18',
              border: `2px solid ${isCtr ? '#009883' : '#1A3330'}`,
              borderRadius: 10,
              padding: isCtr ? '14px 24px' : '10px 18px',
              fontFamily: 'Poppins',
              fontWeight: isCtr ? 600 : 400,
              fontSize: isCtr ? 16 : 14,
              color: '#F0FAF8',
              whiteSpace: 'nowrap',
              cursor: node.tooltip ? 'default' : undefined,
              zIndex: isCtr ? 2 : 1,
            }}
          >
            {node.label}
            {tooltip === node.id && node.tooltip && (
              <div style={{
                position: 'absolute',
                bottom: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#132420',
                border: '1px solid #1A3330',
                borderRadius: 8,
                padding: '8px 12px',
                fontFamily: 'Poppins',
                fontSize: 12,
                color: '#F0FAF8',
                whiteSpace: 'nowrap',
                zIndex: 10,
              }}>
                {node.tooltip}
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
