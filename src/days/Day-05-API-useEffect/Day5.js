import UserList from "./UserList";
import MovieExplorer from "./MovieExplorer";

function Day5() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Day Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 05
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
             API & useEffect
          </h1>

          <p className="text-gray-600 mt-3">
            Learning how to fetch API data and display it in React.
          </p>
        </div>

        {/* Task 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Task 1 - JSONPlaceholder Users API
          </h2>

          <UserList />
        </section>

        {/* Task 2 */}
        <section className="mt-16">
          <MovieExplorer />
        </section>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Day 5 - API & useEffect
          </p>
        </div>

      </div>
    </main>
  );
}

export default Day5;