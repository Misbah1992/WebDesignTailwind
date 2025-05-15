import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'
import ShippingSection from './components/shippingSection/ShippingSection'
import AboutSection from './components/aboutSection/AboutSection'
import ChooseSection from './components/chooseSection/ChooseSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ShippingSection/>
      <AboutSection/>
      <ChooseSection/>
    </>
  )
}

export default App
