import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const StudentRow = ({ student }) => {
  const getGradeColors = (grade) => {
    if (grade.startsWith("VII A"))
      return { bg: "bg-[#FF6633]", text: "text-white" };
    if (grade.startsWith("VII B"))
      return { bg: "bg-[#FFC107]", text: "text-white" };
    if (grade.startsWith("VII C"))
      return { bg: "bg-[#4D44B5]", text: "text-white" };
    return { bg: "bg-gray-200", text: "text-gray-800" };
  };

  const studentUrlId = student.id.replace("#", "");
  const gradeColors = getGradeColors(student.grade);

  return (
    <Link
      to={`/students/${studentUrlId}`}
      className="grid grid-cols-12 items-center bg-white p-3 rounded-xl mb-3 hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      {/* Checkbox */}
      <div className="col-span-1 flex items-center">
        <input
          type="checkbox"
          onClick={(e) => e.stopPropagation()}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          defaultChecked={student.checked}
        />
      </div>

      {/* Name with Avatar */}
      <div className="col-span-3 flex items-center space-x-4 min-w-0">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex-shrink-0"></div>

        <span className="font-semibold text-gray-800 truncate">
          {student.name}
        </span>
      </div>

      {/* ID */}
      <div className="col-span-2 text-gray-500 font-medium truncate">
        {student.id}
      </div>

      {/* Date */}
      <div className="col-span-1 text-gray-500 text-sm">{student.date}</div>

      {/* Parent Name */}
      <div className="col-span-1 text-gray-500 font-medium truncate">
        {student.parentName}
      </div>

      {/* City */}
      <div className="col-span-1 text-gray-500 font-medium truncate">
        {student.city}
      </div>

      {/* Contact Icons */}
      <div className="col-span-1 flex justify-center items-center space-x-3 text-gray-400">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 flex-shrink-0">
          <FiPhone size={14} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 flex-shrink-0">
          <FiMail size={14} />
        </button>
      </div>

      {/* Grade Pill */}
      <div className="col-span-1 flex justify-center">
        <div
          className={`px-3 py-1.5 rounded-full text-center text-xs font-semibold ${gradeColors.bg} ${gradeColors.text}`}
        >
          {student.grade}
        </div>
      </div>

      {/* Action column */}
      <div className="col-span-1 flex justify-center">
        <button
          className="text-gray-400 hover:text-gray-600 p-2"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Action menu clicked for student:", student.name);
          }}
        >
          <BsThreeDots size={20} />
        </button>
      </div>
    </Link>
  );
};

export default StudentRow;
