import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.duedate} />
      ))}
    </div>
  );
};

export default TodoItems;
