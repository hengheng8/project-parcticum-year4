import { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import folder from '../../assets/folder (1).png';
import moon from '../../assets/moon.png';
import add from '../../assets/add (1).png';
import search from '../../assets/search (2).png';
import calender from '../../assets/calendar.png';
import arrowdown from '../../assets/down-arrow.png';
import reminder from '../../assets/reminder.png';
import listmenu from '../../assets/list (1).png';
import settings from '../../assets/settings (1).png';
import share from '../../assets/share (1).png';
import document from '../../assets/folder (2).png';
import {  useEffect } from "react";
const Tracker = () => {
  const [tasks, setTasks] = useState({ Today: [], Tomorrow: [], Yesterday: [] });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [reminderText, setReminderText] = useState("Reminder Time");
  const [habitText, setHabitText] = useState('Add Habits');
  const [showHabitOptions, setShowHabitOptions] = useState(false);
  const [showTaskInput, setShowTaskInput] = useState(false); 
  const [newTask, setNewTask] = useState('');
  const [sidebarTasks, setSidebarTasks] = useState([]); 
  const [timeOfDay, setTimeOfDay] = useState("");
    
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

  const handleDateClick = (date) => {
    const today = new Date();
    const selectedDay = new Date(date);

    if (selectedDay.toDateString() === today.toDateString()) {
      setSelectedDate("Today");
    } else if (
      selectedDay.toDateString() === new Date(today.setDate(today.getDate() + 1)).toDateString()
    ) {
      setSelectedDate("Tomorrow");
    } else if (
      selectedDay.toDateString() === new Date(today.setDate(today.getDate() - 2)).toDateString()
    ) {
      setSelectedDate("Yesterday");
    } else {
      setSelectedDate(selectedDay.toLocaleDateString());
    }
    setShowDatePicker(false);
  };

  const handleOptionClick = (option) => {
    setReminderText(option);
    setShowOptions(false);
  };

  const handleHabitOptionClick = (option) => {
    setHabitText(option);
    setShowHabitOptions(false);
  };

  return (
    <div className="flex h-screen bg-gray-600">
      <div className="bg-black w-[30%] h-full p-8 shadow-lg rounded-r-lg">
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
          <div className="flex items-center space-x-4 m-9 hover:bg-white hover:bg-opacity-10 hover:px-4 hover:py-6 transition-all duration-300 hover:rounded-lg">
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
  <div className="flex items-center space-x-4 m-9 rounded-lg hover:bg-white hover:bg-opacity-10 hover:px-4 hover:py-6 transition-all duration-300 hover:rounded-lg">
    <img src={listmenu} alt="Manage Habits" className="w-[20px] h-[20px] filter invert" />
    <p className="text-white text-sm font-semibold hover:text-gray-200">Manage Habits</p>
  </div>
</Link>

<div className="flex items-center space-x-4 m-9 rounded-lg hover:bg-white hover:bg-opacity-10 hover:px-6 hover:py-6 transition-all duration-300 hover:rounded-lg">
  <img src={settings} alt="App Settings" className="w-[20px] h-[20px] filter invert" />
  <p className="text-white text-sm font-semibold hover:text-gray-200">App Settings</p>
</div>

<div className="flex items-center space-x-4 m-9 rounded-lg hover:bg-white hover:bg-opacity-10 hover:px-8 hover:py-6 transition-all duration-300 hover:rounded-lg">
  <img src={share} alt="Resources" className="w-[20px] h-[20px] filter invert" />
  <p className="text-white text-sm font-semibold hover:text-gray-200">Resources</p>
</div>



        </div>
      </div>

      <div className="flex flex-col p-5 w-full">
        <h1 className="text-white text-[26px] font-semibold mb-5">All Habits</h1>

        <div className="flex space-x-4">
          <div className="w-[40px] h-[40px] bg-gray-500 rounded-md flex items-center justify-center">
            <img src={search} alt="Search" className="w-[25px] h-[25px] filter invert" />
          </div>

          <div className="relative">
            <div
              className="w-[160px] h-[40px] bg-gray-500 rounded-md flex items-center justify-between px-4 cursor-pointer"
              onClick={() => setShowDatePicker(!showDatePicker)} >
              <div className="flex items-center space-x-2">
                <img src={calender} alt="Calendar" className="w-[25px] h-[25px] filter invert" />
                <h3 className="text-white font-semibold">{selectedDate}</h3>
              </div>
              <img src={arrowdown} alt="Arrow Down" className="w-[20px] h-[20px] filter invert" />
            </div>
            {showDatePicker && (
              <div className="absolute top-[50px] left-0 w-[350px] bg-gray-700 rounded-md p-3 shadow-lg">
                <Calendar onChange={handleDateClick} value={new Date()} showNeighboringMonth={false} />
              </div>
            )}
          </div>

          <div className="relative w-[165px] h-[40px] bg-gray-500 rounded-md flex items-center justify-between px-3 cursor-pointer">
            <div className="flex items-center space-x-2">
              <img src={reminder} alt="Reminder" className="w-[35px] h-[25px] filter invert" />
              <h3 className="text-white font-medium text-sm truncate">{reminderText}</h3>
            </div>
            <img src={arrowdown} alt="Arrow Down" className="w-[20px] h-[20px] filter invert" onClick={() => setShowOptions(!showOptions)} />
            {showOptions && (
              <div className="absolute top-[42px] left-0 w-full bg-gray-600 rounded-md text-white text-sm">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleOptionClick("Reminder Time")}>Reminder Time</div>
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleOptionClick("My Habits Order")}>My Habits Order</div>
              </div>
            )}
          </div>

          <div className="relative w-[165px] h-[40px] bg-blue-500 rounded-md flex items-center justify-between px-3 cursor-pointer">
            <div className="flex items-center space-x-2">
              <img src={add} alt="Habit Icon" className="w-[30px] h-[25px] filter invert" />
              <h3 className="text-white font-medium text-sm truncate">{habitText}</h3>
            </div>
            <img
              src={arrowdown}
              alt="Arrow Down"
              className="w-[20px] h-[20px] filter invert"
              onClick={() => setShowHabitOptions(!showHabitOptions)} />
            {showHabitOptions && (
              <div className="absolute top-[42px] left-0 w-full bg-gray-600 rounded-md text-white text-sm">
                <div
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleHabitOptionClick("Add Habit")}>
                  Add Habit
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleHabitOptionClick("Remove Habit")}>
                  Remove Habit
                </div>
              </div>
            )}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Tracker;
