import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const DailyTasksChart = ({ dailyTasks }) => {
  const data = {
    labels: Object.keys(dailyTasks),
    datasets: [
      {
        label: 'Completed Tasks',
        data: Object.values(dailyTasks).map(tasks => tasks.length),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
    maintainAspectRatio: false, // Add this line to maintain aspect ratio
  };

  return (
    <div className="daily-tasks-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DailyTasksChart;
