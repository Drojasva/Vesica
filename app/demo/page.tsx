import Navbar from '@/components/Navbar'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Solicitar una Demo | Vesica Connected Worker®',
  description: 'Agenda una demo personalizada de la plataforma Vesica Connected Worker para tus operaciones industriales.',
}

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <DemoForm />
      <Footer />
    </>
  )
}
