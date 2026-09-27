import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-10 text-center">
        <h2 className="text-xl font-bold text-gray-900">
          No tasks found
        </h2>

        <p className="text-gray-500 mt-2">
          Add a task or select another filter.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;