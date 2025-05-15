import { useState } from 'react'


function ChooseSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] w-[100%] relative flex items-center justify-center'>
        <img src="../src/assets/Image.png"/>
        <div className='text-2xl text-gray-400 font-bold z-10 absolute top-[10%] flex items-center z-10'>
          <div style={{color:"#343434"}}>Why Choose us</div>
          <img src="../src/assets/Symbol.png" className='h-6 pl-2'/>
        </div>

        <div className='absolute z-10 w-[70%] h-[65%]  flex justify-between'>
          <div className='w-[58%] h-[100%]'>
            <img src="../src/assets/image24.png" className="w-full h-full object-cover rounded-md" />
          </div>
          <div className='w-[41%] h-[100%]  flex flex-col justify-between'>
            <div className='h-[49%] w-[98%]  border border-gray-300 rounded-md flex p-4'>
              <div className='text-xl text-gray-400 font-bold'>01</div>
              <div className='pl-3'>
                <div className='text-lg text-gray-600 font-bold'>Experienced Driver</div>
                <div className='pt-2 text-medium text-gray-400 font-normal'>You are our priority. We Provide our services 24/7. If you
                  are not comfortable to drive a car yourself and looking for
                  renting a car in Karachi. Whether you need to hire a car
                  with driver or without driver in Pakistan for an airport
                  transfer, a trip, a business meeting or a casual travel we
                  will deliver an attractive offer for your chauffeured
                  service.</div>
              </div>
            </div>
            <div className='h-[49%] w-[98%]  border border-gray-300 rounded-md flex p-4'>
              <div className='text-xl text-gray-400 font-bold'>02</div>
              <div className='pl-3'>
                <div className='text-lg text-gray-600 font-bold'>Quick Service </div>
                <div className='pt-2 text-medium text-gray-400 font-normal'>You are our priority. If you are not comfortable with
                   driver and looking for renting a car in  Karachi. Whether you need to hire a car with driver or without 
                   driver in Karachi for an airport transfer, a trip, a business meeting or a casual travel we will deliver 
                   an attractive offer for your chauffeured service.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ChooseSection
