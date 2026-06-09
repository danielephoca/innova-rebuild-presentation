import { FiArrowRight } from 'react-icons/fi'

const variantStyles = {
  primary: {
    default:  { background: '#009883', color: '#fff', border: 'none' },
    hover:    { background: '#2DB9A5' },
    pressed:  { background: '#007F6D' },
    disabled: { background: '#D9D9D9', color: '#fff', cursor: 'not-allowed' },
  },
  secondary: {
    default:  { background: '#FFFFFF', color: '#009883', border: 'none' },
    hover:    { background: '#D9F2EF' },
    pressed:  { background: '#B0E4DD' },
    disabled: { background: '#D9D9D9', color: '#999', cursor: 'not-allowed' },
  },
  grey: {
    default:  { background: '#999999', color: '#fff', border: 'none' },
    hover:    { background: '#2DB9A5' },
    pressed:  { background: '#009883' },
    disabled: { background: '#D9D9D9', color: '#fff', cursor: 'not-allowed' },
  },
  outline: {
    default:  { background: 'transparent', color: '#009883', border: '1px solid #009883' },
    hover:    { background: '#D9F2EF' },
    pressed:  { background: '#B0E4DD' },
    disabled: { background: '#D9D9D9', color: '#999', border: '1px solid #B3B3B3', cursor: 'not-allowed' },
  },
  outlineGrey: {
    default:  { background: 'transparent', color: '#767676', border: '1px solid #767676' },
    hover:    { background: '#D9F2EF', borderColor: '#009883', color: '#009883' },
    pressed:  { background: '#B0E4DD', borderColor: '#009883' },
    disabled: { background: '#D9D9D9', color: '#999', border: '1px solid #B3B3B3', cursor: 'not-allowed' },
  },
}

const sizeStyles = {
  lg: { padding: '15px 45px', height: 59, fontSize: 16 },
  sm: { padding: '12px 32px', height: 47, fontSize: 16 },
}

export default function InnovaButton({
  variant = 'primary',
  size = 'lg',
  arrow = false,
  disabled = false,
  children,
  onClick,
}) {
  const v = variantStyles[variant]
  const s = sizeStyles[size]
  const base = disabled ? v.disabled : v.default

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        ...base,
        ...s,
        borderRadius: 6,
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: s.fontSize,
        display: 'inline-flex',
        alignItems: 'center',
        gap: arrow ? 12 : 0,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.15s, border-color 0.15s',
        border: base.border ?? 'none',
      }}
      onMouseEnter={e => {
        if (disabled) return
        Object.assign(e.currentTarget.style, v.hover)
      }}
      onMouseLeave={e => {
        if (disabled) return
        Object.assign(e.currentTarget.style, base)
      }}
      onMouseDown={e => {
        if (disabled) return
        Object.assign(e.currentTarget.style, v.pressed)
      }}
      onMouseUp={e => {
        if (disabled) return
        Object.assign(e.currentTarget.style, v.hover)
      }}
    >
      {children}
      {arrow && <FiArrowRight size={18} />}
    </button>
  )
}
