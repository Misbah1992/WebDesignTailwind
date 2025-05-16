import { useState } from 'react'
import "./FooterSection.css"

function FooterSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[35vh] w-full relative flex items-center justify-center'>

        <img src="../src/assets/Group20.png" className="w-full h-full object-cover" />
        <div className='absolute w-[60%] h-auto  flex justify-between'>

          <div>
            <div className='font-bold text-white text-lg mb-5'>Hello</div>
            <div className='font-light text-white text-xs'>Sed ut perspiciatis unde omnis<br />
              iste natus ut perspic iatis.</div>
          </div>
          <div>
            <div className='font-bold text-white text-lg mb-5'>Office</div>
            <div className='font-light text-white text-xs mb-4'>Germany —<br />
              785 15h Street, Office 478,<br />
              Berlin, De 81566</div>
            <div className='font-light text-white text-xs mb-4'>info@email.com</div>
            <div className='font-medium text-white text-md'>+1 840 841 25 69</div>
          </div>
          <div>
            <div className='font-bold text-white text-lg mb-5'>Links</div>
            <div className='font-light text-white text-xs mb-4'>Home</div>
            <div className='font-light text-white text-xs mb-4'>About Us</div>
            <div className='font-light text-white text-xs mb-4'>Contact</div>
            <div className='font-light text-white text-xs'>Service</div>


          </div>
          <div>
            <div className='font-bold text-white text-lg mb-5'>Get in Touch</div>
            <div className='flex'>
              <div className="flex items-center justify-center mx-1" style={{ border: "1px solid white", height: "2rem", width: "2rem", borderRadius: "50%" }}>
                <img src="../src/assets/Vector(10).png" className='h-4' />
              </div>
              <div className="flex items-center justify-center mx-1" style={{ border: "1px solid white", height: "2rem", width: "2rem", borderRadius: "50%" }}>
                <img src="../src/assets/Vector(9).png" className='h-4' />
              </div>
              <div className="flex items-center justify-center mx-1" style={{ border: "1px solid white", height: "2rem", width: "2rem", borderRadius: "50%" }}>
                <img src="../src/assets/Vector(8).png" className='h-4' />
              </div>
              <div className="flex items-center justify-center mx-1" style={{ border: "1px solid white", height: "2rem", width: "2rem", borderRadius: "50%" }}>
                <img src="../src/assets/Vector(7).png" className='h-4' />
              </div>
            </div>
          </div>

        </div>
        <img src="../src/assets/image22.png"  className="truckimg"/>
      </div>
    </>
  )
}

export default FooterSection
