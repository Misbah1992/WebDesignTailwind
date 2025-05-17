import { useState } from 'react'
import MapSection from '../mapSection/MapSection'
import "./FormSection.css"


function FormSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="form-main" className='h-[80vh] w-[100%] flex items-center justify-center '>
        <div id="form-main" className='h-[80%] w-[60%]  flex flex-col justify-evenly'>
          <div className='flex items-center justify-between flex-col h-[15%]'>
            <div id="form-title" className='text-gray-700 text-xl font-bold'>Drop us a line</div>
            <div className='h-2 w-16 border rounded' style={{ backgroundColor: "#1181A1" }}></div>
            <div id="form-text" className='text-gray-700 text-sm font-normal'>Just over a month into my trip and I wonder how I’ve changed, if at all. Certainly the<br />
              experiences I’ve had and things I’ve seen have shaped me in someway.</div>
          </div>
          <div className='flex'>
            <div className='h=[100%] w-[48%]'>
              {/* <img src="../src/assets/Group21.png" /> */}
              <MapSection/>
            </div>
            <div className='h=[100%] w-[48%] flex flex-col justify-between items-center'>
              <div className='flex flex-col justify-between w-[100%] h-[80%] px-4'>
                <input id="form-input"/>
                <input id="form-input"/>
                <input id="form-input"/>
                <textarea id="form-textarea"/>
              </div>
              <div id="form-btn" className='text-xs text-white text-gray-700 border border-2 border-cyan-700 font-bold w-44 px-8 py-4 mt-[5%] text-center bg-cyan-700 hover:bg-transparent hover:text-cyan-700'>
                SEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormSection
