import React from 'react'
import Image from 'next/image';

const Home = () => {
  return (
    <main>
      <div className='flex justify-center text-white py-4'>
        Home Page
      </div>

      <div className='flex justify-center items-center mt-16'>
        <div className='w-1/2 p-4'>
          <Image 
            alt='Home view'
            src='/home.jpg'
            width={600}
            height={600}
            className='rounded-lg shadow-lg'
          />
        </div>

        <div className='w-1/2 p-4'>
        <div className='bg-gray-700 text-white p-10 rounded-lg shadow-lg w-full max-w-2xl'>

        <h1 className='text-2xl font-bold mb-4'>Welcome to My Home</h1>
          <p className='text-lg text-white-600'>
            I live in Abasia Bungalows, a peaceful and beautiful neighborhood in Rahim Yar Khan. It is known for its calm atmosphere, lush greenery, and friendly community.
          </p>
        </div>
          
        </div>
      </div>
    </main>
  )
}

export default Home
