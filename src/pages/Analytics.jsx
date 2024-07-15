import React from 'react'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'

const Analytics = () => {
    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Analytics</h1>
            <div className='bg-white  border shadow-sm py-8 px-10 rounded-lg'>
                Analytics
            </div>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div>
                    <BarChart />
                </div>
                <div>
                    <LineChart />
                </div>
            </div>
        </div>
    )
}

export default Analytics