function StudentCard({ name, course, year, skills }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900">
        {name}
      </h2>

      <p className="text-gray-600 mt-2">
        Course: {course}
      </p>

      <p className="text-gray-600">
        Year: {year}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StudentCard;