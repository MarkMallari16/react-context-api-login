import React, { useContext } from 'react'
import { LogInContext } from '../contexts/LogInContext'
import { AiOutlineProduct } from "react-icons/ai";
const Dashboard = () => {
  const { username } = useContext(LogInContext);
  const dashboardOverviews = [
    {
      value: 2000,
      text: "Number of orders",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    },
    {
      value: 20000,
      text: "Number of products",
      icon: <AiOutlineProduct className='size-10' />
    },
    {
      value: 2000,
      text: "Total Revenue",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    },
    {
      value: 200,
      text: "Number of users",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    },
  ]
  return (
    <div className='p-5 w-full'>
      <h1 className='text-2xl mb-4 font-bold'>Dashboard</h1>
      <div className='border shadow-sm py-5 px-6 rounded-lg bg-white'>
        <h3 className='text-xl text-slate-900'>Welcome back! <span className='font-bold'>{username}</span></h3>
      </div>
      <div className='mt-6 grid grid-cols-1 lg:grid-cols-4 gap-4 w-full'>
        {dashboardOverviews.map((overview, index) => (
          <div key={index} className='bg-white flex justify-between items-center px-5 py-10 rounded-lg shadow-md'>
            <div>
              <h1 className='text-3xl text-slate-900 font-bold'>{overview.value}</h1>
              <p className='text-slate-800'>{overview.text}</p>
            </div>
            <div>
              {overview.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard