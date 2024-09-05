import React from 'react'

const ContactPage = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='bg-gray-700 text-white p-10 rounded-lg shadow-lg w-full max-w-lg'>
        <h1 className='text-3xl font-semibold text-center mb-6'>Contact Us</h1>
        <form className='space-y-5'>
          <div>
            <label className='block text-sm font-medium mb-2'>Name</label>
            <input
              type='text'
              className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black'
              placeholder='Enter your name'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>Email</label>
            <input
              type='email'
              className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-2'>Message</label>
            <textarea
              className='w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black'
              placeholder='Enter your message'
              
            ></textarea>
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
