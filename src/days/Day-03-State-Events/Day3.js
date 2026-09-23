import Counter from "./Counter";
import LikeButton from "./LikeButton";

function Day3() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Day 3 Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 03
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            State & Events
          </h1>

          <p className="text-gray-600 mt-3">
            Managing changing data and handling user actions in React.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Counter />
          <LikeButton />
        </div>

        {/* Day 3 Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Day 3 - State & Events
          </p>
        </div>

      </div>
    </main>
  );
}

export default Day3;