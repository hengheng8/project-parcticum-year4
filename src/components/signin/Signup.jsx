import Rsign from '../../assets/R 2.png';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa'; // Import necessary icons

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-In form submitted');
  };

  // Arrays of placeholders and corresponding icons
  const placeholders = [
    'Enter your first name',
    'Enter your last name',
    'Enter your Username',
    'Enter your Email',
    'Enter your password',
    'Confile Password',
  ];

  const icons = [
    <FaUser key="user1" className="ml-3 text-gray-500" />,
    <FaUser key="user2" className="ml-3 text-gray-500" />,
    <FaUser key="user2" className="ml-3 text-gray-500" />,
    <FaEnvelope key="email" className="ml-3 text-gray-500" />,
    <FaLock key="password" className="ml-3 text-gray-500" />,
    <FaLock key="confirmPassword" className="ml-3 text-gray-500" />,
    <FaPhone key="phone" className="ml-3 text-gray-500" />,
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Centered Box */}
      <div className="flex w-full max-w-4xl h-3/4 bg-white rounded-md shadow-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-center items-center bg-gray-50">
          <img 
            src={Rsign} 
            alt="Sign In" 
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Right Side: Sign-In Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Input Fields */}
            {placeholders.map((placeholder, index) => (
              <div 
                key={index} 
                className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-400"
              >
                {/* Render corresponding icon/image */}
                {icons[index]}
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full px-2 py-2 pl-10 border-none focus:outline-none"
                  required
                />
              </div>
            ))}

            {/* Checkbox for terms and conditions */}
            <div className="flex items-center space-x-2 mt-4">
              <input type="checkbox" id="terms" required className="h-4 w-4" />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to all terms and conditions
              </label>
            </div>

            {/* Register Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 w-full"
              >
                Register
              </button>
            </div>

            {/* Sign-Up Link */}
            <div className="flex justify-center mt-4">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 font-bold hover:text-blue-600">
                  Sign  in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
