import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  )
}

export default App
