import React, { useContext, useEffect, useState } from 'react'
import LogInBg from '../assets/bg.svg'
import { LogInContext } from '../contexts/LogInContext'


const LogInComponent = () => {
    const { username, setUsername, password, setPassword, error, login, logoutMessage, visible } = useContext(LogInContext);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            login(username, password);
         
        }
    };
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 place-items-center '>
            <div className='hidden  bg-blue-500 h-full w-full lg:flex justify-center items-center'>
                <img src={LogInBg} alt="Log In" className='h-96 object-cover ' />
            </div>

            <div className='h-full  flex justify-center items-center '>
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
                        <input type="text" id="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleEnter} className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="username" className='text-lg text-slate-800'>Enter Password: </label>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleEnter} className='mt-1 p-4 w-full border rounded-lg border-slate-300 focus:outline-blue-500' />
                    </div>
                    {error && <p className='mt-1 text-red-500'>{error}</p>}
                    <div>
                        <button className='text-white bg-blue-500 hover:bg-blue-600 w-full mt-6 transition-all ease-in-out p-3 rounded-lg' onClick={() => login(username, password)}>
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInComponent