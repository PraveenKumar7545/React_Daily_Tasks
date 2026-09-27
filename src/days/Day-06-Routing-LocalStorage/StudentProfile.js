import { useState } from "react";
import { Link } from "react-router-dom";

function StudentProfile() {
  const savedStudent = JSON.parse(
    localStorage.getItem("day6_student")
  );

  const [name, setName] = useState(
    savedStudent?.name || "Praveen Kumar"
  );

  const [course, setCourse] = useState(
    savedStudent?.course || "B.Tech IT"
  );

  const [email, setEmail] = useState(
    savedStudent?.email || ""
  );

  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const student = {
      name: name,
      course: course,
      email: email,
    };

    localStorage.setItem(
      "day6_student",
      JSON.stringify(student)
    );

    setMessage("Profile saved successfully!");
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900">
        My Student Profile
      </h2>

      <p className="text-gray-600 mt-2">
        Update your details and save them in your browser.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Course
          </label>

          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            placeholder="Enter your course"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700"
        >
          Save Profile
        </button>
      </form>

      {message && (
        <p className="text-center text-gray-700 text-sm mt-5">
          {message}
        </p>
      )}

      <div className="text-center mt-6">
        <Link
          to="/day6"
          className="text-sm font-semibold text-gray-900 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default StudentProfile;