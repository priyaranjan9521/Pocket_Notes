import React from 'react';
import './GroupList.css';

const getColor = (groupName) => {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF2',
    '#F2FF33', '#FF9633', '#FF5733', '#A1FF33', '#5733FF', '#FF33A1'
  ];
  let hash = 0;
  for (let i = 0; i < groupName.length; i++) {
    hash = groupName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
};

const GroupList = ({ groups, selectedGroup, setSelectedGroup }) => {
  return (
    <div className="group-list">
      {groups.map((group, index) => (
        <button
          key={index}
          onClick={() => setSelectedGroup(group)}
          className={selectedGroup === group ? 'active' : ''}
          style={{ backgroundColor: getColor(group) }}
        >
          <span className="group-icon" style={{ backgroundColor: getColor(group) }}>
            {group.slice(0, 2).toUpperCase()}
          </span>
          {group}
        </button>
      ))}
    </div>
  );
};

export default GroupList;
