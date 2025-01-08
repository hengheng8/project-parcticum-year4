import { FaUser, FaLock } from 'react-icons/fa'; // Importing icons from react-icons
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'; // Social Media Icons
import right from '../../assets/ach3 1.png';

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign-In form submitted');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container */}
      <div className="flex w-3/4 max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Sign-In Form */}
        <div className="w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Sign In</h2>
            <form onSubmit={handleSignIn} className="space-y-4">
              {/* Username/Email Field */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username or email"
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-400"
                />
                <label
                  htmlFor="remember"
                  className="text-gray-600 text-sm font-medium"
                >
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </form>

            {/* Social Media Login */}
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">Login with</p>
              <div className="flex justify-center space-x-4 mt-2">
                <FaFacebook className="text-blue-700 text-xl cursor-pointer hover:scale-110 transition-transform" />
                <FaGoogle className="text-red-500 text-xl cursor-pointer hover:scale-110 transition-transform" />
                <FaTwitter className="text-blue-400 text-xl cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Create Account */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don’t have an account?{' '}
                <a href="#create-account" className="text-blue-500 hover:underline">
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex justify-center items-center bg-gray-100">
          <img
            src={right}
            alt="Sign In Illustration"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
