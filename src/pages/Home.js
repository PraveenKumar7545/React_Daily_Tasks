import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="text-center px-6 py-20">

        <p className="text-sm font-semibold tracking-widest text-gray-500">
          7 DAYS REACT LEARNING
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          My React Learning Journey
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-7 mt-6">
          A practical React learning journey where I build small projects
          while learning React concepts step by step.
        </p>

        <Link
          to="/day1"
          className="inline-block mt-8 bg-gray-900 text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Start Learning
        </Link>

      </section>


      {/* Learning Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          What I Will Learn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Components */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Components
            </h3>

            <p className="text-gray-600 leading-6">
              Learn how to create reusable React components.
            </p>

          </div>


          {/* State */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              State
            </h3>

            <p className="text-gray-600 leading-6">
              Learn how React manages changing data.
            </p>

          </div>


          {/* API */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              API
            </h3>

            <p className="text-gray-600 leading-6">
              Learn how to fetch and display API data.
            </p>

          </div>


          {/* Routing */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Routing
            </h3>

            <p className="text-gray-600 leading-6">
              Learn how to create multiple pages with React Router.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;