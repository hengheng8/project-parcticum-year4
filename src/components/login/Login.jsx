

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username/Email Field */}
          <div>
            <label htmlFor="username" className="block text-gray-600 font-semibold">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username or email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-600 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Dont have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
