import React from "react";

const ScheduleCard = ({ title, subject, date, time }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg mb-4 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className="w-1 h-12 bg-orange-400 rounded-full mr-4"></div>
        <div>
          <h4 className="font-bold text-gray-800">{title}</h4>
          <p className="text-sm text-gray-500">{subject}</p>
          <p className="text-sm text-gray-500">
            {date} | {time}
          </p>
        </div>
      </div>
      <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"></button>
    </div>
  );
};

export default ScheduleCard;
