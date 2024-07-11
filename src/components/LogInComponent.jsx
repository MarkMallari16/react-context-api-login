import React, { useContext } from 'react'
import LogInBg from '../assets/bg.svg'
import { LogInContext } from '../contexts/LogInContext'

const LogInComponent = () => {
    const { username, setUsername, setShowDashboard } = useContext(LogInContext);
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center'>
            <div >
                <img src={LogInBg} alt="Log In" className='h-96 object-cover w-full' />
            </div>
            <div className='h-full flex justify-center items-center  w-full '>
                <div >
                    <div>
                        <h1 className='text-5xl font-bold text-slate-800'>Hello, <br /> Welcome Back</h1>
                    </div>
                    <div className='mt-8'>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='p-5 w-96 border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    <div className='mt-4'>
                        <input type="password" placeholder='Password' className='p-5 w-96 border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    <button className='text-center w-full mt-6 bg-blue-500 hover:bg-blue-600 transition-all ease-in-out p-3 rounded-lg text-white font-bold' onClick={() => setShowDashboard(true)}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default LogInComponent