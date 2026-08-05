function TaskForm({
  input,
  setInput,
  addOrUpdateTask,
  editIndex,
}) {
  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addOrUpdateTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TaskForm;
