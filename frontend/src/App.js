import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Goals from './components/Goals';
import MainTags from './components/MainTags';
import RadarChart from './components/RadarChart';
import DailyTasks from './components/DailyTasks';
import DailyTasksChart from './components/DailyTasksChart'; // New component for daily tasks chart
import './App.css';

function App() {
  const [goals, setGoals] = useState([
    { name: 'Test A1', progress: 20, tags: [] },
    { name: 'Test B1', progress: 0, tags: [] },
    { name: 'IELTS', progress: 0, tags: [] },
    { name: 'TOEFL', progress: 10, tags: [] },
  ]);

  const [dailyTasks, setDailyTasks] = useState({
    Monday: ['Task 1', 'Task 2'],
    Tuesday: ['Task 1', 'Task 2'],
    Wednesday: ['Task 1', 'Task 2'],
    Thursday: ['Task 1', 'Task 2'],
    Friday: ['Task 1', 'Task 2'],
    Saturday: ['Task 1', 'Task 2'],
    Sunday: ['Task 1', 'Task 2'],
  });

  return (
    <div className="app">
      <header className="header">
        <Goals goals={goals} setGoals={setGoals} />
        <MainTags />
      </header>
      <main className="main">
        <RadarChart goals={goals} />
        <DailyTasksChart dailyTasks={dailyTasks} />
      </main>
      <footer className="footer">
        <DailyTasks dailyTasks={dailyTasks} setDailyTasks={setDailyTasks} />
      </footer>
    </div>
  );
}

export default App;
