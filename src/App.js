import React, { useState, useEffect } from 'react';
import GroupList from './components/GroupList/GroupList';
import NewGroupPopup from './components/NewGroup/NewGroupPopup';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import './App.css';

const App = () => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    return savedGroups;
  });
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    return savedNotes;
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [groups, notes]);

  const addGroup = (groupName) => {
    setGroups([...groups, groupName]);
    setShowPopup(false);
  };

  const addNote = (noteText) => {
    const date = new Date();
    const newNote = {
      text: noteText,
      date: date.toISOString(),
      lastUpdated: date.toISOString(),
    };
    const updatedNotes = {
      ...notes,
      [selectedGroup]: [...(notes[selectedGroup] || []), newNote],
    };
    setNotes(updatedNotes);
  };
  
   

  const defaultImage = '/image.png'; // Use environment variable or default path

  return (
    <div className="App">
      
      <div className="group-list-container">
      <h2>Pocket Notes</h2>
        <button className="create-group-button" onClick={() => setShowPopup(true)}>Create Group</button>
        <GroupList
          groups={groups}
          selectedGroup={selectedGroup}
          setSelectedGroup={setSelectedGroup}
        />
        {showPopup && <NewGroupPopup addGroup={addGroup} closePopup={() => setShowPopup(false)} />}
      </div>
      <div className="main-content">
        {selectedGroup ? (
          <>
            <NoteList notes={notes[selectedGroup] || []} group={selectedGroup} />
            <NoteForm addNote={addNote} />
          </>
        ) : (
          <img src={defaultImage} alt="Note" />
        )}
      </div>
    </div>
  );
};

export default App;
