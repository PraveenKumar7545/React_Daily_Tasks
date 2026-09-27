import { Link } from "react-router-dom";

function Dashboard() {
  const savedStudent = JSON.parse(
    localStorage.getItem("day6_student")
  );

  const studentName = savedStudent?.name || "Praveen Kumar";
  const course = savedStudent?.course || "B.Tech IT";

  return (
    <div>
      <div className="bg-white rounded-xl shadow-sm p-8">
        <p className="text-sm text-gray-500">STUDENT DASHBOARD</p>

        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Welcome, {studentName}!
        </h2>

        <p className="text-gray-600 mt-3">
          Manage your student profile and keep your details saved.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          <div className="bg-gray-100 rounded-lg p-5">
            <p className="text-sm text-gray-500">Student Name</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              {studentName}
            </h3>
          </div>

          <div className="bg-gray-100 rounded-lg p-5">
            <p className="text-sm text-gray-500">Course</p>
            <h3 className="text-xl font-bold text-gray-900 mt-2">
              {course}
            </h3>
          </div>
        </div>

        <Link
          to="/day6/profile"
          className="inline-block mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700"
        >
          Edit My Profile
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;