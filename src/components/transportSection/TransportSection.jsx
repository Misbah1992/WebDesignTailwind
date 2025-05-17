import { useState } from 'react'
import Carousel from '../carousel/Carousel'
import "./TransportSection.css"


function TransportSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] relative flex items-center justify-center'>

        <img src="../src/assets/group19.png" className="w-full h-full object-cover" />
        <div className='bg-wjite absolute z-10 h-[85%] w-[70%] flex flex-col items-center justify-between'>
          <div className='text-center'>
            <div className='text-xs text-white font-bold'>LOGISTICS EXPERTS</div>
            <div className='2xl:text-4xl xl:text-3xl md:text-2xl text-white font-semibold'>Transport solutions</div>
            <div className='text-sm text-white font-light my-4'>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde<br />
              omnis iste perspiciatis ut perspiciatis.</div>
          </div>
          <div className='w-[100%] '>
           <Carousel/>
            
          </div>
          <div className='flex w-[100%] justify-between items-center'>
            <div className=' flex items-center justify-center'>
              <div id='number-text' className='text-white 2xl:text-lg xl:text-md font-semibold absolute'>Projects</div>
              <div id='number-style' className='text-gray-800 2xl:text-9xl xl:text-8xl lg:text-7xl  font-semibold'>98</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div id='number-text' className='text-white text-lg xl:text-md font-semibold absolute'>People</div>
              <div id='number-style' className='text-gray-800 2xl:text-9xl xl:text-8xl lg:text-7xl font-semibold'>65</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div id='number-text' className='text-white text-lg xl:text-md font-semibold absolute'>Years</div>
              <div id='number-style' className='text-gray-800 2xl:text-9xl xl:text-8xl lg:text-7xl font-semibold'>10</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div id='number-text' className='text-white text-lg xl:text-md font-semibold absolute'>Offices</div>
              <div id='number-style' className='text-gray-800 2xl:text-9xl xl:text-8xl lg:text-7xl font-semibold'>15</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransportSection
