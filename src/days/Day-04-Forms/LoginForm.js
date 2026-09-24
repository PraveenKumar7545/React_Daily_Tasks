import { useState } from "react";

function LoginForm() {
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isCreateAccount) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setMessage("Please fill all the fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      setMessage("Account created successfully.");
    } else {
      if (!formData.email || !formData.password) {
        setMessage("Please enter email and password.");
        return;
      }

      setMessage("Login successful.");
    }
  }

  function switchForm() {
    setIsCreateAccount(!isCreateAccount);
    setMessage("");
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8">

      <h2 className="text-2xl font-bold text-gray-900 text-center">
        {isCreateAccount ? "Create Account" : "Student Login"}
      </h2>

      <p className="text-gray-600 text-center mt-2">
        {isCreateAccount
          ? "Create your account to continue"
          : "Enter your login details"}
      </p>

      <form onSubmit={handleSubmit} className="mt-6">

        {isCreateAccount && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
            />
          </div>
        )}

        <div className={isCreateAccount ? "mt-5" : ""}>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
          />
        </div>

        {isCreateAccount && (
          <div className="mt-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-gray-900"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          {isCreateAccount ? "Create Account" : "Login"}
        </button>

      </form>

      {message && (
        <p className="text-center text-gray-600 text-sm mt-5">
          {message}
        </p>
      )}

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          {isCreateAccount
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>

        <button
          onClick={switchForm}
          className="text-sm font-semibold text-gray-900 mt-1 hover:underline"
        >
          {isCreateAccount ? "Login" : "Create Account"}
        </button>
      </div>

    </div>
  );
}

export default LoginForm;