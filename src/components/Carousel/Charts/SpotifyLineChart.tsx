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



const labels = ['', '', '', '', '', ''];
const data = {
  labels,
  datasets: [
    {
      label: 'This Week',
      lineTension: 0.35,
      data: [2000, 5000, 10500, 8000, 7500, 12000],
      borderColor: '#4169E1',
      borderCapStyle: 'round',
      fill: true,
    },
    {
      label: 'Last Week',
      lineTension: 0.4,
      data: [5000, 8000, 7500, 12000, 9000, 12600],
      borderColor: 'rgb(255, 99, 132)',
      borderDash: [3, 3],
      borderCapStyle: 'round',
      borderWidth: 2,
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(65, 105, 225, 0.12)';
  const colorEnd = 'rgba(65, 105, 225, 0.01)'

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(1, colorStart);
  gradient.addColorStop(0, colorEnd);

  return gradient;
}

function SpotifyLineChart() {
  const chartRef = useRef<ChartJS>(null);

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
        radius: 0
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
      legend: {
        display: false,
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Spotify Engagement',
      },
    },
  };
  return (
    <Chart type='line' height={'260px'} ref={chartRef} options={{
      ...options,
      interaction: {
        mode: 'index',
        intersect: false,
      }
    }} data={chartData} />
  )
}

export default SpotifyLineChart
