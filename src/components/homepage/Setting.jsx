import { useState } from 'react';
import { FaSearch,   FaBell, FaTrash, FaCalendarAlt, FaUser, FaEdit, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Settings = () => {
  const [userName, ] = useState("John Doe");
  const [showCalendar, setShowCalendar] = useState(false);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  


 
  
  return (
    <div className="bg-gray-100 h-screen">
      {/* Header */}
      <header className="bg-white w-full shadow-md fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50">
        <h1 className="text-xl font-bold text-gray-800">Habits vital</h1>
        <div className="flex items-center justify-center space-x-6 w-full">
          <div className="relative flex items-center w-2/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-600"
            />
            <FaSearch className="absolute right-3 text-gray-500" />
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          >
            <FaBell
              className={`text-lg ${notificationsEnabled ? 'text-blue-500' : 'text-gray-500'} hover:text-gray-700`}
            />
            {notificationsEnabled && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </div>
          <FaCalendarAlt
            className="text-gray-500 text-lg cursor-pointer hover:text-gray-700"
            onClick={() => setShowCalendar(!showCalendar)}
          />
          <div className="text-right ml-auto">
            <p className="text-sm text-gray-600 text-center">{dayOfWeek}</p>
            <p className="text-lg font-medium text-gray-800 ml-5">
              {formattedDate}
            </p>
          </div>
        </div>
      </header>

      {/* Calendar Popup */}
      {showCalendar && (
        <div className="absolute top-20 right-6 bg-white shadow-md rounded-lg p-4 z-10">
          <Calendar onChange={() => {}} value={currentDate} />
        </div>
      )}

      <main className="mt-36 flex h-screen">
        <div className="w-1/5 h-[800px] bg-yellow-500 rounded-[20px] relative flex flex-col">
          {/* Profile */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-md">
            <FaUser className="text-gray-700 text-3xl" />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <p className="text-gray-800 text-lg font-semibold">{userName || "Guest"}</p>
          </div>

          <nav className="mt-14 flex flex-col space-y-4 px-5 flex-grow">
          <div className="menu">
      {/* Dashboard (no link) */}
      <div className="flex items-center space-x-4 w-full px-4 py-2">
        <FaCalendarAlt className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Dashboard</p>
      </div>

      {/* Vital Task */}
      <Link to="/vital-task" className="flex items-center space-x-4 w-full px-4 py-2 ">
        <FaBell className=" text-xl" />
        <p className=" text-md font-medium ">Vital Task</p>
      </Link>

      {/* My Task */}
      <Link to="/my-task" className=" flex items-center space-x-4 w-full px-4 py-2">
        <FaUser className=" text-xl" />
        <p className=" text-md font-medium">My Task</p>
      </Link>

      {/* Task Categories */}
      <Link to="/task-categories" className="  flex items-center space-x-4 w-full px-4 py-2">
        <FaSearch className=" text-xl" />
        <p className=" text-md font-medium">Task Categories</p>
      </Link>

      {/* Settings */}
      <Link to="/settings" className="bg-black rounded-md flex items-center space-x-4 w-full px-4 py-2">
        <FaCalendarAlt className="text-white text-xl" />
        <p className="text-white text-md font-medium">Settings</p>
      </Link>

      {/* Help */}
      <Link to="/help" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaBell className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Help</p>
      </Link>
    </div>
          </nav>

          {/* Logout */}
          <div className="mt-auto mb-6 flex items-center justify-center space-x-2">
            <FaSignOutAlt className="text-gray-700 text-xl" />
            <button className="text-gray-800 text-md font-medium">Logout</button>
          </div>
        </div>

       {/* Main Content */}
         <div className="flex-1 h-[800px] bg-gray-200 rounded-[20px] p-4 flex space-x-4">
           <div className="w-full h-full bg-white rounded-[20px] p-4 shadow-md relative">
             
                

  </div>
  
</div>



      </main>
    </div>
  );
};

export default Settings;
