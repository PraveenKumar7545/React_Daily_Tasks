import StudentList from "./StudentList";

function Day2() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Day 2 Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 02
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Props & Lists
          </h1>

          <p className="text-gray-600 mt-3">
            Passing data using props and displaying lists using map().
          </p>
        </div>

        {/* Student Cards */}
        <StudentList />

        {/* Day 2 Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Day 2 - Props & Lists
          </p>
        </div>

      </div>
    </main>
  );
}

export default Day2;