import { useState } from 'react';
import { FaSearch,  FaEllipsisV, FaBell, FaCalendarAlt, FaUser, FaTasks, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import walking from '../../assets/Health-Benefits-of-Walks-with-Your-Dog.jpeg'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MyTask = () => {
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
  
  // State to manage visibility of details
  const [showDetails, setShowDetails] = useState(false);

  // Handle toggle of details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
      <Link to="/my-task" className="bg-black rounded-md flex items-center space-x-4 w-full px-4 py-2">
        <FaUser className="text-white text-xl" />
        <p className="text-white text-md font-medium">My Task</p>
      </Link>

      {/* Task Categories */}
      <Link to="/task-categories" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaSearch className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Task Categories</p>
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
  {/* First Box (40% Width) */}
  <div className="w-[50%] h-full bg-white rounded-[20px] p-4 shadow-md">
  {/* Heading with underline */}
  <h2 className="text-gray-800 text-lg font-bold relative inline-block">
    Vital Task
    <span className="absolute bottom-[-4px] left-0 w-[50%] h-[3px] bg-orange-400"></span>
  </h2>

  <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
  {/* Top Section */}
  <div className="flex items-center justify-between">
    {/* Checkbox */}
    <input
      type="checkbox"
      className="h-5 w-5 text-orange-400 border-gray-300 rounded focus:ring-orange-400"
    />
    {/* Title */}
    <p className="text-gray-800 font-semibold text-lg">
      Walking of the dog
    </p>
    {/* 3-Dot Icon */}
    <div className="text-gray-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 10a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </div>
  </div>

  {/* Description Section */}
<div className="mt-4 flex items-start justify-between space-x-4">
  {/* Description */}
  <p className="text-gray-700 text-sm flex-1">
    This is a brief description of the task. It provides more details about
    the task and its requirements. Ensure you review this before proceeding.
  </p>
  {/* Image */}
  <img
    src={walking}
    alt="Task"
    className="w-20 h-20 rounded-md object-cover ml-4"
  />
</div>
  {/* Details Section */}
  <div className="mt-6 flex items-center text-xs">
    {/* Priority */}
    <p className="text-red-500 font-medium flex-1">
      Priority: <span className="font-semibold">Extreme</span>
    </p>
    {/* Status */}
    <p className=" mr-4 text-red-500 font-medium flex-1 text-center">
      Status: <span className="font-semibold">Not Started</span>
    </p>
    {/* Created On */}
<p className=" ml-2flex items-center justify-end text-gray-600 text-sx ">
  Created on: <span className="font-semibold">20/09/2024</span>
</p>
  </div>


  </div>

  <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
  {/* Top Section */}
  <div className="flex items-center justify-between">
    {/* Checkbox */}
    <input
      type="checkbox"
      className="h-5 w-5 text-orange-400 border-gray-300 rounded focus:ring-orange-400"
    />
    {/* Title */}
    <p className="text-gray-800 font-semibold text-lg" onClick={toggleDetails}>
      Walking of the dog
    </p>
    {/* 3-Dot Icon */}
    <div className="text-gray-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 10a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    </div>
  </div>

  {/* Description Section */}
<div className="mt-4 flex items-start justify-between space-x-4">
  {/* Description */}
  <p className="text-gray-700 text-sm flex-1">
    This is a brief description of the task. It provides more details about
    the task and its requirements. Ensure you review this before proceeding.
  </p>
  {/* Image */}
  <img
    src={walking}
    alt="Task"
    className="w-20 h-20 rounded-md object-cover ml-4"
  />
</div>
  {/* Details Section */}
  <div className="mt-6 flex items-center text-xs">
    {/* Priority */}
    <p className="text-blue-600 font-medium flex-1">
      Priority: <span className="font-semibold">Extreme</span>
    </p>
    {/* Status */}
    <p className=" mr-4 text-blue-600 font-medium flex-1 text-center">
      Status: <span className="font-semibold">In Progress</span>
    </p>
    {/* Created On */}
<p className=" ml-2flex items-center justify-end text-gray-600 text-sx ">
  Created on: <span className="font-semibold">20/09/2024</span>
</p>
  </div>


  </div>
  
</div>





  {/* Second Box (60% Width) */}
<div className="w-[60%] h-full bg-white rounded-[20px] p-4 shadow-md">
  {/* Top Section with Image */}
  <div className="flex items-start mb-4">
    {/* Image on the left */}
    <img
      src={walking}
      alt="Walking of the dog"
      className="w-60 h-60 rounded-md object-cover"
    />
    
    {/* Task Details on the right */}
    <div className=" flex flex-col  h-full justify-center p-4 mt-8">
      {/* Task Title */}
      <p className="text-gray-800 font-semibold text-lg">
        Walking of the dog
      </p>

      {/* Priority */}
      <p className="text-red-500 font-medium text-sm mt-2">
        Priority: <span className="font-semibold">Extreme</span>
      </p>

      {/* Status */}
      <p className="text-red-500 font-medium text-sm mt-2">
        Status: <span className="font-semibold">Not Started</span>
      </p>

      {/* Created On */}
      <p className="text-gray-600 text-sm mt-2">
        Created on: <span className="font-semibold">20/09/2024</span>
      </p>
      
    </div>
    
  </div>
  <p className="text-gray-400 text-sm mt-4">
    <span className='text-sm font-bold text-gray-400'>Task Title: </span>  Document Submission.
  </p>
  <p className="text-gray-400 text-sm mt-4">
     <span className='text-sm font-bold text-gray-400'>Objective</span>To submit required documents for something important
  </p>
  <p className="text-gray-400 text-sm mt-4">
     <span className='text-sm font-bold text-gray-400'>Task Description</span>
     Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.
  </p>
  <div className='mt-4'>
    <h2 className='text-sm font-bold text-gray-400'>Additional Notes:</h2>
    <nav className='text-gray-400 text-sm'>
      <li>Ensure that the documents are authentic and up-to-date.</li>
      <li>Maintain confidentiality and security of sensitive information during the submission process.</li>
      <li>If there are specific guidelines or deadlines for submission, adhere to them diligently.</li>
    </nav>
  </div>
  <div className='flex'>
    <h2 className='text-sm font-bold text-gray-400'>Deadline for Submission:</h2>
    <p className='text-gray-400 text-sm ml-1'>End of Day</p>
  </div>
</div>

</div>

      </main>
    </div>
  );
};

export default MyTask;
