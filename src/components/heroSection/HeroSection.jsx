import { useState } from 'react'


function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[90vh] relative'>
        
        <img src="../src/assets/image15.png" className="w-full h-full object-cover "/>
        <div className='absolute bottom-0 w-full h-[20%] bg-red-500 z-10 opacity-75' style={{backgroundColor:"#212529"}}>

        </div>
      
      </div>
    </>
  )
}

export default HeroSection
