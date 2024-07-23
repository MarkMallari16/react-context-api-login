import React from 'react'
import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart'

const Analytics = () => {
    return (
        <div className='p-5 w-full'>
            <h1 className='text-2xl mb-4 font-bold'>Analytics</h1>
            <div className='mt-5 grid row-span-2 grid-cols-1 lg:grid-cols-2 gap-5'>
                <div >
                    <BarChart />

                </div>
                <div>
                    <PieChart />
                </div>
                <div className=' w-full lg:col-span-2 h-96'>
                    <LineChart />
                </div>

            </div>
        </div>
    )
}

export default Analytics