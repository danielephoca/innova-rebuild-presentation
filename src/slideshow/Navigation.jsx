import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'

export default function Navigation({ current, total, isFullscreen, onFullscreen }) {
  return (
    <>
      {/* Progress bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 3, background: '#1A3330', zIndex: 50,
      }}>
        <div style={{
          height: '100%',
          width: `${((current + 1) / total) * 100}%`,
          background: '#0C8870',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Top left: company name */}
      <div style={{ position: 'fixed', top: 18, left: 24, zIndex: 50, fontFamily: 'Poppins', fontWeight: 600, fontSize: 16, color: '#F0FAF8' }}>
        Innova
      </div>

      {/* Top right: fullscreen */}
      <button
        onClick={onFullscreen}
        style={{
          position: 'fixed', top: 16, right: 20, zIndex: 50,
          background: 'transparent',
          border: '1px solid #0C8870',
          borderRadius: 6,
          color: '#0C8870',
          padding: '6px 10px',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center',
        }}
      >
        {isFullscreen
          ? <MdFullscreenExit size={20} />
          : <MdFullscreen size={20} />
        }
      </button>

      {/* Bottom right: counter */}
      <div style={{
        position: 'fixed', bottom: 20, right: 24, zIndex: 50,
        fontFamily: 'Poppins', fontSize: 13, color: '#A8C7C2',
      }}>
        {current + 1} / {total}
      </div>
    </>
  )
}
