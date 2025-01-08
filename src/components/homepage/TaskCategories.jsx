import { useState } from 'react';
import { FaSearch,   FaBell, FaTrash, FaCalendarAlt, FaUser, FaEdit, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TaskCategories = () => {
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
  
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  
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
      <Link to="/tracker" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaCalendarAlt className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Dashboard</p>
      </Link>

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
      <Link to="/task-categories" className=" bg-black rounded-md flex items-center space-x-4 w-full px-4 py-2">
        <FaSearch className="text-white text-xl" />
        <p className="text-white text-md font-medium">Task Categories</p>
      </Link>

      {/* Settings */}
      <Link to="/settings" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaCalendarAlt className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Settings</p>
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
             
                 <div className="flex justify-between items-center">
                     <h2 className="text-gray-800 text-2xl font-bold relative inline-block">
                         Task Categories
                        <span className="absolute bottom-[-4px] left-0 w-[50%] h-[3px] bg-orange-400"></span>
                       </h2>

                       <Link
      to="/task-categories"
      className="text-gray-800 text-md font-bold relative inline-block"
    >
      Go Back
      <span className="absolute bottom-[-4px] left-0 w-[50%] h-[3px] bg-blue-400"></span>
    </Link>
  </div>

  <div className="mt-6">
      {/* Add Category Button */}
      <Link to="/desired-path">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
          Add Category
        </button>
      </Link>
    </div>

  <div className="mt-10 flex justify-between items-center">
      {/* Task Status Title */}
      <h2 className="text-gray-800 text-lg font-bold relative inline-block">
        Task Status
        <span className="absolute bottom-[-4px] left-0 w-[50%] h-[3px] bg-green-400"></span>
      </h2>

      {/* Add Task Status Button */}
      <button onClick={toggleBox} className="flex items-center space-x-2 px-2 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200">
        <FaPlus className="text-white" />
        <span>Add Task Status</span>
      </button>
    </div>

    <div className="mt-10">
  {/* Task Table */}
  <div className="overflow-x-auto  border border-gray-300 rounded-lg shadow-md">
    <table className="min-w-full bg-white rounded-lg">
      <thead>
        <tr className="bg-gray-200 text-gray-700 text-left">
          <th className="px-6 py-3 text-sm font-semibold">SN</th>
          <th className="px-6 py-3 text-sm font-semibold">Task Status</th>
          <th className="px-6 py-3 text-sm font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Row 1 */}
        <tr className="border-t">
          <td className="px-6 py-4 text-sm text-gray-800">1</td>
          <td className="px-6 py-4 text-sm text-gray-800">Completed</td>
          <td className="px-6 py-4 text-sm text-gray-800 flex">
            <button className="bg-green-500 rounded-md mr-2 px-4 py-2 text-white hover:underline flex items-center">
              <FaEdit className="mr-1" /> Edit
            </button>
            <button className="bg-green-500 rounded-md px-4 py-2 text-white hover:underline flex items-center">
              <FaTrash className="mr-1" /> Delete
            </button>
          </td>
        </tr>

        {/* Row 2 */}
        <tr className="border-t">
          <td className="px-6 py-4 text-sm text-gray-800">2</td>
          <td className="px-6 py-4 text-sm text-gray-800">Not Started</td>
          <td className="px-6 py-4 text-sm text-gray-800 flex ">
            <button className="bg-green-500 rounded-md mr-2 px-4 py-2 text-white hover:underline flex items-center">
              <FaEdit className="mr-1" /> Edit
            </button>
            <button className="bg-green-500 rounded-md px-4 py-2 text-white hover:underline flex items-center">
              <FaTrash className="mr-1" /> Delete
            </button>
          </td>
        </tr>

        {/* Row 3 */}
        <tr className="border-t">
          <td className="px-6 py-4 text-sm text-gray-800">3</td>
          <td className="px-6 py-4 text-sm text-gray-800">In Progress</td>
          <td className="px-6 py-4 text-sm text-gray-800 flex ">
            <button className=" bg-green-500 rounded-md mr-2 px-4 py-2 text-white hover:underline flex items-center">
              <FaEdit className="mr-1" /> Edit
            </button>
            <button className="bg-green-500 rounded-md px-4 py-2 text-white hover:underline flex items-center">
              <FaTrash className="mr-1" /> Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="my-8 border-t border-gray-300"></div>
  
</div>

  </div>
  
</div>



      </main>
    </div>
  );
};

export default TaskCategories;
