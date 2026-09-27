function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 accent-gray-900 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold break-words ${
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-900"
          }`}
        >
          {task.title}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {task.completed ? "Completed" : "In progress"}
        </p>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-sm font-semibold text-gray-600 hover:text-black border border-gray-300 rounded-lg px-3 py-2"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;