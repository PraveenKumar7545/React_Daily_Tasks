import LoginForm from "./LoginForm";

function Day4() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Day 4 Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 04
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Forms
          </h1>

          <p className="text-gray-600 mt-3">
            Learning form handling and managing input values in React.
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Day 4 Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Day 4 - Forms
          </p>
        </div>

      </div>
    </main>
  );
}

export default Day4;