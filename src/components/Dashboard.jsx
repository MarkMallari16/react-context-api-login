import React, { useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext'
import Sidebar from './Sidebar';

const Dashboard = () => {
  const { username } = useContext(LogInContext);

  return (
    <div className='p-5 w-full'>
      <h1 className='text-2xl mb-4 font-bold'>Dashboard</h1>
      <div className='border shadow-sm py-5 px-10 rounded-lg'>
        <h3 className='text-xl'>Welcome back! <span className='font-bold'>{username}</span></h3>
      </div>
    </div>
  )
}

export default Dashboard