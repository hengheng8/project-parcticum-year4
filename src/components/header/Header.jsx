import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100 m-5">
      <h1 className="text-2xl font-bold text-gray-800">HabitNest</h1>

      <nav className="flex space-x-6">
        <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
        <a href="#support" className="text-gray-600 hover:text-blue-600">Support/FAQ</a>
      </nav>

      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          SignIn
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
