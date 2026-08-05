function TaskItem({
  task,
  index,
  deleteTask,
  editTask,
  toggleComplete,
}) {
  return (
    <div className="task-item">
      <div className="left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(index)}
        />

        <span className={task.completed ? "completed" : ""}>
          {task.name}
        </span>
      </div>

      <div className="buttons">
        <button className="edit" onClick={() => editTask(index)}>
          Edit
        </button>

        <button
          className="delete"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
