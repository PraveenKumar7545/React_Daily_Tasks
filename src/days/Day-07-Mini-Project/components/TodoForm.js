import { useState } from "react";

function TodoForm({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTask = taskText.trim();

    if (!trimmedTask) {
      return;
    }

    onAddTask(trimmedTask);
    setTaskText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-sm p-5"
    >
      <label className="block text-lg font-bold text-gray-900 mb-4">
        Add a New Task
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="What do you need to do?"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
        />

        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;