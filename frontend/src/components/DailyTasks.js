import React from 'react';

function DailyTasks() {
  return (
    <div className="daily-tasks">
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
        <div className="day" key={day}>
          <h4>{day}</h4>
          <ul>
            <li>
              <input type="checkbox" /> Task 1
            </li>
            <li>
              <input type="checkbox" /> Task 2
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DailyTasks;
