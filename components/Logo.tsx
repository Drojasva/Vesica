'use client'

interface LogoProps {
  variant?: 'dark' | 'light'
  showIcon?: boolean
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({
  variant = 'dark',
  showIcon = true,
  showTagline = false,
  size = 'sm',
}: LogoProps) {
  const isLight = variant === 'light'
  const ink = isLight ? '#ffffff' : '#0a0a0a'
  const muted = isLight ? 'rgba(255,255,255,0.55)' : '#6b6b6b'
  const markSize = size === 'lg' ? 56 : size === 'md' ? 40 : 32
  const titleSize = size === 'lg' ? '22px' : size === 'md' ? '17px' : '15px'
  const tagSize = size === 'lg' ? '10px' : '8px'

  return (
    <div
      className="logo"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: showTagline ? '12px' : '10px',
      }}
    >
      {showIcon && (
        <svg
          className="logo-mark"
          width={markSize}
          height={markSize}
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
          style={{ flexShrink: 0, color: ink }}
        >
          <path
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M14 12h24c10 0 16 6 16 16s-6 16-16 16H26"
          />
          <path
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            d="M50 52H26c-10 0-16-6-16-16s6-16 16-16h12"
          />
          <path
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="square"
            d="M26 28h16M22 36h16"
          />
        </svg>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: showTagline ? '2px' : 0 }}>
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
        {showTagline && (
          <>
            <span
              style={{
                fontSize: tagSize,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: muted,
                whiteSpace: 'nowrap',
              }}
            >
              Development Solutions
            </span>
            <span
              aria-hidden="true"
              style={{
                width: size === 'lg' ? '28px' : '18px',
                height: '2px',
                background: 'var(--accent)',
                marginTop: '2px',
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}
