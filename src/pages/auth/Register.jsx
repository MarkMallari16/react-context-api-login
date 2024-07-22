import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center'>
      <div className='h-full w-full flex justify-center items-center '>
        <div className='max-w-md'>
          <h1 className='text-4xl font-medium  text-slate-800'>Sign Up</h1>
          <div className='mt-4'>
            <label htmlFor="username" className='text-lg text-slate-700'>Username: </label>
            <input type="text" id="username" placeholder='Username' className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-lg text-slate-700'>Email Address: </label>
            <input type="text" placeholder='Password' className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-lg text-slate-700'>Password: </label>
            <input type="password" placeholder='Password' className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='text-lg text-slate-700'>Confirm Password: </label>
            <input type="password" placeholder='Password' className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
          </div>
          <div>
            <button className='text-white bg-blue-500 hover:bg-blue-600 w-full mt-6 transition-all ease-in-out p-3 rounded-lg' >
              Sign Up
            </button>
            <div className='text-center mt-2 text-gray-800'>
              <Link to='/login'>Already have an account? Log in</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full  h-full bg-blue-500 hidden lg:flex items-center justify-center'>
        <div className='text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-full">
            <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
            <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
          </svg>
          <p className='text-2xl text-center font-medium'>Fast, Easy, Convenient</p>
        </div>
      </div>
    </div>
  )
}

export default Register