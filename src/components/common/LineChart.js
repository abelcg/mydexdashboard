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
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const LineChart = (props) => {
    const options = {
        responsive: true,
        /* plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Vistas Mensuales',
          },
        }, */
      };

       //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; 

        const data = {
        //labels,
        color: "blue",
        ticksColor: "blue",
        datasets: [
            {
             // label: "2021",
              data: props.data,
             // min: 30,
             // max: 95,
              fill: true,
              backgroundColor: ["rgba(54, 162, 235, 0.8)"],
              tension: 0.2,
            },
            {
             // label: "2020",
              data: props.data,
              //min: 30,
             // max: 95,
              fill: true,
              backgroundColor: ["rgba(154, 112, 135, 0.8)"],
              tension: 0.3,
            },
          ],
      };  
      
    return (
        <>
            <Line options={options}  data={data}  />;
        </>
    );
};

export default LineChart;