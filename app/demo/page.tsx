import Navbar from '@/components/Navbar'
import DemoForm from '@/components/DemoForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Request a Demo | Vesica Connected Worker®',
  description: 'Schedule a personalized demo of Vesica Connected Worker platform for your industrial operations.',
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
