import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600">
        Loading users...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-gray-600">
        {error}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-xl font-bold text-gray-900">
            {user.name}
          </h2>

          <p className="text-gray-600 mt-3">
            Email: {user.email}
          </p>

          <p className="text-gray-600 mt-1">
            Phone: {user.phone}
          </p>

          <p className="text-gray-600 mt-1">
            City: {user.address.city}
          </p>

          <p className="text-gray-600 mt-1">
            Company: {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserList;