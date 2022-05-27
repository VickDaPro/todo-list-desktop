import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { db } from "../src/config/firebase-config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Todo from "./components/Todo/Todo";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);
  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    console.log("click");
    setInput("");
  };
  console.log(todos);

  return (
    <div className="App">
      <Sidebar />
      <div className="todo-header">
        <h3 className="todo-title">Zapier</h3>
        <button className="btn-user todo-header-btn">
          <i class="fa fa-user-plus" aria-hidden="true"></i>
        </button>
        <button className="btn-menu todo-header-btn">
          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
        </button>
      </div>
      <div className="ul-container">
        <DragDropContext>
          <Droppable droppableId="todo-ul">
            {(provided) => (
              <ul
                className="todo-ul"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((item, id) => (
                  <Todo key={item.id} arr={item} />
                ))}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <form className="form">
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          style={{
            margin: "0px 5px",
            width: "100%",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="todo-button" onClick={addTodo}>
          <span>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </span>{" "}
          Add a task
        </button>
      </form>
    </div>
  );
}

export default App;
