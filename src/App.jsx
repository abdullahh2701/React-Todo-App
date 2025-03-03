import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2023",
    },
    {
      name: "Go to College",
      duedate: "4/10/2023",
    },
    {
      name: "Learn React",
      duedate: "5/10/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (newItem, itemDueDate) => {
    console.log(`new Item: ${newItem} and Due Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: newItem, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
