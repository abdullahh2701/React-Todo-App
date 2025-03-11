import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItemsObj = useContext(TodoItemsContext);
  const todoItems = todoItemsObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your day </p>
  );
};

export default WelcomeMessage;
