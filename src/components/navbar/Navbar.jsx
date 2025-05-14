import { useState } from 'react'


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-10 bg-gradient-to-r from-blue-500 to-purple-600">navbar</div>
<div className="w-full h-10 bg-white-100 to-purple-600"></div>
    </>
  )
}

export default Navbar
