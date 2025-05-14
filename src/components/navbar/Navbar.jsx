import { useState } from 'react'


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <img className="absolute h-20" src="../src/assets/Group18.png" />
      <div className="w-full h-10 text-white flex items-center justify-end px-32" style={{
        background: 'linear-gradient(to right, #1181A1, #1181A1, #1181A1, #1A73E8)',
      }}>
        <div className="flex items-center px-4">
          <img src="../src/assets/Vector(5).png" className='h-4 px-2' />
          <div > Mon - Fri : 09am to 11pm </div>
        </div>
        <div className="flex items-center pl-4">
          <img src="../src/assets/Vector(4).png" className='h-4 px-2' />
          <div > 03056789971 </div>
        </div>
        <img src="../src/assets/image22.png" className='h-6 px-8' />
      </div>
      {/* ////////////////////////////////////// */}
      <div className="w-full h-10 bg-white-100 border-b-2 border-gray-50">
        <div className="w-full h-10 text-white flex items-center justify-end px-32" style={{
          background: 'linear-gradient(to right, #1181A1, #1181A1, #1181A1, #1A73E8)',
        }}>
          <div className="flex items-center px-4">

            <div > Mon - Fri : 09am to 11pm </div>
          </div>
          <div className="flex items-center pl-4">

            <div > 03056789971 </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
