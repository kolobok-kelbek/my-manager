import React, { useState } from 'react';
import GoalItem from './GoalItem';

function Goals({ goals, setGoals }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [tagPopupIndex, setTagPopupIndex] = useState(null);
  const [availableTags] = useState(['English', 'Math', 'Science', 'JavaScript']);

  const addGoal = () => {
    const newGoal = { name: 'New Goal', progress: 0, tags: [] };
    setGoals([...goals, newGoal]);
  };

  const deleteGoal = (index) => {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  };

  const editGoal = (index) => {
    setEditingIndex(index);
    setEditingName(goals[index].name);
  };

  const saveGoal = (index) => {
    const newGoals = goals.map((goal, i) => (
      i === index ? { ...goal, name: editingName } : goal
    ));
    setGoals(newGoals);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const toggleTagPopup = (index) => {
    setTagPopupIndex(tagPopupIndex === index ? null : index);
  };

  const addTagToGoal = (goalIndex, tag) => {
    const newGoals = goals.map((goal, i) => (
      i === goalIndex ? { ...goal, tags: [...goal.tags, tag] } : goal
    ));
    setGoals(newGoals);
  };

  const removeTagFromGoal = (goalIndex, tag) => {
    const newGoals = goals.map((goal, i) => (
      i === goalIndex ? { ...goal, tags: goal.tags.filter(t => t !== tag) } : goal
    ));
    setGoals(newGoals);
  };

  return (
    <div className="goals">
      <h2>Goals</h2>
      <button className="add-btn" onClick={addGoal}>+</button>
      <div className="goals-list">
        <ul>
          {goals.map((goal, index) => (
            <GoalItem
              key={index}
              goal={goal}
              index={index}
              editingIndex={editingIndex}
              editingName={editingName}
              tagPopupIndex={tagPopupIndex}
              availableTags={availableTags}
              editGoal={editGoal}
              saveGoal={saveGoal}
              cancelEdit={cancelEdit}
              toggleTagPopup={toggleTagPopup}
              addTagToGoal={addTagToGoal}
              removeTagFromGoal={removeTagFromGoal}
              deleteGoal={deleteGoal}
              setEditingName={setEditingName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Goals;
