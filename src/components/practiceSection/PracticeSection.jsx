import { useState } from 'react'


function PracticeSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[65vh] relative '>
        <div className='h-[40%] w-[50%] absolute top-[25%] z-10 ml-[10%] flex flex-col justify-between'>
          <div className='text-xs text-white font-bold'>OUR PRACTICE</div>
          <div className='text-4xl text-white font-bold'>Logistics, shipping and<br />
            freight solutions with<br />
            safety and care</div>
          <div className='text-xs text-white font-bold w-44 px-8 py-4 mt-[5%] text-center bg-cyan-700 hover:bg-transparent hover:text-white border border-2 border-cyan-700 hover:border-white' >
            Our Services
          </div>
        </div>

        <img src="../src/assets/image9.png" className="w-full h-full object-cover" />


      </div>
    </>
  )
}

export default PracticeSection
