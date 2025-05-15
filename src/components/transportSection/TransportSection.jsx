import { useState } from 'react'


function TransportSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] relative flex items-center justify-center'>

        <img src="../src/assets/group19.png" className="w-full h-full object-cover" />
        <div className='bg-wjite absolute z-10 h-[85%] w-[70%] flex flex-col items-center justify-between'>
          <div className='text-center'>
            <div className='text-xs text-white font-bold'>LOGISTICS EXPERTS</div>
            <div className='text-4xl text-white font-semibold'>Transport solutions</div>
            <div className='text-sm text-white font-light my-4'>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde<br />
              omnis iste perspiciatis ut perspiciatis.</div>
          </div>
          <div>sd</div>
          <div className='flex w-[100%] justify-between items-center'>
            <div className=' flex items-center justify-center'>
              <div className='text-white text-lg font-semibold absolute'>Projects</div>
              <div className='text-gray-800 text-9xl font-semibold'>98</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div className='text-white text-lg font-semibold absolute'>People</div>
              <div className='text-gray-800 text-9xl font-semibold'>65</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div className='text-white text-lg font-semibold absolute'>Years</div>
              <div className='text-gray-800 text-9xl font-semibold'>10</div>
            </div>
            <div className='h-12 w-1 bg-gray-800'></div>
            <div className=' flex items-center justify-center'>
              <div className='text-white text-lg font-semibold absolute'>Offices</div>
              <div className='text-gray-800 text-9xl font-semibold'>15</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransportSection
