import React, { useState } from 'react';
import TagItem from './TagItem';

function MainTags() {
  const [tags, setTags] = useState([
    'English', 'Greek', 'JavaScript', 'Java', 'DDP'
  ]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingName, setEditingName] = useState('');

  const addTag = () => {
    setTags([...tags, 'New Tag']);
  };

  const deleteTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const editTag = (index) => {
    setEditingIndex(index);
    setEditingName(tags[index]);
  };

  const saveTag = (index) => {
    const newTags = tags.map((tag, i) => (
      i === index ? editingName : tag
    ));
    setTags(newTags);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="main-tags">
      <h2>Tags</h2>
      <button className="add-btn" onClick={addTag}>+</button>
      <div className="tags-list">
        <ul>
          {tags.map((tag, index) => (
            <TagItem
              key={index}
              tag={tag}
              index={index}
              editingIndex={editingIndex}
              editingName={editingName}
              editTag={editTag}
              saveTag={saveTag}
              cancelEdit={cancelEdit}
              deleteTag={deleteTag}
              setEditingName={setEditingName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainTags;
