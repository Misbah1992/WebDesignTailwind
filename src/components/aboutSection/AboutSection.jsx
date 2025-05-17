import { useState } from 'react'
import './AboutSection.css'

function AboutSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[60vh] w-[100%] relative flex items-center justify-center' >
        <img src="../src/assets/Group19.png" className='h-[100%] w-[100%]' id="from-right"/>
        <div className='absolute z-10 w-[70%] h-[70%]  flex justify-between' id="from-left">
          <div className='w-[48%] h-[100%]  flex flex-col justify-evenly'>
            <div className='text-3xl text-white font-bold'>About Our Company</div>
            <div id='about-text' className='text-md text-white font-thin pr-[10%]'>Moes Rides initiated its movement during the late last century, where its activities revolved around trading in and trading out vehicles, as well as logistics and meet the expectations of all customers present locally and in the gulf region, synchronizing along with the economic prosperity witnessed by United Arab Emirates which greets diverse nationalities that provides work, residency, and investments. One of our first branches was opened in Sharjah in the year of 2002 to officially start our journey in servicing -American exported- used cars.</div>
          </div>
          <div className='w-[48%] h-[100%]'>
            <img src="../src/assets/image25.png" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
