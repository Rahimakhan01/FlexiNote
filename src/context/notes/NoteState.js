import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)
  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZWE3Y2VlNzE0N2U1MjNiYjlmMTcyIn0sImlhdCI6MTcxOTU3NjU1MH0.EcdpeYH42LrrR7tqBnF9TNp-n-iVzmh4BwzbyXLzovs"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
// Add a Note
const addNote = async (title, description, tag) => {
  // TODO: API Call
  // API Call 
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZWE3Y2VlNzE0N2U1MjNiYjlmMTcyIn0sImlhdCI6MTcxOTU3NjU1MH0.EcdpeYH42LrrR7tqBnF9TNp-n-iVzmh4BwzbyXLzovs"
    },
    body: JSON.stringify({title, description, tag})
  });


  console.log("Adding a new note")
  const note = {
    "_id": "6684414307782dc724225227",
    "user": "667ea7cee7147e523bb9f172",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2024-07-02T18:04:51.839Z",
    "__v": 0
  };
  setNotes(notes.concat(note))
}

// Delete a Note
const deleteNote = (id) => {
  // TODO: API Call
  console.log("Deleting the note with id" + id);
  const newNotes = notes.filter((note) => { return note._id !== id })
  setNotes(newNotes)
}
// Edit a Note
const editNote = async (id, title, description, tag) => {
  // API Call 
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3ZWE3Y2VlNzE0N2U1MjNiYjlmMTcyIn0sImlhdCI6MTcxOTU3NjU1MH0.EcdpeYH42LrrR7tqBnF9TNp-n-iVzmh4BwzbyXLzovs"
    },
    body: JSON.stringify({title, description, tag})
  });
  const json = response.json();

  // Logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
  }
}

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
