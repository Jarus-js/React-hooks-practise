import React, { Fragment, useState, useEffect, useReducer } from "react";
import noteReducer from "./reducers/noteReducer";
import NoteList from "./components/notes/NoteList";
import AddNote from "./components/notes/AddNote";
import NoteContext from "./components/context/noteContext";

const App = () => {
  const [notes, dispatch] = useReducer(noteReducer, []);
  //const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      dispatch({
        type: "POPULATE_NOTES",
        notes: notesData
      });
    }
  }, []);
  useEffect(() => {
    console.log("Hello Effect");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      <AddNote />
      <NoteList />
    </NoteContext.Provider>
  );
};

export default App;
