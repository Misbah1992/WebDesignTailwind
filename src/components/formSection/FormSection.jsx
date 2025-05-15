import { useState } from 'react'


function FormSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] w-[100%] flex items-center justify-center'>
        <div className='h-[80%] w-[60%] bg-green-200 flex flex-col justify-evenly'>
          <div className='flex items-center justify-between flex-col h-[15%]'>
            <div className='text-gray-700 text-xl font-bold'>Drop is a line</div>
            <div className=' h-2 w-16 border rounded' style={{ backgroundColor: "#1181A1" }}></div>
            <div className='text-gray-700 text-sm font-normal'>Just over a month into my trip and I wonder how I’ve changed, if at all. Certainly the<br />
              experiences I’ve had and things I’ve seen have shaped me in someway.</div>
          </div>
          <div >
            <div className='h=[100%] w-[48%]'>
            <img src="../src/assets/Group21.png"/>
            </div>
            <div className='h=[100%] w-[48%]'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSection
