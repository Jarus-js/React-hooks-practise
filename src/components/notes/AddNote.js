import React, { Fragment, useState, useContext } from "react";
import noteContext from "../context/noteContext";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { dispatch } = useContext(noteContext); //useContext return values what are passed from value.

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTES",
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  return (
    <Fragment>
      <h1>Notes</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <button>Add Note</button>
      </form>
    </Fragment>
  );
};

export default AddNote;
