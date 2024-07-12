import React, { useContext, useState } from 'react'
import { LogInContext } from '../contexts/LogInContext'

const Sidebar = () => {
    const { username } = useContext(LogInContext);
    const shortName = username.split("").slice(0, 2).join("").toUpperCase();
    const [isSideBarExpand, setIsSideBarExpand] = useState(false);
    const handleSideBarExpand = () => {
        setIsSideBarExpand(!isSideBarExpand);
    }
    
    return (
        <div className={`ring-1 ring-slate-300 p-6 rounded-r-xl relative transition-all duration-300 ease-in-out ${isSideBarExpand ? 'w-96' : 'w-auto'}`}>
            <div className='absolute top-56 right-0 bg-blue-500 rounded-full cursor-pointer p-1 text-white' onClick={handleSideBarExpand}>
                {isSideBarExpand ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                }
            </div>
            <div >

                <div className='flex w-full items-center space-x-4'>
                    <div className={`bg-blue-500 text-xl text-center rounded-lg p-3 ${isSideBarExpand ? 'w-auto' : 'w-full'}`}>
                        <p className='font-bold text-slate-50'>{shortName}</p>
                    </div>
                    <div className={`${isSideBarExpand ? 'block' : 'hidden'}`}>
                        <div className='font-medium text-lg'>{username}</div>
                        <div className='text-slate-500 text-sm'>Web Developer</div>
                    </div>
                </div>
                <div className='flex  flex-col space-y-4 pt-10'>
                    <div className='px-5 py-3 flex gap-2 w-full bg-blue-500 text-white font-medium rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <span className={`${isSideBarExpand ? 'block' : 'hidden'}`}>Dashboard</span>
                    </div>
                    <div className={`px-5 py-3 flex gap-2 ${isSideBarExpand ? ' w-full' : 'w-auto'} cursor-pointer hover:bg-slate-200 rounded-lg transition-all`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>

                        <span className={`${isSideBarExpand ? 'block' : 'hidden'}`}> Students</span>
                    </div>
                    <div className='px-5 py-3 flex gap-2  w-full cursor-pointer hover:bg-slate-200 rounded-lg transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>

                        <span className={`${isSideBarExpand ? 'block' : 'hidden'}`}>Notifications</span>
                    </div>
                    <div className='px-5 py-3 flex gap-2 w-full cursor-pointer hover:bg-slate-200 rounded-lg transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>

                        <span className={`${isSideBarExpand ? 'block' : 'hidden'}`}>Analytics</span>
                    </div>
                    <div className='px-5 py-3 flex gap-2  w-full cursor-pointer hover:bg-slate-200 rounded-lg transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>

                        <span className={`${isSideBarExpand ? 'block' : 'hidden'}`}>Wallets</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar