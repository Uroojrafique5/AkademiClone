import React from "react";
import { useParams } from "react-router-dom";
import { studentsData } from "./StudentsList";
import { FiUser, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import ScheduleCard from "../../components/students/ScheduleCard";
import PaymentHistoryItem from "../../components/students/PaymentHistoryItem";

const StudentDetails = () => {
  const { studentId } = useParams();
  const student = studentsData.find((s) => s.id === `#${studentId}`);

  if (!student) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Student not found.</h1>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Student Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Student Banner */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="absolute top-0 left-0 w-full h-28 bg-indigo-700 rounded-t-lg"></div>
            <div className="absolute top-20 right-6 w-24 h-8 bg-yellow-400 rounded-md"></div>
            <div className="relative flex items-end pt-12">
              <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white"></div>
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {student.name}
                </h2>
                <p className="text-gray-500">Student</p>
              </div>
              <button className="ml-auto text-gray-500 hover:text-gray-800">
                <BsThreeDots />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-200">
              <InfoItem
                icon={<FiUser />}
                label="Parents"
                value={student.parentName}
              />
              <InfoItem
                icon={<FiMapPin />}
                label="Address"
                value={student.city}
              />
              <InfoItem
                icon={<FiPhone />}
                label="Phone"
                value="+12 345 6789 0"
              />
              <InfoItem icon={<FiMail />} label="Email" value="hope@mail.com" />
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Payment History
            </h3>
            <PaymentHistoryItem
              id="#123456789"
              date="2 March 2021, 13:45 PM"
              amount="$ 50,036"
              status="Complete"
            />
            <PaymentHistoryItem
              id="#123456789"
              date="2 March 2021, 13:45 PM"
              amount="$ 50,036"
              status="Pending"
            />
            <PaymentHistoryItem
              id="#123456789"
              date="2 March 2021, 13:45 PM"
              amount="$ 50,036"
              status="Canceled"
            />
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Schedule Details
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Thursday, 10th April, 2021
          </p>
          <div className="space-y-4">
            <ScheduleCard
              title="Basic Algorithm"
              subject="Algorithm"
              date="March 20, 2021"
              time="09:00 - 10:00 AM"
            />
            <ScheduleCard
              title="Basic Art"
              subject="Art"
              date="March 20, 2021"
              time="09:00 - 10:00 AM"
            />
          </div>
          <button className="w-full mt-6 py-3 text-indigo-600 font-semibold bg-indigo-50 rounded-lg hover:bg-indigo-100">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="text-indigo-600 bg-indigo-100 p-2 rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default StudentDetails;
