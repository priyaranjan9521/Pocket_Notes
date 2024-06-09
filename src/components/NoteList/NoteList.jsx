import React from 'react';
import './NoteList.css';

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

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

const formatTime = (isoString) => {
  const date = new Date(isoString);
  const options = { hour: '2-digit', minute: '2-digit' };
  return date.toLocaleTimeString(undefined, options);
};

const NoteList = ({ notes, group }) => {
  const color = getColor(group);

  return (
    <div className="note-list" style={{ backgroundColor: color }}>
      {notes.map((note, index) => (
        <div key={index} className="note" style={{ backgroundColor: color }}>
          <div className="note-date">
            <div className="note-date-up">{formatDate(note.date)}</div>
            <div className="note-date-down">{formatTime(note.date)}</div>
          </div>
          <div className="note-content">{note.text}</div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

// import React from 'react';
// import './NoteList.css'; // Ensure to import the CSS file

// const getColor = (groupName) => {
//   const colors = [
//     '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF2',
//     '#F2FF33', '#FF9633', '#FF5733', '#A1FF33', '#5733FF', '#FF33A1'
//   ];
//   let hash = 0;
//   for (let i = 0; i < groupName.length; i++) {
//     hash = groupName.charCodeAt(i) + ((hash << 5) - hash);
//   }
//   const index = Math.abs(hash % colors.length);
//   return colors[index];
// };

// const NoteList = ({ notes, group }) => {
//   const color = getColor(group);

//   return (
//     <div className="note-list" style={{ backgroundColor: color }}>
//       {notes.map((note, index) => (
//         <div key={index} className="note">
//           <div className="note-date">{note.date}</div>
//           <div className="note-content">{note.text}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoteList;
