import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ goals }) => {
  const data = {
    labels: goals.map(goal => goal.name),
    datasets: [
      {
        label: 'Goal Progress',
        data: goals.map(goal => goal.progress),
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
    maintainAspectRatio: false, // Add this line to maintain aspect ratio
  };

  return (
    <div className="radar-chart">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
