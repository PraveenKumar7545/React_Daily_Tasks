import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function Day7() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("day7_tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("day7_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = tasks.length - completedCount;

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 07
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Task Manager
          </h1>

          <p className="text-gray-600 mt-3">
            Organize your daily work and track your progress.
          </p>
        </div>

        {/* Task Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {tasks.length}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Active</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {activeCount}
            </h2>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {completedCount}
            </h2>
          </div>
        </div>

        {/* Add Task */}
        <TodoForm onAddTask={addTask} />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-8 mb-5">
          {["all", "active", "completed"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition ${
                filter === item
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Task List */}
        <TodoList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            Your tasks are saved automatically in this browser.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Day 7 - React Mini Project
          </p>
        </div>
      </div>
    </main>
  );
}

export default Day7;