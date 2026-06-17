import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from '../slides'
import Navigation from './Navigation'
import Overview from './Overview'
import PresenterNotes from './PresenterNotes'

const ZOOM_MIN = 0.5
const ZOOM_MAX = 3
const ZOOM_STEP = 0.1

export default function Slideshow() {
  const [current, setCurrent]                 = useState(0)
  const [visited, setVisited]                 = useState(new Set([0]))
  const [showOverview, setShowOverview]       = useState(false)
  const [showNotes, setShowNotes]             = useState(false)
  const [isFullscreen, setIsFullscreen]       = useState(false)
  const [zoom, setZoom]                       = useState(1)
  const [viewport, setViewport]               = useState({
    w: typeof window !== 'undefined' ? window.innerWidth  : 1440,
    h: typeof window !== 'undefined' ? window.innerHeight : 810,
  })
  const [showZoomHint, setShowZoomHint]       = useState(false)

  const zoomHintTimeout = useRef(null)
  const total = slides.length

  const flashZoomHint = useCallback(() => {
    setShowZoomHint(true)
    if (zoomHintTimeout.current) clearTimeout(zoomHintTimeout.current)
    zoomHintTimeout.current = setTimeout(() => setShowZoomHint(false), 900)
  }, [])

  const goTo = useCallback((index) => {
    setCurrent(index)
    setVisited(prev => new Set([...prev, index]))
    setShowOverview(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const next = useCallback(() => {
    if (current < total - 1) goTo(current + 1)
  }, [current, total, goTo])

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1)
  }, [current, goTo])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  const zoomIn    = useCallback(() => { setZoom(z => Math.min(+(z + ZOOM_STEP).toFixed(2), ZOOM_MAX)); flashZoomHint() }, [flashZoomHint])
  const zoomOut   = useCallback(() => { setZoom(z => Math.max(+(z - ZOOM_STEP).toFixed(2), ZOOM_MIN)); flashZoomHint() }, [flashZoomHint])
  const zoomReset = useCallback(() => { setZoom(1); flashZoomHint() }, [flashZoomHint])

  useEffect(() => {
    const handleKey = (e) => {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft')  { e.preventDefault(); prev() }
      else if (e.key === 'o' || e.key === 'O') setShowOverview(v => !v)
      else if (e.key === 'p' || e.key === 'P') setShowNotes(v => !v)
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      else if (e.key === '+' || e.key === '=') { e.preventDefault(); zoomIn() }
      else if (e.key === '-' || e.key === '_') { e.preventDefault(); zoomOut() }
      else if (e.key === '0') { e.preventDefault(); zoomReset() }
      else if (e.key === 'Escape') { setShowOverview(false); setShowNotes(false) }
    }

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
        if (e.deltaY < 0) zoomIn()
        else zoomOut()
      }
    }

    window.addEventListener('keydown', handleKey)
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [next, prev, toggleFullscreen, zoomIn, zoomOut, zoomReset])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight })
    }
    window.addEventListener('resize', updateViewport)
    document.addEventListener('fullscreenchange', updateViewport)
    return () => {
      window.removeEventListener('resize', updateViewport)
      document.removeEventListener('fullscreenchange', updateViewport)
    }
  }, [])

  const CurrentSlide = slides[current]

  // The slide canvas renders at viewport size, then is scaled by zoom.
  // The outer wrapper takes the scaled dimensions so the page scrolls naturally.
  const baseW    = viewport.w
  const baseH    = viewport.h
  const scaledW  = baseW * zoom
  const scaledH  = baseH * zoom

  return (
    <div style={{
      minWidth: '100vw',
      minHeight: '100vh',
      background: '#060F0E',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <div style={{
        width: scaledW,
        height: scaledH,
        position: 'relative',
        flexShrink: 0,
      }}>
        <div style={{
          width: baseW,
          height: baseH,
          transform: `scale(${zoom})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: 0,
        }}>
          <Navigation
            current={current}
            total={total}
            isFullscreen={isFullscreen}
            onFullscreen={toggleFullscreen}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: '100%', height: '100%' }}
            >
              <CurrentSlide isActive={true} />
            </motion.div>
          </AnimatePresence>

          <Overview
            isOpen={showOverview}
            currentIndex={current}
            onSelect={goTo}
          />

          <PresenterNotes
            isOpen={showNotes}
            currentIndex={current}
            onClose={() => setShowNotes(false)}
          />
        </div>
      </div>

      <AnimatePresence>
        {showZoomHint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#0D1A18',
              border: '1px solid #0C8870',
              borderRadius: 8,
              padding: '10px 20px',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: 14,
              color: '#F0FAF8',
              zIndex: 9999,
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.45)',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ color: '#2DB9A5' }}>Zoom</span>
            <span>{Math.round(zoom * 100)}%</span>
            {zoom !== 1 && (
              <span style={{ fontSize: 11, color: '#A8C7C2', fontWeight: 400 }}>
                press 0 to reset
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
