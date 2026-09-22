import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold"
        >
          React Learning
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 text-sm">

          <Link
            to="/"
            className="hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            to="/day1"
            className="hover:text-gray-300"
          >
            Day 1
          </Link>

          <Link
            to="/day2"
            className="hover:text-gray-300"
          >
            Day 2
          </Link>

          <Link
            to="/day3"
            className="hover:text-gray-300"
          >
            Day 3
          </Link>

          <Link
            to="/day4"
            className="hover:text-gray-300"
          >
            Day 4
          </Link>

          <Link
            to="/day5"
            className="hover:text-gray-300"
          >
            Day 5
          </Link>

          <Link
            to="/day6"
            className="hover:text-gray-300"
          >
            Day 6
          </Link>

          <Link
            to="/day7"
            className="hover:text-gray-300"
          >
            Day 7
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;