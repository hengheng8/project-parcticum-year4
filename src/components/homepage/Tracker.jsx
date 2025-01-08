import { useState } from 'react';
import { FaSearch, FaUpload,  FaEllipsisV, FaBell, FaCalendarAlt, FaUser, FaTasks, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import pending from '../../assets/pending-tasks.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import walking from '../../assets/Health-Benefits-of-Walks-with-Your-Dog.jpeg'
const Tracker = () => {
  const [userName, ] = useState("John Doe");
  const [showCalendar, setShowCalendar] = useState(false);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [taskStatus,] = useState('In Progress');
  
  const [taskName,] = useState("Task Image");
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const closeModal = () => setIsModalOpen(false);
  const [isChecked, setIsChecked] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // Determine the status text based on checkbox state
  const status = isChecked ? "Completed" : "Not Started";
  
  return (
    <div className="bg-gray-100 h-screen">
      {/* Header */}
      <header className="bg-white w-full shadow-md fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50">
        <h1 className="text-xl font-bold text-gray-800">Habits Tracker</h1>
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
      <Link to="/tracker" className=" bg-black rounded-md flex items-center space-x-4 w-full px-4 py-2">
        <FaCalendarAlt className="text-white text-xl" />
        <p className="text-white text-md font-medium">Dashboard</p>
      </Link>

      {/* Vital Task */}
      <Link to="/vital-task" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaBell className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">Vital Task</p>
      </Link>

      {/* My Task */}
      <Link to="/my-task" className="flex items-center space-x-4 w-full px-4 py-2">
        <FaUser className="text-gray-700 text-xl" />
        <p className="text-gray-800 text-md font-medium">My Task</p>
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
        <div className="flex-1 h-[800px] bg-gray-200 rounded-[20px] p-4">
          <p className="text-gray-700 ml-4 text-3xl font-bold">Welcome back, {userName}</p>
          {/* Task Box */}
          <div
  className="border-2 border-gray-500 rounded-[15px] p-4 w-full max-w-[100%] mx-auto mt-4 min-h-[720px]"
  style={{ maxHeight: 'calc(100vh - 10px)' }}
>

            <div className="w-full h-[690px] rounded-[15px] flex space-x-4">
              <div className="w-[60%] flex flex-col space-y-4">
                {/* Left Box */}
                <div className="flex-1 bg-gray-100 w-[100%] p-4 rounded-[10px]">
                  {/* To-Do Section */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <img src={pending} alt="To-Do Icon" className="w-6 h-6" />
                      <p className="text-gray-700 text-lg font-semibold">To-Do</p>
                    </div>
                    <button onClick={toggleModal} className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition ease-in duration-200">
                    
          <FaPlus className="text-white text-md" />
          <span>Add Task</span>
        
      </button>
      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 backdrop-blur-md z-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-md w-[700px] h-[600px] ">
      {/* Modal Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Add New Task</h2>
        <button
          className="text-blue-500 underline"
          onClick={closeModal}
        >
          Go Back
        </button>
      </div>

      {/* Task Form */}
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="task-title" className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="task-title"
            placeholder="Enter task title"
            className="w-full p-2 border rounded-md mt-2"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="task-date" className="text-sm font-medium text-gray-700">Date</label>
          <div className="relative mt-2">
            <input
              type="date"
              id="task-date"
              className="w-full p-2 border rounded-md pl-10"
            />
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Priority */}
        <div>
          <label className="text-sm font-medium text-gray-700">Priority</label>
          <div className="flex space-x-6 mt-2">
            {/* Extreme */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Extreme</span>
              </div>
              <input
                type="checkbox"
                id="priority-extreme"
                className="form-checkbox text-red-500"
              />
            </div>

            {/* Moderate */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Moderate</span>
              </div>
              <input
                type="checkbox"
                id="priority-moderate"
                className="form-checkbox text-blue-500"
              />
            </div>

            {/* Low */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Low</span>
              </div>
              <input
                type="checkbox"
                id="priority-low"
                className="form-checkbox text-green-500"
              />
            </div>
          </div>
        </div>

        {/* Task Description and Upload Image */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {/* Task Description */}
          <div className="flex-1">
            <label htmlFor="task-description" className="text-sm font-medium text-gray-700">Task Description</label>
            <textarea
              id="task-description"
              placeholder="Start writing here"
              className="w-full p-2 border rounded-md mt-2"
              rows="4"
            ></textarea>
          </div>

          {/* Upload Image */}
          {/* Upload Image */}
          <div className="flex-1">
  <label className="text-sm font-medium text-gray-700">Upload Image</label>
  <div className="flex flex-col items-center border border-dashed p-4 rounded-md mt-2 space-y-3">
    <FaUpload className="text-gray-500 text-2xl" />
    <span className="text-gray-500 text-sm text-center">Drag or drop files here</span>

    {/* Hidden File Input */}
    <input
      type="file"
      id="file-upload"
      className="hidden"
      onChange={(e) => console.log(e.target.files[0])} // Replace with your file handling logic
    />

    {/* Trigger for File Input */}
    <button
      onClick={() => document.getElementById('file-upload').click()}
      className="text-white bg-blue-500 px-4 py-2 rounded-md text-sm"
    >
      Browse
    </button>
  </div>
</div>
</div>

        {/* Done Button */}
        <div className="flex justify-start">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
)}





                  </div>

                  {/* Task Details */}
<div className="bg-white p-2 rounded-[12px] shadow-md mt-4 min-h-[80px]">
  <div className="flex justify-between items-start">
    <div className="flex items-center">
      <input
        type="checkbox"
        id="task-checkbox"
        className="w-3 h-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded-full"
      />
      <label htmlFor="task-checkbox" className="ml-4 text-gray-700 text-xl font-bold">
        Attend Birthday Nicho Party
      </label>
    </div>
    <FaEllipsisV className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 rotate-90" />
  </div>
  
  {/* Description */}
  <div className="flex items-center space-x-3 mt-3">
    <div className="mt-1 ml-[30px]">
      <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis line-clamp-2">
        Prepare gifts and bring a dessert for the party. Arrive by 7 PM at the venue.
      </p>
    </div>

    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
      <img
        src={walking}
        alt={taskName}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>

  {/* Status */}
  <div className="mt-4 text-sm text-gray-600">
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Priority:</p>
        <span className="text-yellow-500">Moderate</span>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Status:</p>
        <span className={`text-${taskStatus === 'Not Started' ? 'red' : 'green'}-500`}>
          {taskStatus}
        </span>
      </div>
      <div className="mt-1 flex">
        <p className="font-semibold">Created On:</p>
        <p className="text-gray-500">24/05/2024</p>
      </div>
    </div>
  </div>
</div>


{/* Task Details */}
<div className="bg-white p-2 rounded-[12px] shadow-md mt-4 min-h-[80px]">
  <div className="flex justify-between items-start ">
    <div className="flex items-center">
      <input
        type="checkbox"
        id="task-checkbox"
        className="w-3 h-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded-full"
      />
      <label htmlFor="task-checkbox" className="ml-4 text-gray-700 text-xl font-bold">
        Attend Birthday Nicho Party
      </label>
    </div>
    <FaEllipsisV className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 rotate-90" />
  </div>
  
  {/* Description */}
  <div className="flex items-center space-x-3 mt-3">
    <div className="mt-1 ml-[30px]">
      <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis line-clamp-2">
        Prepare gifts and bring a dessert for the party. Arrive by 7 PM at the venue.
      </p>
    </div>

    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
      <img
        src={walking}
        alt="Party Preparation"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>

  {/* Status */}
  <div className="mt-4 text-sm text-gray-600">
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Priority:</p>
        <span className="text-yellow-500">Moderate</span>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Status:</p>
        <span className={`text-${taskStatus === 'In Progress' ? 'blue' : 'green'}-500`}>
          {taskStatus}
        </span>
      </div>
      <div className="mt-1 flex">
        <p className="font-semibold">Created On:</p>
        <p className="text-gray-500">24/05/2024</p>
      </div>
    </div>
  </div>
</div>

{/* Divider Line */}
<div className="border-t-2 border-gray-300 my-9"></div>


{/* Task Details - Completed */}
<div className="bg-white p-2 rounded-[12px] shadow-md mt-4 min-h-[80px]">
  <div className="flex justify-between items-start border-b-2 border-gray-300 pb-4 mb-4">
    <div className="flex items-center">
      <input
        type="checkbox"
        id="task-checkbox-completed"
        checked
        readOnly
        className="w-3 h-4 text-green-500 focus:ring-green-400 border-gray-300 rounded-full"
      />
      <label
        htmlFor="task-checkbox-completed"
        className="ml-4 text-gray-700 text-xl font-bold"
      >
        Finish Project Report
      </label>
    </div>
    <FaEllipsisV className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 rotate-90" />
  </div>

  {/* Description */}
  <div className="flex items-center space-x-2 ">
    <div className="mt-1 ml-[30px]">
      <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis line-clamp-2">
        Submit the final project report to the manager by email before the deadline.
      </p>
    </div>
    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
      <img
        src={walking}
        alt="Report Submission"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>

  {/* Status */}
  <div className="mt-4 text-sm text-gray-600">
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Priority:</p>
        <span className="text-green-500">Low</span>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">Status:</p>
        <span className="text-green-500">In Progress</span>
      </div>
      <div className="mt-1 flex">
        <p className="font-semibold">Completed On:</p>
        <p className="text-gray-500">25/05/2024</p>
      </div>
    </div>
  </div>
</div>

                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-4 w-[45%]">
              <div className="bg-white p-4 h-[30%] rounded-[10px]">
      {/* Task Status Header */}
      <div className="flex items-center mb-4">
        <FaTasks className="text-white-700 text-2xl mr-2" />
        <p className="text-gray-700 text-lg font-semibold">Task Status</p>
      </div>

      {/* Dashboard Content */}
      <div className="flex justify-around items-center">
        {/* Completed */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-16 h-16">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#10b981"
                strokeWidth="6"
                strokeDasharray="175.84"
                strokeDashoffset="28.13"
                strokeLinecap="round"
              />
            </svg>
            <p className="absolute inset-0 flex items-center justify-center text-green-500 font-bold text-lg">
              84%
            </p>
          </div>
          <p className="mt-2 text-sm flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        <span className="text-green-500 font-medium">Completed</span>
      </p>
        </div>

        {/* In Progress */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-16 h-16">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="6"
                strokeDasharray="175.84"
                strokeDashoffset="94.36"
                strokeLinecap="round"
              />
            </svg>
            <p className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-lg">
              46%
            </p>
          </div>
          <p className="mt-2 text-sm flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        <span className="text-blue-500 font-medium">In Progress</span>
      </p>
        </div>

        {/* Not Started */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg className="w-16 h-16">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#f87171"
                strokeWidth="6"
                strokeDasharray="175.84"
                strokeDashoffset="152.18"
                strokeLinecap="round"
              />
            </svg>
            <p className="absolute inset-0 flex items-center justify-center text-red-500 font-bold text-lg">
              13%
            </p>
          </div>
          <p className="mt-2 text-sm flex items-center">
        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
        <span className="text-red-500 font-medium">Not Started</span>
      </p>
        </div>
      </div>
    </div>

    <div className="bg-white p-2 rounded-[12px] shadow-md mt-9 min-h-[80px]">
      <div className="flex justify-between items-start border-b-2 border-gray-300 pb-4 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="task-checkbox-completed"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-3 h-4 text-green-500 focus:ring-green-400 border-gray-300 rounded-full"
          />
          <label
            htmlFor="task-checkbox-completed"
            className="ml-4 text-gray-700 text-xl font-bold"
          >
            Finish Project Report
          </label>
        </div>
        <FaEllipsisV className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 rotate-90" />
      </div>

      {/* Description */}
      <div className="flex items-center space-x-2">
        <div className="mt-1 ml-[30px]">
          <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis line-clamp-2">
            Submit the final project report to the manager by email before the deadline.
          </p>
          <p
            className={`text-sm mt-2 font-semibold ${
              isChecked ? "text-green-600" : "text-orange-600"
            }`}
          >
            Status: {status}
          </p>
          <p className="text-gray-500 text-sm mt-1">Created on: 20/02/2024</p>
        </div>
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
          <img
            src={walking}
            alt="Report Submission"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    
    
  </div>
  {/* Divider Line */}
<div className="border-t-2 border-gray-300 my-9"></div>
  <div className="bg-white p-2 rounded-[12px] shadow-md mt-4 min-h-[80px]">
      <div className="flex justify-between items-start border-b-2 border-gray-300 pb-4 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="task-checkbox-completed"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-3 h-4 text-green-500 focus:ring-green-400 border-gray-300 rounded-full"
          />
          <label
            htmlFor="task-checkbox-completed"
            className="ml-4 text-gray-700 text-xl font-bold"
          >
            Finish Project Report
          </label>
        </div>
        <FaEllipsisV className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 rotate-90" />
      </div>

      {/* Description */}
      <div className="flex items-center space-x-2">
        <div className="mt-1 ml-[30px]">
          <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis line-clamp-2">
            Submit the final project report to the manager by email before the deadline.
          </p>
          <p
            className={`text-sm mt-2 font-semibold ${
              isChecked ? "text-green-600" : "text-orange-600"
            }`}
          >
            Status: {status}
          </p>
          <p className="text-gray-500 text-sm mt-1">Created on: 20/02/2024</p>
        </div>
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
          <img
            src={walking}
            alt="Report Submission"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
</div>
</div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Tracker;
