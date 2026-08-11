import Navbar from '@/components/Navbar'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Solicitar una Demo',
  description: 'Agenda una demo personalizada con DevSolution SpA y descubre cómo digitalizar tus operaciones industriales.',
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
