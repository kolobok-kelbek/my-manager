import React, { useEffect, useRef, useState } from 'react';

const GoalItem = ({
  goal,
  index,
  editingIndex,
  editingName,
  tagPopupIndex,
  availableTags,
  editGoal,
  saveGoal,
  cancelEdit,
  toggleTagPopup,
  addTagToGoal,
  removeTagFromGoal,
  deleteGoal,
  setEditingName,
}) => {
  const tagPopupRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleTagButtonClick = (event, index) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ top: rect.top + rect.height, left: rect.left });
    toggleTagPopup(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tagPopupRef.current && !tagPopupRef.current.contains(event.target)) {
        toggleTagPopup(null);
      }
    };

    if (tagPopupIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagPopupIndex, toggleTagPopup]);

  return (
    <li style={{ position: 'relative' }}>
      {editingIndex === index ? (
        <div className="editing">
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
          <button className="save-btn" onClick={() => saveGoal(index)}>✓</button>
          <button className="cancel-btn" onClick={cancelEdit}>✗</button>
        </div>
      ) : (
        <>
          <div className="goal-content">
            <span className="goal-name" onDoubleClick={() => editGoal(index)}>{goal.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            <div className="buttons">
              <button
                className="tag-btn"
                onClick={(e) => handleTagButtonClick(e, index)}
              >
                🏷️
              </button>
              <button
                className="edit-btn"
                onClick={() => editGoal(index)}
              >
                ✎
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteGoal(index)}
                disabled={editingIndex !== null}
              >
                ×
              </button>
            </div>
          </div>
          <div className="goal-tags">
            {goal.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
                <button onClick={() => removeTagFromGoal(index, tag)}>×</button>
              </span>
            ))}
          </div>
        </>
      )}
      {tagPopupIndex === index && (
        <>
          <div className="overlay"></div>
          <div
            className="tag-popup"
            ref={tagPopupRef}
            style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
          >
            <h4>Select Tags</h4>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => addTagToGoal(index, tag)}
                disabled={goal.tags.includes(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </>
      )}
    </li>
  );
};

export default GoalItem;
