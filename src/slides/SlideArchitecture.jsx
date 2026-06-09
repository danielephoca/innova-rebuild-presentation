import { motion } from 'framer-motion'

/* ── Curve helper ─────────────────────────────────────────── */
function curvePath(from, to, curvature = 0.1) {
  const [x1, y1] = from
  const [x2, y2] = to
  if (curvature === 0) return `M ${x1} ${y1} L ${x2} ${y2}`
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  return `M ${x1} ${y1} Q ${mx + dy * curvature} ${my - dx * curvature} ${x2} ${y2}`
}

/* ── Nodes ────────────────────────────────────────────────── */
const NODES = [
  { id: 'github', label: 'Code + full history', badge: 'GITHUB', sub: 'every change, reviewable', cx: 175, cy: 42, w: 250, h: 56, borderColor: '#009883', delay: 0.1 },
  { id: 'visitors', label: 'Visitors', cx: 775, cy: 40, w: 160, h: 48, borderColor: '#1A3330', delay: 0.9 },
  { id: 'local', label: 'Local copies', sub: 'each developer’s machine', cx: 130, cy: 210, w: 190, h: 64, borderColor: '#1A3330', delay: 0.3 },
  { id: 'staging', label: 'Staging & QA', sub: 'safe testing site', cx: 440, cy: 210, w: 220, h: 70, borderColor: '#009883', delay: 0.45 },
  { id: 'prod', label: 'Production', badge: 'LIVE', sub: 'innova.co', cx: 780, cy: 205, w: 250, h: 88, borderColor: '#009883', borderWidth: 2, fontSize: 16, fontWeight: 600, delay: 0.6 },
  { id: 'replica', label: 'Replica server', badge: 'STANDBY', sub: 'different location', cx: 620, cy: 388, w: 210, h: 66, borderColor: '#1A3330', borderStyle: 'dashed', delay: 1.4 },
  { id: 'backups', label: 'Backups', badge: 'DAILY', sub: 'off-site copies', cx: 910, cy: 388, w: 190, h: 66, borderColor: '#009883', delay: 1.55 },
]

/* ── Connections ──────────────────────────────────────────── */
const LINES = [
  // GitHub → Local (clone)
  { from: [150, 70], to: [130, 178], color: '#009883', w: 2, curve: 0.05, flow: true, delay: 0.5, flowColor: '#2DB9A5', label: 'clone', lx: -22, ly: 0 },
  // Local → Staging (build & test)
  { from: [225, 210], to: [330, 210], color: '#009883', w: 2, curve: 0, flow: true, delay: 0.7, flowColor: '#2DB9A5', label: 'build + test', lx: 0, ly: -12 },
  // Staging → Production (deploy)
  { from: [550, 196], to: [655, 188], color: '#009883', w: 2.5, curve: 0.05, flow: true, delay: 0.9, flowColor: '#2DB9A5', label: 'deploy (reviewed)', lx: 0, ly: -14 },
  // Production → Staging (refresh / safe copy, reverse)
  { from: [655, 224], to: [550, 230], color: '#1A3330', w: 1.5, curve: 0.05, flow: true, delay: 1.1, flowColor: '#A8C7C2', label: 'safe copy down', lx: 0, ly: 18 },
  // Visitors → Production (live traffic)
  { from: [775, 64], to: [780, 161], color: '#009883', w: 2.5, curve: 0, flow: true, delay: 1.0, flowColor: '#2DB9A5', label: 'live traffic', lx: 64, ly: 0 },
  // Production → Replica (sync + standby)
  { from: [725, 249], to: [675, 355], color: '#1A3330', w: 1.5, curve: 0.12, flow: true, delay: 1.6, flowColor: '#A8C7C2', label: 'live sync', lx: -34, ly: 0 },
  // Production → Backups (daily backup)
  { from: [840, 249], to: [905, 355], color: '#009883', w: 2, curve: 0.1, flow: true, delay: 1.7, flowColor: '#2DB9A5', label: 'daily backup', lx: 66, ly: -4 },
]

/* ── Legend ───────────────────────────────────────────────── */
const LEGEND = [
  { color: '#2DB9A5', dashed: false, label: 'Code & deploy flow' },
  { color: '#A8C7C2', dashed: false, label: 'Copy & sync' },
  { color: '#1A3330', dashed: true, label: 'Standby (if the live site fails)' },
]

export default function SlideArchitecture({ isActive }) {
  return (
    <div className="slide-root">
      <div style={{ width: '100%', maxWidth: 1200, padding: '40px 50px 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', color: '#009883', marginBottom: 8 }}
        >
          The architecture
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.06 }}
          style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 40, color: '#F0FAF8', marginBottom: 6 }}
        >
          How it all connects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
          style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 16, color: '#A8C7C2', marginBottom: 14, lineHeight: 1.6 }}
        >
          Code, testing, the live site, and its safety net, working together, end to end.
        </motion.p>

        <div style={{ position: 'relative', width: 1100, height: 460, margin: '0 auto' }}>
          <svg viewBox="0 0 1100 460" fill="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            {LINES.map((ln, i) => {
              const d = curvePath(ln.from, ln.to, ln.curve)
              return (
                <g key={i}>
                  {ln.dashed ? (
                    <motion.path
                      d={d} stroke={ln.color} strokeWidth={ln.w} strokeDasharray="6 8" fill="none"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 0.6 } : {}}
                      transition={{ duration: 0.5, delay: ln.delay, ease: 'easeOut' }}
                    />
                  ) : (
                    <motion.path
                      d={d} stroke={ln.color} strokeWidth={ln.w} fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isActive ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: ln.delay, ease: 'easeOut' }}
                    />
                  )}

                  {ln.flow && (
                    <motion.path
                      d={d} stroke={ln.flowColor || '#009883'} strokeWidth={ln.w}
                      strokeDasharray="8 16" fill="none"
                      initial={{ opacity: 0, strokeDashoffset: 0 }}
                      animate={isActive ? { opacity: 0.85, strokeDashoffset: -24 } : {}}
                      transition={{
                        opacity: { duration: 0.3, delay: ln.delay + 0.6 },
                        strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear', delay: ln.delay + 0.6 },
                      }}
                    />
                  )}

                  {ln.label && (
                    <motion.text
                      x={(ln.from[0] + ln.to[0]) / 2 + (ln.lx || 0)}
                      y={(ln.from[1] + ln.to[1]) / 2 + (ln.ly || 0)}
                      fill="#A8C7C2" fontSize={11} fontFamily="Poppins" fontWeight={500} textAnchor="middle"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: ln.delay + 0.4 }}
                    >
                      {ln.label}
                    </motion.text>
                  )}
                </g>
              )
            })}
          </svg>

          {NODES.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut', delay: n.delay }}
              style={{
                position: 'absolute',
                left: n.cx - n.w / 2,
                top: n.cy - n.h / 2,
                width: n.w,
                height: n.h,
                background: '#0D1A18',
                border: `${n.borderWidth || 1}px ${n.borderStyle || 'solid'} ${n.borderColor}`,
                borderRadius: 10,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '4px 10px', zIndex: 2,
              }}
            >
              {n.badge && (
                <span style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: 600, color: n.badgeColor || '#009883', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>
                  {n.badge}
                </span>
              )}
              <span style={{ fontFamily: 'Poppins', fontSize: n.fontSize || 13.5, fontWeight: n.fontWeight || 500, color: '#F0FAF8', textAlign: 'center', lineHeight: 1.2 }}>
                {n.label}
              </span>
              {n.sub && (
                <span style={{ fontFamily: 'Poppins', fontSize: 10, fontWeight: 400, color: '#A8C7C2', marginTop: 2 }}>
                  {n.sub}
                </span>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ delay: 2.2, duration: 0.4 }}
            style={{ position: 'absolute', bottom: 0, left: 0, display: 'flex', gap: 22, alignItems: 'center' }}
          >
            {LEGEND.map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="24" height="4" viewBox="0 0 24 4">
                  <line x1="0" y1="2" x2="24" y2="2" stroke={item.color} strokeWidth={2} strokeDasharray={item.dashed ? '4 4' : undefined} />
                </svg>
                <span style={{ fontFamily: 'Poppins', fontSize: 10, color: '#A8C7C2' }}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
