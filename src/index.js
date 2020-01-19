import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*const App = ({ counts }) => {
  const [count, setCount] = useState(counts);
  const [text, setText] = useState("");
  console.log("ganeko", count);
  console.log("lekheko", text);
  const increaseHandler = () => {
    setCount(count + 1);
  };
  const decreaseHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <Fragment>
      <h1>
        The current {text || "Count"} is {count}
      </h1>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={resetHandler}>Reset</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </Fragment>
  );
  const [state, setState] = useState({
    count: 0,
    text: ""
  });
  //SINGLE
  const { count, text } = state;
  return (
    <Fragment>
      <h1>
        The Current {text || "Count"} is {count}
      </h1>
      <button onClick={() => setState({ count: count + 1 })}> Increase</button>
      <button onClick={() => setState({ count: count - 1 })}>Decrease</button>
      <button onClick={() => setState({ count: 0 })}>Reset</button>
      <input value={text} onChange={e => setState({ text: e.target.value })} />
    </Fragment>
  );
}; */

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
/*
const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]); //setNotes is a function so () since its array ([])
    setTitle("");
    setBody("");
  };
  const deleteHandler = title => {
    const filtered = notes.filter(note => note.title !== title);
    setNotes(filtered);
  };
  // console.log("Nota", notes);
  //console.log("til", title);
  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      setNotes(notesData);
    }
  }, []);
  useEffect(() => {
    console.log("Hello Effect");
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
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
      {notes.map(note => (
        <>
          <div key={note.title}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </div>
          <button onClick={() => deleteHandler(note.title)}>X</button>
        </>
      ))}
    </Fragment>
  );
*/
