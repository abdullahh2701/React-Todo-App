import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
