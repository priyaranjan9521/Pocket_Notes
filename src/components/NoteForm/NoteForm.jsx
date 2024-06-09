
import React, { useState } from 'react';
import './NoteForm.css';


const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a note..."
        className="input-as-textarea"
       
      />
      <button type="submit">Enter</button>
    </form>
   
  );
};

export default NoteForm;


