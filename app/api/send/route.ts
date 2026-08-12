import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

type DemoRequestBody = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  company?: string
  jobTitle?: string
  employees?: string
  message?: string
  captchaToken?: string
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY no está configurada. Reemplaza re_xxxxxxxxx con tu API key real en .env.local.' },
      { status: 500 },
    )
  }

  let body: DemoRequestBody

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Cuerpo de la solicitud inválido.' }, { status: 400 })
  }

  const { firstName, lastName, email, phone, company, jobTitle, employees, message } = body

  if (!firstName || !lastName || !email || !company || !jobTitle || !employees) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 })
  }

  const to = process.env.DEMO_NOTIFICATION_EMAIL ?? 'ignacio.e.guerrero@gmail.com'
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'

  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nueva solicitud de demo — ${company}`,
    html: `
      <h2>Nueva solicitud de demo</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
      <p><strong>Cargo:</strong> ${escapeHtml(jobTitle)}</p>
      <p><strong>Empleados:</strong> ${escapeHtml(employees)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(message || '—').replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, id: data?.id })
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
