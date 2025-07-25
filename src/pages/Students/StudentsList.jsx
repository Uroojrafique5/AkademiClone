import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentRow from "../../components/students/StudentRow.jsx";
import {
  FiSearch,
  FiChevronDown,
  FiPlus,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const studentsData = [
  {
    name: "Samanta William",
    id: "#123456789",
    date: "Mar 25, 21",
    parentName: "Mano",
    city: "Jakarta",
    grade: "VII C",
    checked: true,
  },
  {
    name: "Tony Soap",
    id: "#123456788",
    date: "Mar 25, 21",
    parentName: "James",
    city: "Jakarta",
    grade: "VII B",
    checked: false,
  },
  {
    name: "Karen Hope",
    id: "#123456787",
    date: "Mar 25, 21",
    parentName: "Justin",
    city: "Jakarta",
    grade: "VII C",
    checked: true,
  },
  {
    name: "Jordan Nico",
    id: "#123456786",
    date: "Mar 25, 21",
    parentName: "Amanda",
    city: "Jakarta",
    grade: "VII A",
    checked: false,
  },
  {
    name: "Nadila Adja",
    id: "#123456785",
    date: "Mar 25, 21",
    parentName: "Jack",
    city: "Jakarta",
    grade: "VII A",
    checked: true,
  },
  {
    name: "Johnny Ahmad",
    id: "#123456784",
    date: "Mar 25, 21",
    parentName: "Danny",
    city: "Jakarta",
    grade: "VII A",
    checked: false,
  },
];

const StudentsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 bg-[#F7F7FF] min-h-screen font-sans">
      <div className="hidden lg:flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#303972]">Students</h1>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <FiBell size={24} className="text-gray-400" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </div>
          <FiSettings size={24} className="text-gray-400" />
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#303972]">Nabila A.</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-indigo-200"></div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <hr className="border-gray-200 -mx-8" />
      </div>

      <div className="pt-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full md:w-1/3">
            <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center bg-white text-gray-700 px-4 py-2.5 rounded-full hover:bg-gray-100 shadow-sm">
              <span>Newest</span>
              <FiChevronDown className="ml-2" />
            </button>
            <Link to="/students/add">
              <button className="flex items-center bg-[#4D44B5] text-white px-5 py-3 rounded-full hover:bg-indigo-800 shadow-md">
                <FiPlus className="mr-2 font-bold" />
                <span className="font-semibold">New Student</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-12 items-center p-3 text-sm font-medium text-gray-500 min-w-[900px]">
            <div className="col-span-1">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2">ID</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Parent Name</div>
            <div className="col-span-1">City</div>
            <div className="col-span-1 text-center">Contact</div>
            <div className="col-span-1 text-center">Grade</div>
            <div className="col-span-1 text-center">Action</div>
          </div>

          {/* Rows */}
          <div className="min-w-[900px]">
            {filteredStudents.map((student) => (
              <StudentRow key={student.id} student={student} />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-500">Showing 1-6 from 100 data</p>
          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-400">
              <FaChevronLeft size={12} />
            </button>
            <button className="w-9 h-9 rounded-md bg-[#4D44B5] text-white text-sm font-semibold">
              1
            </button>
            <button className="w-9 h-9 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-sm">
              2
            </button>
            <button className="w-9 h-9 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 text-sm">
              3
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-200 text-gray-400">
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
