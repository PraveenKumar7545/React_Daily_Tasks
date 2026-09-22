function ProfileCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">

      {/* Profile Image */}
     <img
  src="/img/profile.jpeg"
  alt="Praveen Kumar"
  className="w-28 h-28 rounded-full object-cover object-top mx-auto mt-8 mb-6 border-4 border-gray-200"
/>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-900">
        Praveen Kumar
      </h1>

      {/* Role */}
      <h3 className="text-lg font-semibold text-gray-600 mt-2">
        Java Full Stack Developer
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7 mt-4">
        I am learning React.js by building practical projects
        and improving my frontend development skills.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          Java
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          React
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          MySQL
        </span>

        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          Git
        </span>

      </div>

      {/* GitHub Button */}
      <a
        href="https://github.com/PraveenKumar7545?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-7 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
      >
        View My Projects
      </a>

    </div>
  );
}

export default ProfileCard;