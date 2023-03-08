import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';
import {generateArr} from '../../utils/Utils'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};

const day = generateArr({count: 1, min: 1, max: 31});
const labels = day.map((day)=> "Day "+ day);
/*
   {
      label: 'Dataset 1',
      data: labels,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
*/
export const data = {
  labels,
  datasets: [
    {
      label: 'Reservas de platos por dias',
      data: [200,345,112,1000,456,987,345,22,546,754,633,12,323,453,34,456,567,234,22,123,234,456,645], //generateArr({count: 100, min: 0, max: 1000}),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
    },
  ],
};

export function Chart() {
  return <Line options={options} data={data} />;
}
