'use client'

import { Turnstile } from '@marsidev/react-turnstile'
import { ChangeEvent, FormEvent, FocusEvent, useState } from 'react'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const employeeOptions = ['1-50', '51-200', '201-500', '501-1.000', '1.000+']
const genericEmailDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'live.com']
const namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ' -]+$/

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  employees: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>
type TouchedFields = Partial<Record<keyof FormState, boolean>>

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '+56 ',
  company: '',
  jobTitle: '',
  employees: '',
  message: '',
}

function normalizeSpaces(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function normalizeEmail(value: string) {
  return value.replace(/\s+/g, '').toLowerCase()
}

function formatChilePhone(value: string) {
  const digits = value.replace(/\D/g, '')
  const localDigits = digits.startsWith('56') ? digits.slice(2) : digits
  const limited = localDigits.slice(0, 9)

  if (!limited) return '+56 '
  if (limited.length <= 1) return `+56 ${limited}`
  if (limited.length <= 5) return `+56 ${limited.slice(0, 1)} ${limited.slice(1)}`
  return `+56 ${limited.slice(0, 1)} ${limited.slice(1, 5)} ${limited.slice(5)}`
}

function countPhoneDigits(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.startsWith('56') ? digits.slice(2).length : digits.length
}

function normalizeForm(form: FormState): FormState {
  return {
    firstName: normalizeSpaces(form.firstName),
    lastName: normalizeSpaces(form.lastName),
    email: normalizeEmail(form.email),
    phone: formatChilePhone(form.phone),
    company: normalizeSpaces(form.company),
    jobTitle: normalizeSpaces(form.jobTitle),
    employees: form.employees,
    message: normalizeSpaces(form.message),
  }
}

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {}
  const normalized = normalizeForm(form)
  const emailDomain = normalized.email.split('@')[1]

  if (normalized.firstName.length < 2 || !namePattern.test(normalized.firstName)) {
    errors.firstName = 'Ingresa un nombre válido.'
  }

  if (normalized.lastName.length < 2 || !namePattern.test(normalized.lastName)) {
    errors.lastName = 'Ingresa un apellido válido.'
  }

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalized.email)) {
    errors.email = 'Ingresa un correo válido.'
  } else if (emailDomain && genericEmailDomains.includes(emailDomain)) {
    errors.email = 'Usa un correo corporativo.'
  }

  const phoneDigits = countPhoneDigits(normalized.phone)
  if (phoneDigits > 0 && phoneDigits !== 9) {
    errors.phone = 'Ingresa 9 dígitos después de +56.'
  }

  if (normalized.company.length < 2) {
    errors.company = 'Ingresa el nombre de tu empresa.'
  }

  if (normalized.jobTitle.length < 2) {
    errors.jobTitle = 'Ingresa tu cargo.'
  }

  if (!normalized.employees) {
    errors.employees = 'Selecciona un rango.'
  }

  if (normalized.message.length > 500) {
    errors.message = 'Máximo 500 caracteres.'
  }

  return errors
}

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaError, setCaptchaError] = useState<string | null>(null)
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [touched, setTouched] = useState<TouchedFields>({})
  const [form, setForm] = useState<FormState>(initialForm)

  const errors = validateForm(form)
  const isFormValid = Object.keys(errors).length === 0
  const canSubmit = isFormValid && Boolean(TURNSTILE_SITE_KEY) && Boolean(captchaToken) && !submitting

  function shouldShowError(field: keyof FormState) {
    return Boolean(errors[field] && (touched[field] || submitAttempted))
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    const field = name as keyof FormState

    setCaptchaError(null)
    setForm((current) => ({
      ...current,
      [field]: field === 'phone' ? formatChilePhone(value) : field === 'email' ? normalizeEmail(value) : value,
    }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const field = e.target.name as keyof FormState
    setTouched((current) => ({ ...current, [field]: true }))
    setForm((current) => ({ ...current, [field]: normalizeForm(current)[field] }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitAttempted(true)

    const normalized = normalizeForm(form)
    const nextErrors = validateForm(normalized)
    setForm(normalized)

    if (Object.keys(nextErrors).length > 0) {
      setCaptchaError('Revisa los campos marcados antes de enviar.')
      return
    }

    if (!TURNSTILE_SITE_KEY) {
      setCaptchaError('La verificación de seguridad no está configurada. Contacta al administrador.')
      return
    }

    if (!captchaToken) {
      setCaptchaError('Completa la verificación de seguridad para continuar.')
      return
    }

    setCaptchaError(null)
    setSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...normalized, captchaToken }),
      })

      const result = await response.json()

      if (!response.ok) {
        setCaptchaError(result.error || 'No se pudo enviar la solicitud. Inténtalo de nuevo.')
        return
      }

      setSubmitted(true)
    } catch {
      setCaptchaError('No se pudo enviar la solicitud. Inténtalo de nuevo.')
    } finally {
      setSubmitting(false)
    }
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
            <form className="demo-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre *</label>
                  <input id="firstName" name="firstName" type="text" required minLength={2} maxLength={40} autoComplete="given-name" value={form.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Juan" aria-invalid={shouldShowError('firstName')} />
                  {shouldShowError('firstName') && <span className="field-error">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido *</label>
                  <input id="lastName" name="lastName" type="text" required minLength={2} maxLength={50} autoComplete="family-name" value={form.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Pérez" aria-invalid={shouldShowError('lastName')} />
                  {shouldShowError('lastName') && <span className="field-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Corporativo *</label>
                  <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" inputMode="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="juan@empresa.cl" aria-invalid={shouldShowError('email')} />
                  {shouldShowError('email') && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="numeric" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+56 9 1234 5678" aria-invalid={shouldShowError('phone')} />
                  {shouldShowError('phone') && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Empresa *</label>
                  <input id="company" name="company" type="text" required minLength={2} maxLength={80} autoComplete="organization" value={form.company} onChange={handleChange} onBlur={handleBlur} placeholder="Agrosuper" aria-invalid={shouldShowError('company')} />
                  {shouldShowError('company') && <span className="field-error">{errors.company}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Cargo *</label>
                  <input id="jobTitle" name="jobTitle" type="text" required minLength={2} maxLength={80} autoComplete="organization-title" value={form.jobTitle} onChange={handleChange} onBlur={handleBlur} placeholder="Jefe de Operaciones" aria-invalid={shouldShowError('jobTitle')} />
                  {shouldShowError('jobTitle') && <span className="field-error">{errors.jobTitle}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="employees">Número de Empleados *</label>
                <select id="employees" name="employees" required value={form.employees} onChange={handleChange} onBlur={handleBlur} aria-invalid={shouldShowError('employees')}>
                  <option value="">Selecciona un rango</option>
                  {employeeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {shouldShowError('employees') && <span className="field-error">{errors.employees}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                  <textarea id="message" name="message" rows={4} maxLength={500} value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="Cuéntanos sobre tu caso de uso o cualquier consulta específica..." aria-invalid={shouldShowError('message')} />
                  {shouldShowError('message') && <span className="field-error">{errors.message}</span>}
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
                  <p style={{ fontSize: '13px', color: 'var(--danger)', textAlign: 'center' }}>
                    {captchaError}
                  </p>
                )}
              </div>
              <button type="submit" className="btn-demo-submit" disabled={!canSubmit}>
                {submitting ? 'Enviando...' : 'Solicitar Demo'}
              </button>
              <p className="demo-disclaimer">Al enviar, aceptas nuestra Política de Privacidad. Sin spam, nunca.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
