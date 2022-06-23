import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';

function EarningsBreakdownChart() {


  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        displayColors: false,
      }
    }
  }

  const data = {
    labels: ['YouTube', 'Spotify', 'Soundcloud'],
    datasets: [
      {
        label: 'Earnings Breakdown',
        data: [20, 30, 50],
        borderWidth: 6,
        hoverBorderWidth: 0,
        borderAlign: 'center',
        cutout: '65%',
        backgroundColor: [
          '#5F8FFF',
          '#FFB1CA',
          '#96ACFE'
        ],
        borderColor: [
          '#5F8FFF',
          '#FFB1CA',
          '#96ACFE'
        ],
      },
    ],
  };

  return (
    <div className='relative w-full h-[65%] mb-4'>
      <Chart type='doughnut' options={options} data={data} />
      <div className='absolute text-3xl opacity-70 font-bold top-[80px] -z-10 right-[121px]'>
        $CC
      </div>
      <div className='text-xs mt-4 pr-2 '>
        <div className='flex flex-row divide-x justify-around'>
          <div className='flex flex-row gap-3'>
            <div className='relative w-[10px] h-[10px]'>
              <div className='w-[10px] h-[10px] absolute top-[2px] rounded-full bg-[#5F8FFF]'></div>
            </div>
            <div>
              <p>YouTube</p>
              <p className='text-gray-400'>50%</p>
            </div>
          </div>
          <div className='flex flex-row pl-3  gap-3'>
            <div className='relative w-[10px] h-[10px]'>
              <div className='w-[10px] h-[10px] absolute top-[2px] rounded-full bg-[#FFB1CA]'></div>
            </div>
            <div>
              <p>Spotify</p>
              <p className='text-gray-400'>20%</p>
            </div>
          </div>
          <div className='flex flex-row pl-3  gap-3'>
            <div className='relative w-[10px] h-[10px]'>
              <div className='w-[10px] h-[10px] absolute top-[2px] rounded-full bg-[#96ACFE]'></div>
            </div>
            <div>
              <p>Soundcloud</p>
              <p className='text-gray-400'>30%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsBreakdownChart