'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const solutions = [
  { label: 'Maintenance', href: '/solutions/maintenance' },
  { label: 'Production', href: '/solutions/production' },
]

const navLinks = [
  { label: 'Industries', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
]

export default function Navbar() {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!solutionsOpen) return

    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [solutionsOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  function closeMobile() {
    setMobileOpen(false)
    setMobileSolutionsOpen(false)
  }

  function toggleSolutions(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    setSolutionsOpen((open) => !open)
  }

  return (
    <nav>
      <Link href="/" className="nav-logo" onClick={closeMobile}>
        <div className="nav-logo-icon">V</div>
        <span className="nav-logo-text">Vesi<span>ca</span></span>
      </Link>

      <ul className="nav-links">
        <li><Link href="/product">Product</Link></li>
        <li
          ref={dropdownRef}
          className={`nav-dropdown-parent ${solutionsOpen ? 'is-open' : ''}`}
        >
          <button
            type="button"
            className="nav-dropdown-trigger"
            onClick={toggleSolutions}
            aria-expanded={solutionsOpen}
            aria-haspopup="true"
          >
            Solutions
            <ChevronDown size={14} className={`nav-chevron ${solutionsOpen ? 'nav-chevron-open' : ''}`} />
          </button>
          {solutionsOpen && (
            <div className="nav-dropdown">
              <div className="nav-dropdown-menu">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="nav-dropdown-item"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
        {navLinks.map((link) => (
          <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
        ))}
      </ul>

      <div className="nav-cta">
        <Link href="/demo" className="btn-primary">Request Demo</Link>
        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-panel">
          <Link href="/product" className="nav-mobile-link" onClick={closeMobile}>Product</Link>
          <div className="nav-mobile-group">
            <button
              type="button"
              className="nav-mobile-link nav-mobile-dropdown-trigger"
              onClick={() => setMobileSolutionsOpen((open) => !open)}
              aria-expanded={mobileSolutionsOpen}
            >
              Solutions
              <ChevronDown size={16} className={`nav-chevron ${mobileSolutionsOpen ? 'nav-chevron-open' : ''}`} />
            </button>
            {mobileSolutionsOpen && (
              <div className="nav-mobile-submenu">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="nav-mobile-sublink"
                    onClick={closeMobile}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-mobile-link" onClick={closeMobile}>
              {link.label}
            </Link>
          ))}
          <Link href="/demo" className="btn-primary nav-mobile-cta" onClick={closeMobile}>
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  )
}
