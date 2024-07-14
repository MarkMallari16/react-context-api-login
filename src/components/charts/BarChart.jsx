import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    '#60a5fa',
                    '#7dd3fc'


                ],
                borderRadius: 12,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className='w-96'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart