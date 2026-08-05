import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  editTask,
  toggleComplete,
}) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
