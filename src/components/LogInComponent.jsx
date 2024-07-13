import React, { useContext, useEffect, useState } from 'react'
import LogInBg from '../assets/bg.svg'
import { LogInContext } from '../contexts/LogInContext'

const LogInComponent = () => {
    const { username, setUsername, setShowDashboard, logoutMessage, visible } = useContext(LogInContext);
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center '>
            <div className='hidden lg:block'>
                <img src={LogInBg} alt="Log In" className='h-96 object-cover w-full' />
            </div>

            <div className='h-full min-w-full flex justify-center items-center '>
                <div className='w-full mx-10 lg:mx-24'>
                    {logoutMessage &&
                        <div className={`py-4 text-center mb-5 rounded-lg border bg-green-500 text-white font-medium transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                            <p>{logoutMessage}</p>
                        </div>}
                    <div>
                        <h1 className='text-5xl font-bold text-slate-800'>Hello,  Welcome Back</h1>
                    </div>
                    <div className='mt-8'>
                        <label htmlFor="username" className='text-lg text-slate-800'>Enter Username: </label>
                        <input type="text" id="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="username" className='text-lg text-slate-800'>Enter Password: </label>
                        <input type="password" placeholder='Password' className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    <button className='text-center w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all ease-in-out p-3 rounded-lg text-white font-bold' onClick={() => setShowDashboard(true)}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default LogInComponent