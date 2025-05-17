import { useState } from 'react'
import "./ShippingSection.css"

function ShippingSection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[95vh] w-[100%] bg-white flex items-center justify-center'>
         <img src="../src/assets/Image.png" className='w-full h-full object-cover absolute'/>
        <div className='h-[75%] w-[75%] bg-gray-100 flex items-center justify-evenly z-10'>
          <div className='h-[95%] w-[47.5%] bg-red-100 relative'>
            <img src="../src/assets/image23.png " className='w-full h-full object-cover' />
          </div>
          <div className='h-[95%] w-[47.5%] bg-white p-8'>
            <div className='text-xl text-gray-600 font-bold'>SHIPPING</div>
            <div id="ship-content" className='md:text-2xs text-gray-400 font-light pt-4'>MOES RIDES has firmly embraced the principles of competitiveness, excellence, and innovation in the dynamic and ever-evolving field of automotive logistics. Our commitment is deeply rooted in delivering comprehensive, reliable, and efficient car logistics services that cover a wide spectrum of needs across most of the Gulf Cooperation Council (GCC) countries. We specialize in facilitating the seamless movement of all types of vehicles—from standard passenger cars to high-value and specialty vehicles—throughout the region, ensuring timely delivery, safety, and operational precision at every stage of the transportation process.<br/><br/>

              In addition to our robust regional logistics capabilities, MOES RIDES provides specialized services for the importation and customs clearance of vehicles arriving from international markets into the United Arab Emirates. Our expertise in international trade compliance, documentation, customs regulations, and vehicle inspection standards ensures that all imported cars are processed swiftly, securely, and in full accordance with UAE and regional guidelines. We maintain strategic partnerships with ports, shipping agents, and customs authorities to streamline procedures and minimize delays, offering our customers a stress-free experience from port of entry to final destination.<br/><br/>

              We are proud to offer our clients a comprehensive suite of end-to-end logistical solutions tailored to meet the diverse and growing demands of both individual and corporate customers. Our team of experienced professionals works tirelessly to uphold the highest levels of service quality, operational transparency, and cost efficiency. By leveraging advanced technologies, industry best practices, and a customer-first philosophy, we aim to deliver maximum value through customized solutions that optimize transport times, reduce overheads, and enhance supply chain visibility.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShippingSection
