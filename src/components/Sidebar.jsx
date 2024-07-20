import React, { useContext} from 'react'
import { LogInContext } from '../contexts/LogInContext'
import SidebarLinks from './SidebarLinks';


const Sidebar = ({ isSideBarExpand, handleSideBarExpand }) => {

    const { username } = useContext(LogInContext);

    const shortName = username.split("").slice(0, 2).join("").toUpperCase();

    return (
        <div className={`fixed top-0 left-0 z-10 h-full ring-1 bg-white ring-slate-300 p-4 lg:px-4 lg:py-5 ${isSideBarExpand ? 'w-96' : 'w-24 '} duration-500 ease-in-out rounded-r-xl `} >
            <div className={`z-50 hidden lg:block absolute top-64 ${isSideBarExpand ? '-right-4' : '-right-4 rotate-180'} bg-blue-500 rounded-full cursor-pointer p-1 text-white transition-all  duration-500 ease-in-out`} onClick={handleSideBarExpand}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div >

                <div className='flex w-full  items-center space-x-4'>
                    <div className={`bg-blue-500 text-xl text-center rounded-lg py-3 px-4 ${isSideBarExpand ? 'w-auto' : 'w-full'}`}>
                        <p className='font-bold text-slate-50'>{shortName}</p>
                    </div>
                    <div className={` transition-opacity ease-in-out duration-200 ${!isSideBarExpand && 'opacity-0 '}`}>
                        <div className='font-medium text-lg'>{username}</div>
                        <div className='text-slate-500 text-sm'>Admin</div>
                    </div>
                </div>
                <SidebarLinks isSideBarExpand={isSideBarExpand} />
            </div>
        </div >
    )
}

export default Sidebar