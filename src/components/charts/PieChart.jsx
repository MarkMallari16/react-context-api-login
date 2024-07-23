import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
    const data = {
        labels: ['Electronics', 'Clothing', 'Home & Kitchen'],
        datasets: [
            {
                label: 'Sales by Category',
                data: [300, 200, 150, 100, 80, 50], // Example sales data
                backgroundColor: [
                    '#7DD3FC',
                    '#60A5FA',
                    'rgba(255, 206, 86, 0.2)',

                ],
                
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        borderRadius: 10
    };
    return (
        <Pie data={data} options={options} className='bg-white p-5 rounded-lg shadow-md' />
    )
}

export default PieChart