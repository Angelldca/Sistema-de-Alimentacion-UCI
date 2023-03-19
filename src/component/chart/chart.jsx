import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
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
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], //generateArr({count: 100, min: 0, max: 1000}),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      pointStyle: 'circle',
      pointRadius: 10,
      pointHoverRadius: 15
    },
  ],
};

export function Chart({dtoPlatosFecha}) {
  const [dataChart,setDataChart] = useState(data)
  useEffect(() => {
       axios.post("http://localhost:8080/reserva/reservasFechaPlato",dtoPlatosFecha,{ 
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response=>{
        setDataChart({
          ...dataChart,
          datasets:[
            {
              ...data.datasets[0],
              data: response.data
              

            }
          ]

        })
      }).then(()=>{
        console.log(dataChart)
      })
      .catch(err=>{
        console.log(err)
      })

  }, [dtoPlatosFecha])
  return <Line options={options} data={dataChart} />;
}
