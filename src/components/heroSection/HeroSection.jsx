import { useState } from 'react'


function HeroSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[90vh] relative'>
        
        <img src="../src/assets/image15.png" className="w-full h-full object-cover "/>
        <div className='absolute bottom-0 w-full h-[20%] bg-red-500 z-10 opacity-75 flex justify-evenly' style={{backgroundColor:"#212529"}}>
           <div className='flex items-center'>
            <img src="../src/assets/Vector(11).png" className='h-8 px-6'/>
            <div>
            <div className='text-lg text-white font-medium'>Ground Freight</div>
            <div className='text-base text-white font-normal'>Safe raod transportation</div>
            </div>
           </div>
           <div className='flex items-center'>
            <img src="../src/assets/Vector(12).png" className='h-8 px-6'/>
            <div>
            <div className='text-lg text-white font-medium'>Ground Freight</div>
            <div className='text-base text-white font-normal'>Safe raod transportation</div>
            </div>
           </div>
           <div className='flex items-center'>
            <img src="../src/assets/Vector(13).png" className='h-8 px-6'/>
            <div>
            <div className='text-lg text-white font-medium'>Ground Freight</div>
            <div className='text-base text-white font-normal'>Safe raod transportation</div>
            </div>
           </div>
           <div className='flex items-center'>
            <img src="../src/assets/Vector(14).png" className='h-8 px-6'/>
            <div>
            <div className='text-lg text-white font-medium'>Ground Freight</div>
            <div className='text-base text-white font-normal'>Safe raod transportation</div>
            </div>
           </div>
        </div>
      
      </div>
    </>
  )
}

export default HeroSection
