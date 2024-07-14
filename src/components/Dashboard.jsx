import React, { useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext'
import Sidebar from './Sidebar';
import BarChart from './charts/BarChart';

const Dashboard = () => {
  const { username } = useContext(LogInContext);

  return (
    <div className='p-5 w-full'>
      <h1 className='text-2xl mb-4 font-bold'>Dashboard</h1>
      <div className='border shadow-sm py-5 px-10 rounded-lg'>
        <h3 className='text-xl'>Welcome back! <span className='font-bold'>{username}</span></h3>
      </div>
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4 w-full'>
        <div className='bg-blue-100 flex justify-between items-center px-5 py-10 rounded-lg shadow-md'>
          <div>
            <h1 className='text-3xl font-bold'>20000</h1>
            <p>Number of users</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>
        <div className='bg-blue-100 flex justify-between items-center px-5 py-10 rounded-lg shadow-md'>
          <div>
            <h1 className='text-3xl font-bold'>20000</h1>
            <p>Number of users</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>
        <div className='bg-blue-100 flex justify-between items-center px-5 py-10 rounded-lg shadow-md'>
          <div>
            <h1 className='text-3xl font-bold'>20000</h1>
            <p>Number of users</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>
        <div className='bg-blue-100 flex justify-between items-center px-5 py-10 rounded-lg shadow-md'>
          <div>
            <h1 className='text-3xl font-bold'>20000</h1>
            <p>Number of users</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard