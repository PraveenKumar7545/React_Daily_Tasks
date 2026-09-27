import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import StudentProfile from "./StudentProfile";

function Day6() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold tracking-widest text-gray-500">
            DAY 06
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Routing & LocalStorage
          </h1>

          <p className="text-gray-600 mt-3">
            Navigate between pages and save student details in the browser.
          </p>
        </div>

        <nav className="flex justify-center gap-3 mb-8">
          <Link
            to="/day6"
            className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
          >
            Dashboard
          </Link>

          <Link
            to="/day6/profile"
            className="bg-white text-gray-900 border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-200"
          >
            My Profile
          </Link>
        </nav>

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<StudentProfile />} />
        </Routes>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Day 6 - Routing & LocalStorage
          </p>
        </div>
      </div>
    </main>
  );
}

export default Day6;