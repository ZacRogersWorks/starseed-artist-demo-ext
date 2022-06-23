import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

function EarningsBreakdownChart() {


  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins:{
      legend: {
        display:false
      }
    }
  }

  const data = {
    labels: ['YouTube', 'Spotify', 'Soundcloud'],
    datasets: [
      {
        label: 'Earnings Breakdown',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
}

export default EarningsBreakdownChart