import { useState } from 'react'


function SolutionSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] w-[100%] relative flex items-center justify-center'>
        <img src="../src/assets/Image.png" className='w-full h-full object-cover absolute' />
        <div className='h-[80%] w-[65%] flex justify-between'>
          <div className='w-[47%] h-[100%]  relative'>
            <div className='text-right absolute top-0 right-0 z-10'>
              <div className='text-8xl text-yellow-500 font-bold '>2019</div>
              <div className='text-md text-yellow-500 font-bold'>STARTED IN</div>
            </div>
            <img src="../src/assets/image14.png" className='h-[75%] absolute top-[5%]'/>
            <img src="../src/assets/image26.png" className='h-[50%] absolute bottom-[10%] right-0'/>
          </div>
          <div className='w-[47%] h-[100%] flex flex-col justify-center'>
            <div className='text-xs text-gray-700 font-bold'>EFFICIENT SOLUTIONS</div>
            <div className='text-4xl text-gray-700 font-semibold'>Effortless and swift<br />cargo transportation</div>
            <div className='text-sm text-gray-600 font-light my-4'>Integrate Services for online purchase and payment of<br />
              vehicles through auctions and transferring it to our <br />
              warehouses all around the Us, and by then to the designated<br /> location of our customers..</div>
            <div className='text-xs text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 border border-2 border-white hover:border-cyan-700 font-bold w-44 px-8 py-4 mt-[5%] text-center hover:bg-white z-10'>
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SolutionSection
