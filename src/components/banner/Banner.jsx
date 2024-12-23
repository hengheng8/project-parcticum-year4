import banner from '../../assets/habit2.png';
import feature1 from '../../assets/feature-1.png';
import feature2 from '../../assets/feature-2.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* Header Text */}
      <h1 className="text-6xl text-center mt-14 font-bold">Build better Habits,</h1>
      <h1 className="text-6xl text-center mt-11 font-bold">Build a better life</h1>

      {/* Description */}
      <p className="text-center mt-8 text-xl">
        Harness the power of our personalized habit tracker app to streamline your
      </p>
      <p className="text-center mt-4 text-xl">everyday routines and achieve your goals</p>

      {/* Button */}
      <div className="button flex justify-center items-center mt-11">
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          onClick={() => navigate('/tracker')}
        >
          Try it for free
        </button>
      </div>

      {/* Centered Image */}
      <div className="mt-10">
        <img src={banner} alt="Habit Tracker" className="mx-auto w-full max-w-[800px] h-auto" />
      </div>

      {/* Feature Sections */}
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-28 w-full px-6 lg:px-16">
        <div className="flex-1 flex justify-center">
          <img src={feature1} alt="Feature 1" className="w-full max-w-[500px] lg:w-auto" />
          <div className="flex-1 flex flex-col justify-center lg:pl-12 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Organize Everything in Life</h3>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              Whether it's a work-related task or a personal goal, HabitNest helps you manage your
              tasks efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-28 w-full px-6 lg:px-16">
        <div className="flex-1 flex justify-center">
          <img src={feature2} alt="Feature 2" className="w-full max-w-[500px] lg:w-auto" />
          <div className="flex-1 flex flex-col justify-center lg:pl-12 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold mb-4">Stay Focused and Productive</h3>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              HabitNest helps you stay on track with tailored reminders and a streamlined workflow.
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-3xl mt-4">Simple and beautiful habit tracker</h1>
      <p className="mt-3 text-gray-400 text-1xl">Form new habits to achieve your goals</p>
    </div>
  );
};

export default Banner;
