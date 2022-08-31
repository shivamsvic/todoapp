import styles from "./NewTask.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NewTask = (props) => {
  return (
    <div
      className={cx("basic", {
        green: props.task.isCompleted,
      })}
    >
      <li
        data-testid={`taskname-${props.task.id}-id`}
        className={cx("list-text")}
      >
        {props.task.taskName}
      </li>
      <button
        data-testid={`complete-button-${props.task.id}-id`}
        onClick={props.markAsCompleted}
        className={cx("completeButton")}
      >
        Mark as Completed
      </button>
      <button
        data-testid={`remove-button-${props.task.id}-id`}
        onClick={props.deleteTask}
        className={cx("removeButton")}
      >
        Remove Task
      </button>
    </div>
  );
};

export default NewTask;
