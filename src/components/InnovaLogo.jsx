export default function InnovaLogo({ size = 'md' }) {
  const sizes = {
    sm: { height: 20, text: 14, gap: 8 },
    md: { height: 28, text: 18, gap: 10 },
    lg: { height: 40, text: 24, gap: 12 },
  }
  const s = sizes[size]
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: s.gap }}>
      <svg
        height={s.height}
        viewBox="0 0 59 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <path
          d="M5.60518 3.2041L6.56721 0C6.56721 0 20.5603 0.174908 33.3926 5.311C46.7258 10.6459 66.1571 29.2503 55.5668 50.4228C52.7126 56.1313 43.7761 67.0714 23.7246 59.2639C13.3888 55.2329 1.3357 41.7248 0 24.2971C0 24.2971 1.03358 20.2105 3.42672 10.4869C3.42672 10.4869 7.63259 46.7337 31.8979 47.7275C42.1144 48.141 47.004 37.8211 43.8794 28.0816C40.0234 16.0523 30.3475 8.34814 5.60518 3.21204"
          fill="#008871"
        />
      </svg>
      <span style={{ color: '#F0FAF8', fontFamily: 'Poppins', fontWeight: 600, fontSize: s.text, letterSpacing: '0.08em' }}>
        Innova
      </span>
    </div>
  )
}
