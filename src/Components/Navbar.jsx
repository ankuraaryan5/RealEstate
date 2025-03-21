import React from 'react'
function Navbar() {
 
  return (
    <div className="flex w-full items-center justify-around p-2">
        <h1 className='text-3xl font-bold text-green-500' data-aos="fade-right">Apartment<span className='text-black'>Z</span></h1>
        <button className='bg-green-500 p-2 text-white rounded-full hover:bg-green-600 hover:scale-105' data-aos="fade-left">Contact Us</button>
    </div>
  )
}

export default Navbar