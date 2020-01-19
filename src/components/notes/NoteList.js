import React, { useContext } from "react";
import noteContext from "../context/noteContext";

const NoteList = () => {
  const { notes, dispatch } = useContext(noteContext); //useContext return values what are passed from value.
  const deleteHandler = title => {
    dispatch({
      type: "REMOVE_NOTES",
      title
    });
  };
  return notes.map(note => (
    <>
      <div key={note.title}>
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </div>
      <button onClick={() => deleteHandler(note.title)}>X</button>
    </>
  ));
};

export default NoteList;
