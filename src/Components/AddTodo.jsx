import React, { useState, useRef, useContext } from "react";
import { BiCommentAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    console.log(todoName, dueDate);
    addNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container ">
      <form onSubmit={handleAddButtonClicked} className="row n-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            type="date"
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success n-button">
            <BiCommentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
