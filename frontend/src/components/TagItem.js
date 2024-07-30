import React from 'react';

function TagItem({
  tag,
  index,
  editingIndex,
  editingName,
  editTag,
  saveTag,
  cancelEdit,
  deleteTag,
  setEditingName,
}) {
  return (
    <li>
      {editingIndex === index ? (
        <div className="editing">
          <input
            type="text"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
          <button className="save-btn" onClick={() => saveTag(index)}>✓</button>
          <button className="cancel-btn" onClick={cancelEdit}>✗</button>
        </div>
      ) : (
        <div className="tag-content">
          <span className="tag-name" onDoubleClick={() => editTag(index)}>{tag}</span>
          <div className="buttons">
            <button
              className="edit-btn"
              onClick={() => editTag(index)}
            >
              ✎
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteTag(index)}
              disabled={editingIndex !== null}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TagItem;
