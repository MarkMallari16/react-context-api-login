import React from 'react'
import BarChart from '../components/charts/BarChart'

const Analytics = () => {
    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Analytics</h1>
            <div className='border shadow-sm py-8 px-10 rounded-lg'>
                Analytics
            </div>
            <div className='mt-5'>
                <BarChart />
            </div>
        </div>
    )
}

export default Analytics