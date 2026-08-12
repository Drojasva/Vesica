'use client'

interface LogoProps {
  variant?: 'dark' | 'light'
  showIcon?: boolean
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  /** Full stacked brand lockup image (hero/footer). */
  lockup?: boolean
}

export default function Logo({
  variant = 'dark',
  showIcon = true,
  showTagline = false,
  size = 'sm',
  lockup = false,
}: LogoProps) {
  const isLight = variant === 'light'
  const ink = isLight ? '#ffffff' : '#0a0a0a'
  const markHeight = size === 'lg' ? 40 : size === 'md' ? 32 : 28
  const titleSize = size === 'lg' ? '22px' : size === 'md' ? '17px' : '15px'
  const lockupHeight = size === 'lg' ? 220 : size === 'md' ? 160 : 120

  const markSrc = isLight ? '/brand/logo-mark-on-dark.png' : '/brand/logo-mark-on-light.png'
  const lockupSrc = isLight ? '/brand/logo-lockup-on-dark.png' : '/brand/logo-lockup-on-light.png'

  if (lockup || showTagline) {
    return (
      <img
        src={lockupSrc}
        alt="Dev Solution"
        className="logo-lockup"
        style={{
          height: lockupHeight,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    )
  }

  return (
    <div
      className="logo"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {showIcon && (
        <img
          src={markSrc}
          alt=""
          aria-hidden="true"
          className="logo-mark"
          style={{
            height: markHeight,
            width: 'auto',
            objectFit: 'contain',
            flexShrink: 0,
            display: 'block',
          }}
        />
      )}
      <span
        className="logo-text"
        style={{
          fontWeight: 700,
          fontSize: titleSize,
          color: ink,
          letterSpacing: '0.18em',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          lineHeight: 1.1,
        }}
      >
        Dev Solution
      </span>
    </div>
  )
}
