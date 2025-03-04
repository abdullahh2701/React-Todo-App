import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (newItem, itemDueDate) => {
    console.log(`new Item: ${newItem} and Due Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: newItem, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
