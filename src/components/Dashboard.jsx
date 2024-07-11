import React, { useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext'

const Dashboard = () => {
  const { username } = useContext(LogInContext);
  
  return (
    <div className='min-h-screen m-10'>
      <h1 className='text-2xl mb-4'>Dashboard</h1>
      <div className='shadow-md py-8 px-10 rounded-lg'>
        <h3 className='text-xl'>Welcome back! <span className='font-bold'>{username}</span></h3>
      </div>
    </div>
  )
}

export default Dashboard