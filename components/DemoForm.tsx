'use client'

import { useState, FormEvent } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const employeeOptions = ['1-50', '51-200', '201-500', '501-1.000', '1.000+']

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+56 ',
    company: '',
    jobTitle: '',
    employees: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    if (e.target.name === 'phone') {
      const val = e.target.value
      if (!val.startsWith('+56 ')) return
    }
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!TURNSTILE_SITE_KEY) {
      setCaptchaError('La verificación de seguridad no está configurada. Contacta al administrador.')
      return
    }
    if (!captchaToken) {
      setCaptchaError('Por favor completa la verificación de seguridad.')
      return
    }
    setCaptchaError(null)
    // TODO: Enviar captchaToken al backend para validarlo con Cloudflare
    setSubmitted(true)
  }

  return (
    <section className="demo-section" id="demo">
      <div className="demo-container">
        <div className="demo-info">
          <div className="section-tag">Comienza Ahora</div>
          <h2 className="section-title" style={{ color: 'var(--ink)' }}>
            Solicita una Demo Personalizada
          </h2>
          <p className="demo-description">
            Descubre cómo DevSolution puede transformar tus operaciones de primera línea. Nuestro equipo
            te guiará en una demo adaptada a tu industria y caso de uso.
          </p>
          <ul className="demo-benefits">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Demostración en vivo adaptada a tus operaciones
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Análisis de ROI y hoja de ruta de implementación
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Sesión de preguntas con nuestros expertos industriales
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Sin compromiso — conoce el valor primero
            </li>
          </ul>
        </div>

        <div className="demo-form-wrapper">
          {submitted ? (
            <div className="demo-success">
              <div className="demo-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>¡Gracias!</h3>
              <p>Tu solicitud de demo ha sido recibida. Nuestro equipo se pondrá en contacto dentro de las próximas 24 horas para agendar tu demostración personalizada.</p>
            </div>
          ) : (
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre *</label>
                  <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} placeholder="Juan" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido *</label>
                  <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} placeholder="Pérez" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Corporativo *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="juan@empresa.cl" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+56 9 1234 5678" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa *</label>
                  <input id="company" name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Minera del Pacífico" />
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Cargo *</label>
                  <input id="jobTitle" name="jobTitle" type="text" required value={form.jobTitle} onChange={handleChange} placeholder="Jefe de Operaciones" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="employees">Número de Empleados *</label>
                <select id="employees" name="employees" required value={form.employees} onChange={handleChange}>
                  <option value="">Selecciona un rango</option>
                  {employeeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Cuéntanos sobre tu caso de uso o cualquier consulta específica..." />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                {TURNSTILE_SITE_KEY ? (
                  <Turnstile
                    siteKey={TURNSTILE_SITE_KEY}
                    onSuccess={(token) => {
                      setCaptchaToken(token)
                      setCaptchaError(null)
                    }}
                    onError={() => {
                      setCaptchaToken(null)
                      setCaptchaError('No se pudo completar la verificación de seguridad. Inténtalo de nuevo.')
                    }}
                    onExpire={() => setCaptchaToken(null)}
                  />
                ) : (
                  <p style={{ fontSize: '13px', color: 'var(--accent)', textAlign: 'center' }}>
                    Verificación de seguridad no configurada.
                  </p>
                )}
                {captchaError && (
                  <p style={{ fontSize: '13px', color: '#dc2626', textAlign: 'center' }}>
                    {captchaError}
                  </p>
                )}
              </div>
              <button type="submit" className="btn-demo-submit">Solicitar Demo</button>
              <p className="demo-disclaimer">Al enviar, aceptas nuestra Política de Privacidad. Sin spam, nunca.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
