import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
import folder from '../../assets/folder (1).png';
import moon from '../../assets/moon.png';
import add from '../../assets/add (1).png';
import listmenu from '../../assets/list (1).png';
import settings from '../../assets/settings (1).png';
import share from '../../assets/share (1).png';
import document from '../../assets/folder (2).png';
import achieve from '../../assets/archive.png'
import sunny from '../../assets/sunny.png'
import sunrise from '../../assets/sunrise (1).png'
import night from '../../assets/crescent-moon.png'
import User from '../../assets/user.png'
import pay from '../../assets/credit-card.png'
const MangeHabits = () => {
  const [showTaskInput, setShowTaskInput] = useState(false); 
  const [newTask, setNewTask] = useState('');
  const [sidebarTasks, setSidebarTasks] = useState([]); 
  const [timeOfDay, setTimeOfDay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const getTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 12) {
        return "Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Afternoon";
      } else if (currentHour >= 18 && currentHour < 21) {
        return "Evening";
      } else {
        return "Night";
      }
    };

    setTimeOfDay(getTimeOfDay());

    // Optional: Update every hour for accuracy
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 3600000); // 1 hour

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleAddTask = () => {
    setShowTaskInput(true);
  };

  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskSubmit = () => {
    if (newTask) {
      const task = newTask;
      setSidebarTasks([task, ...sidebarTasks]);
      setShowTaskInput(false);
      setNewTask('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-600">
      <div className="bg-black w-[28%] h-full p-8 shadow-lg rounded-r-lg">
        <div className="flex space-x-4 mb-6 border-2 border-gray-300 shadow-lg rounded-lg p-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-10 h-10 rounded-full border-4 border-purple-600 object-cover"
          />
          <p className="text-xl mt-1 font-semibold text-white">John Doe</p>
        </div>

        <div className="space-y-6">
          {sidebarTasks.length > 0 && (
            <div className="space-y-4">
              {sidebarTasks.map((task, index) => (
                <div key={index} className="bg-gray-500 rounded-lg p-3 m-2 text-white">{task}</div>
              ))}
            </div>
          )}

          <h3 className="text-white font-semibold text-md mt-8">Areas</h3>
          <div className="flex items-center space-x-4 m-9 hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg">
            <img src={folder} alt="All Habits" className="w-[20px] h-[20px] filter invert" />
            <p className="text-white text-sm font-semibold">All Habits</p>
          </div>

          <div className="flex items-center space-x-4 m-9 hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg">
      <img src={moon} alt="Time Icon" className="w-[20px] h-[20px] filter invert" />
      <p className="text-white text-sm font-semibold">{timeOfDay}</p>
    </div>

          {showTaskInput ? (
            <div className="flex items-center space-x-4 m-9 p-5">
              <input
                type="text"
                value={newTask}
                onChange={handleTaskInputChange}
                placeholder="Assign your task"
                className="p-2 rounded-md text-black"
              />
              <img
                src={document}
                alt="Document Icon"
                className="w-[205px] h-[25px] filter invert cursor-pointer"
                onClick={handleTaskSubmit}
              />
            </div>
          ) : (
            <div className="flex items-center space-x-4 m-9 p-5 cursor-pointer" onClick={handleAddTask}>
              <img src={add} alt="New Areas" className="w-[25px] h-[25px] filter invert" />
              <p className="text-white text-sm font-semibold">New Areas</p>
            </div>
          )}

          <h3 className="text-white font-semibold text-md mt-8">PREFENCES</h3>

          <Link to="/manage-habits">
            <div className="flex items-center space-x-4 m-9 hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg">
              <img src={listmenu} alt="Manage Habits" className="w-[20px] h-[20px] filter invert" />
              <p className="text-white text-sm font-semibold">Manage Habits</p>
            </div>
          </Link>

          <div>
  {/* Trigger Button */}
  <div
    onClick={handleOpenModal}
    className="flex items-center space-x-4 m-9 hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg cursor-pointer"
  >
    <img
      src={settings}
      alt="App Settings"
      className="w-[20px] h-[20px] filter invert"
    />
    <p className="text-white text-sm font-semibold">App Settings</p>
  </div>

  {/* Modal */}
   {isModalOpen && (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
    <div
      className="bg-gray-600 rounded-lg shadow-lg flex"
      style={{
        width: '90%',
        height: '80%',
        maxWidth: '700px',
        maxHeight: '100vh',
      }}
      >
      {/* Left Section */}
      <div className="flex-[1] flex flex-col p-4 space-y-4">
        <h3 className="text-white font-semibold text-sm">ACCOUNT SETTINGS</h3>
      <div className="hover:bg-white ml-2 hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg flex items-center space-x-4">
      <img
      src={User}
      alt="account settings"
      className="w-[20px] h-[20px] filter invert "
      />
      <p className="text-white text-sm font-semibold">Profile</p>
     </div>
        <div className="flex items-center space-x-4 m-2">
          <img src={pay} alt="Resources" className="w-[17px] h-[17px] filter invert" />
           <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
              Payment
            </p>
        </div>
        </div>


      {/* Vertical Line */}
      <div className="w-[1px] bg-gray-400"></div>

      {/* Right Section */}
      <div className="flex-[2] flex  p-4">
        <p className="text-white text-lg">Right Content</p>
      </div>
    </div>
  </div>
)}
</div>





          <div className="flex items-center space-x-4 m-9 p-2 rounded-md hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg">
           <img src={share} alt="Resources" className="w-[20px] h-[20px] filter invert" />
            <p className="text-white text-sm font-semibold">Resources</p>
            </div>

        </div>
      </div>

      <div className="flex-1 h-full ml-4">
      <div className="flex w-full h-full border-t border-b border-white relative">
  {/* Manage Habit Section */}
  <div className="w-0.6/2 text-white text-2xl font-bold p-4">
    <div className="flex flex-col h-full">
      {/* Manage Habit Title */}
      <span>Manage Habit</span>

      {/* Line Under Manage Habit */}
      <div className="w-[338px] h-[1px] bg-white my-4"></div>

      {/* Resources Section */}
      <div className="group flex items-center justify-between space-x-4 py-3 px-10 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <img src={achieve} alt="Resources" className="w-[20px] h-[20px] filter invert" />
          <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
            Active
          </p>
        </div>
        <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300 ">
         0
        </div>
      </div>






      <div className="group flex items-center justify-between space-x-4  py-4 px-10 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
        <div className="flex items-center space-x-4">
        <img src={achieve} alt="Resources" className="w-[20px] h-[20px] filter invert" />
        <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
           Archived
        </p>
        </div>
      <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300 ">
          0
      </div>
      </div>
      <h3 className="text-white font-semibold text-sm mt-3">Time of the day</h3>

      <div className="group flex items-center justify-between space-x-4 py-3 px-10 mt-4 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
        <div className="flex items-center space-x-4">
          <img src={achieve} alt="Resources" className="w-[20px] h-[20px] filter invert" />
           <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
              Any Time
            </p>
        </div>
        <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300">
         0
       </div>
      </div>
     <div className="group flex items-center justify-between space-x-4 py-3 px-10 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
       <div className="flex items-center space-x-4">
        <img src={sunny} alt="Resources" className="w-[20px] h-[20px] filter invert" />
        <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
          Mornings
        </p>
         </div>
       <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300">
          0
       </div>
       </div>
       <div className="group flex items-center justify-between space-x-4 py-3 px-10 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
  <div className="flex items-center space-x-4">
    <img src={sunrise} alt="Resources" className="w-[20px] h-[20px] filter invert" />
    <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
      Afternoon
    </p>
  </div>
  <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300">
    0
  </div>
</div>
<div className="group flex items-center justify-between space-x-4 py-3 px-10 rounded-lg bg-opacity-10 hover:bg-blue-500 transition-all duration-300">
  <div className="flex items-center space-x-4">
    <img src={night} alt="Resources" className="w-[20px] h-[20px] filter invert" />
    <p className="text-white text-sm font-semibold group-hover:text-white transition-colors duration-300">
      Evenings
    </p>
  </div>
  <div className="w-11 h-8 bg-blur-white bg-opacity-80 text-black text-center text-sm font-bold flex items-center justify-center rounded-[21px] group-hover:bg-white group-hover:text-black shadow-md transition-all duration-300">
    0
  </div>
</div>

    </div>
  </div>

    {/* Full-Height Divider Line at 40% */}
    <div className="absolute left-[39%] h-full w-1.5 bg-white transform -translate-x-1/2"></div>

    {/* Habit Section */}
    <div className="w-1/2 text-white text-2xl font-bold p-4 flex ">
      Habit
    </div>

</div>

</div>






    </div>
  );
};

export default MangeHabits;
