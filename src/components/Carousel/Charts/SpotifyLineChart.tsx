import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartData,
  ChartArea
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker'




function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(65, 105, 225, 0.12)';
  const colorEnd = 'rgba(65, 105, 225, 0.01)'

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(1, colorStart);
  gradient.addColorStop(0, colorEnd);

  return gradient;
}

function SpotifyLineChart({ randomize }) {
  const chartRef = useRef<ChartJS>(null);

  const labels = ['', '', '', '', '', ''];
  const data = {
    labels,
    datasets: [
      {
        label: 'This Week',
        lineTension: 0.35,
        data: randomize ? labels.map(() => faker.datatype.number({ min: 15000, max: 18000 })) :
          ([2000, 5000, 10500, 8000, 7500, 12000]),
        borderColor: '#4169E1',
        borderCapStyle: 'round',
        fill: true,
      },
      {
        label: 'Last Week',
        lineTension: 0.4,
        data: randomize ? labels.map(() => faker.datatype.number({ min: 10000, max: 14000 })) :
          ([5000, 8000, 7500, 12000, 9000, 12600]),
        borderColor: '#FF4F79',
        borderDash: [3, 3],
        borderCapStyle: 'round',
        borderWidth: 2,
      },
    ],
  };


  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

  const options = {
    responsive: true,
    hover: {
      intersect: false,
    },
    elements: {
      point: {
        radius: 0,
        pointBackgroundColor: 'black',
        pointBorderColor: 'white',
        pointBorderWidth: 1,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        }
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 5000,
          callback: function (value, index, ticks) {
            return value / 1000 + 'k';
          },
          color: '#3E4259',
          font: {
            size: 9.35
          }
        }
      }
    },
    plugins: {
      tooltip: {
        displayColors: false,
      },
      legend: {
        display: false,
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 9,
          },
        },
        position: 'bottom' as const,
        align: 'center',
      },
      title: {
        display: false,
        text: 'Spotify Engagement',
      },
    },
  };
  return (
    <div>
      {/* @ts-ignore */}
      <Chart type='line' height={'205px'} ref={chartRef} options={{
        ...options,
        interaction: {
          mode: 'index',
          intersect: false,
        }
      }} data={chartData} />
      <div className='flex justify-center gap-4 pb-2 '>
        <div className='flex flex-row gap-2 text-xxs items-center'>
          <div className='w-[10px] h-[10px] rounded-full bg-[#4169E1]'></div>
          <p>This Week</p>
        </div>
        <div className='flex flex-row gap-2 text-xxs items-center'>
          <div className='w-[10px] h-[10px] rounded-full bg-[#FF4F79]'></div>
          <p>Last Week</p>
        </div>
      </div>
    </div>
  )
}

export default SpotifyLineChart
