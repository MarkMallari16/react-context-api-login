import React, { useContext, useEffect } from 'react'
import { LogInContext } from '../contexts/LogInContext'

const Dashboard = () => {
  const { username, setShowDashboard, setLogoutMessage } = useContext(LogInContext);

  const handleLogout = () => {
    setShowDashboard(false);
    setLogoutMessage('You have successfully logged out.');
  };

  return (
    <div className='min-h-screen m-10'>
      <h1 className='text-2xl mb-4'>Dashboard</h1>
      <div className='border shadow-sm py-8 px-10 rounded-lg'>
        <h3 className='text-xl'>Welcome back! <span className='font-bold'>{username}</span></h3>
      </div>
      <button className='bg-red-500 hover:bg-red-600 transition-all ease-in-out text-white px-4 py-2 mt-5 rounded-md' onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard