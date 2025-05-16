import { useState } from 'react'


function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] relative'>
        <div className='h-[35%] w-[50%] absolute top-[15%] z-10 ml-[10%]'>
          <div className='text-xs text-white font-bold'>EFFICEINT TRANSPORT LOGISTICS</div>
          <div className='2xl:text-6xl xl:text-5xl lg:text-4xl text-white font-bold'>Innovative Logistics<br />
            For Transportation</div>
          <div className='text-xs hover:bg-cyan-700 text-white hover:border-cyan-700 font-bold border border-white w-44 px-8 py-4 mt-[5%] text-center' >
            Explore Options
          </div>
        </div>

        <img src="../src/assets/image15.png" className="w-full h-full object-cover" />
        <div className='absolute bottom-0 w-full h-[12%] bg-red-500 z-10 opacity-75 flex justify-evenly items-center' style={{ backgroundColor: "#212529" }}>
          <div className='flex items-center'>
            <img src="../src/assets/Vector(11).png" className='h-8 px-6'/>
            <div>
              <div className='text-base text-white font-medium'>Ground Freight</div>
              <div className='text-sm text-white font-normal'>Safe raod transportation</div>
            </div>
          </div>
          <div className='h-[60%] w-1 bg-gray-400'></div>
          <div className='flex items-center'>
            <img src="../src/assets/Vector(12).png" className='h-8 px-6' />
            <div>
              <div className='text-base text-white font-medium'>Air Cargo</div>
              <div className='text-sm text-white font-normal'>Rapid global delivery</div>
            </div>

          </div>
          <div className='h-[60%] w-1 bg-gray-400'></div>
          <div className='flex items-center'>
            <img src="../src/assets/Vector(13).png" className='h-8 px-6' />
            <div>
              <div className='text-base text-white font-medium'>Ocean Freight</div>
              <div className='text-sm text-white font-normal'>Effective sea shipping</div>
            </div>
          </div>
          <div className='h-[60%] w-1 bg-gray-400'></div>
          <div className='flex items-center'>
            <img src="../src/assets/Vector(14).png" className='h-8 px-6' />
            <div>
              <div className='text-base text-white font-medium'>Express Delivery</div>
              <div className='text-sm text-white font-normal'>Reliable and fast service</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HeroSection
