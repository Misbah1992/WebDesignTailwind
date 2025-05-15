import { useState } from 'react'


function ContactSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[70vh] w-[100%] bg-white flex items-center justify-center'>
        <div className='h-[40vh] w-[100%] relative flex items-center justify-center'>
          <img src="../src/assets/Group17.png" className='h-[100%] w-[100%]' />
          <div className='absolute z-10 w-[90%] h-[100%]  flex justify-between items-end'>
            <div></div>
            <div></div>
            <img src="../src/assets/picture.png" className='z-10 h-[115%]' />
          </div>
        </div>
        <div className='absolute flex flex-col items-center'> 
          <div className='text-xs text-white font-bold'>LOGISTICS EXPERTS</div>
          <div className='text-4xl text-white font-light'>Call us now</div>
          <div className='text-4xl text-white font-bold'>+1 800 555 24 74</div>
          <div className='text-xs text-gray-700 bg-white font-bold w-44 px-8 py-4 mt-[5%] text-center'>
            Contact Us
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
