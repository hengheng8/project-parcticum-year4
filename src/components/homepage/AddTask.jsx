import React from "react";

function AddTask() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Add Task</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskName">
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Save Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
