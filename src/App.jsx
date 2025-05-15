import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import ShippingSection from './components/shippingSection/ShippingSection'
import AboutSection from './components/aboutSection/AboutSection'
import ChooseSection from './components/chooseSection/ChooseSection'
import PracticeSection from './components/practiceSection/PracticeSection'
import ContactSection from './components/contactSection/ContactSection'
import SolutionSection from './components/solutionSection/SolutionSection'
import TransportSection from './components/transportSection/TransportSection'
import FormSection from './components/formSection/FormSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ShippingSection/>
      <TransportSection/>
      <SolutionSection/>
      <AboutSection/>
      <ChooseSection/>
      <PracticeSection/>
      <ContactSection/>
      <FormSection/>
    </>
  )
}

export default App
