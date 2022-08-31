import { useState } from "react";
import styles from "./App.module.css";
import NewTask from "./newtask/NewTask";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function App() {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  };

  const markAsCompleted = (id) => {
    const compeletedList = todoList.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: true };
      } else {
        return task;
      }
    });
    setTodoList(compeletedList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => id !== task.id));
  };

  return (
    <div className={cx("App")}>
      <div className={cx("taskTracker")}> Welcome to task tracker</div>
      <div className={cx("todoInputContainer")}>
        <input
          className={cx("todoInput")}
          data-testid="todo-task-input"
          value={newTask}
          onChange={handleOnChange}
        />
        <button
          className={cx("todoAddButton")}
          data-testid="todo-add-task-button"
          onClick={addNewTask}
        >
          Add New Task
        </button>
      </div>
      <div className={cx("todoDisplayContainer")}>
        <ul>
          {todoList.map((task) => (
            <NewTask
              key={task.id}
              task={task}
              markAsCompleted={() => markAsCompleted(task.id)}
              deleteTask={() => deleteTask(task.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
