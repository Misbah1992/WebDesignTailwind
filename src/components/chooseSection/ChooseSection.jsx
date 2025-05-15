import { useState } from 'react'


function ChooseSection() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='h-[95vh] w-[100%] relative flex items-center justify-center'>
       
        <div className='absolute z-10 w-[70%] h-[70%]  flex justify-between'>
            <div className='w-[58%] h-[100%]'>
            <img src="../src/assets/image24.png" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div className='w-[41%] h-[100%]  flex flex-col justify-between'>
           <div className='h-[49%] w-[98%]  border border-gray-300 rounded-sm'>sd</div>
           <div className='h-[49%] w-[98%] border border-gray-300 rounded-sm'>sdsd</div>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default ChooseSection
