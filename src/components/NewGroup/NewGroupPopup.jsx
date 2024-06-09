// import React, { useState } from 'react';
// import './NewGroup.css';


// const NewGroupPopup = ({ addGroup, closePopup }) => {
//   const [groupName, setGroupName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (groupName.trim()) {
//       addGroup(groupName);
//       setGroupName('');
//     }
//   };

//   return (
//     <div className="new-group-popup">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           placeholder="Enter group name..."
//         />
//         <button type="submit">Create</button>
//       </form>
//       <button onClick={closePopup}>Close</button>
//     </div>
//   );
// };

// export default NewGroupPopup;

// import React, { useState, useEffect } from 'react';
// import './NewGroup.css';

// const NewGroupPopup = ({ addGroup }) => {
//   const [groupName, setGroupName] = useState('');

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'Escape') {
//         setGroupName('');
//         document.removeEventListener('keydown', handleKeyDown);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (groupName.trim()) {
//       addGroup(groupName);
//       setGroupName('');
//     }
//   };

//   return (
//     <div className="new-group-popup">
//       <form onSubmit={handleSubmit}>
//       <h2>Create New Group</h2>
//         <input
//           type="text"
//           value={groupName}
//           onChange={(e) => setGroupName(e.target.value)}
//           placeholder="Enter group name..."
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default NewGroupPopup;

import React, { useState, useEffect } from 'react';
import './NewGroup.css';

const NewGroupPopup = ({ addGroup, closePopup }) => {
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('new-group-popup');
      if (popup && !popup.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      addGroup(groupName);
      setGroupName('');
    }
  };

  return (
    <div id="new-group-popup" className="new-group-popup">
      <form onSubmit={handleSubmit}>
        <h2>Create New Group</h2>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name..."
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewGroupPopup;
