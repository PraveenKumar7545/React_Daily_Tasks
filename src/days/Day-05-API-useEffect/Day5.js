import MovieExplorer from "./MovieExplorer";
import UserList from "./UserList";

function Day5() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Day 5 Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 05
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            API & useEffect
          </h1>

          <p className="text-gray-600 mt-3">
            Fetching data from an API and displaying it in React.
          </p>
        </div>

        {/* API Users */}
        <UserList />

        <MovieExplorer />

        {/* Day 5 Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Day 5 - API & useEffect
          </p>
        </div>

      </div>
    </main>
  );
}

export default Day5;