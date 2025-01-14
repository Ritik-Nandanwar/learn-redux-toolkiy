import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} method="post">
        <input
          type="text"
          placeholder="add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default AddTodo;
