import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    // <div className='flex justify-center items-center mt-10 bg-gray-500 hover:bg-gray-700 text-white py-4 gap-5 px-20'>
    <div className='flex justify-center items-center mt-10 bg-gradient-to-r from-gray-600 to-gray-800 text-white py-4 gap-8 shadow-lg rounded-lg px-20'>
      <Link href='\'> Home</Link>
      <Link href='\about'> About</Link>
      <Link href='\address'> Addres</Link>
      <Link href='\contact'> Contact</Link>

    </div>
  )
}

export default Navbar
