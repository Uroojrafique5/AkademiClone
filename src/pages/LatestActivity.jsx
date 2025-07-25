// src/pages/LatestActivity.jsx
import React from 'react';
import { FaCheckCircle, FaBell, FaPaperclip } from 'react-icons/fa';

const LatestActivity = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Notification & Latest Activity</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        {/* Today Section */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Today</h2>
        <ul className="border-l-4 border-indigo-500 pl-4 space-y-6">
          {/* 1 */}
          <li>
            <p className="text-sm text-gray-600">Monday, June 1st 2020</p>
            <p><span className="font-semibold text-gray-800">Karen Hope</span> has created new task at <span className="text-red-500 font-semibold">History Lesson</span></p>
          </li>

          {/* 2 */}
          <li>
            <p className="text-sm text-gray-600">Monday, June 1st 2020</p>
            <p><span className="text-orange-500 font-semibold">[REMINDER]</span> Due date of <span className="text-pink-500">Science Homework</span> task will be coming</p>
          </li>

          {/* 3 */}
          <li>
            <p className="text-sm text-gray-600">Monday, June 1st 2020</p>
            <p><span className="font-semibold text-gray-800">Tony Soap</span> commented at <span className="text-pink-500 font-semibold">Science Homework</span></p>
          </li>

          {/* 4 */}
          <li>
            <p className="text-sm text-gray-600">Monday, June 1st 2020</p>
            <p><span className="font-semibold text-gray-800">Samantha William</span> add 4 files on <span className="text-indigo-500 font-semibold">Art Class</span></p>
            <div className="flex gap-2 mt-2">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="w-20 h-16 bg-purple-200 rounded-md"></div>
              ))}
            </div>
          </li>

          {/* 5 */}
          <li>
            <p className="text-sm text-gray-600">Monday, June 1st 2020</p>
            <p>You have moved <span className="text-green-600 font-semibold">Biology Homework</span> task to <span className="font-semibold text-gray-800">Done</span></p>
          </li>
        </ul>

        {/* Yesterday Section */}
        <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">Yesterday</h2>
        <ul className="border-l-4 border-indigo-500 pl-4 space-y-6">
          {/* 1 */}
          <li>
            <p className="text-sm text-gray-600">Tuesday, June 30 2020</p>
            <p><span className="font-semibold text-gray-800">Johnny Ahmad</span> mentioned you at <span className="text-indigo-500 font-semibold">Art Class Homework</span></p>
          </li>

          {/* 2 */}
          <li>
            <p className="text-sm text-gray-600">Sunday, June 30 2020</p>
            <p><span className="font-semibold text-gray-800">Nadila Adja</span> mentioned you at <span className="text-purple-600 font-semibold">Programming Homework</span></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestActivity;
