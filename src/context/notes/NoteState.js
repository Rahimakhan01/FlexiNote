import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6684414307782dc724225227",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-02T18:04:51.839Z",
          "__v": 0
        },
        {
          "_id": "66851eb3aa824adc607a8798",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-03T09:49:39.157Z",
          "__v": 0
        },
        {
          "_id": "6684414307782dc724225227",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-02T18:04:51.839Z",
          "__v": 0
        },
        {
          "_id": "66851eb3aa824adc607a8798",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-03T09:49:39.157Z",
          "__v": 0
        },
        {
          "_id": "6684414307782dc724225227",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-02T18:04:51.839Z",
          "__v": 0
        },
        {
          "_id": "66851eb3aa824adc607a8798",
          "user": "667ea7cee7147e523bb9f172",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-03T09:49:39.157Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;