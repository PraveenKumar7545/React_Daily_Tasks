import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Counter
      </h2>

      <p className="text-5xl font-bold text-gray-900 mt-6">
        {count}
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <button
          onClick={decreaseCount}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
          -
        </button>

        <button
          onClick={resetCount}
          className="bg-gray-200 text-gray-900 px-5 py-2 rounded-lg hover:bg-gray-300"
        >
          Reset
        </button>

        <button
          onClick={increaseCount}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;