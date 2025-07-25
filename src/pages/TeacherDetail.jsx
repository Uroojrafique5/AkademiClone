
"use client";

import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useParams } from "react-router-dom";
import Image from "../assets/cover.png";
const TeacherDetail = () => {
  const { id , name  , subject } = useParams();

  return (
    <div className="h-screen p-4 md:p-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div
              className="relative h-[243px] overflow-hidden -mt-8 rounded-lg"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="px-8 pb-8">
              <div className="relative -mt-32 mb-6">
                <div className="w-32 h-32 bg-purple-200 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-[#303972] mb-1">{name}</h1>
                <p className="text-gray-500">{subject} Teacher</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>1
                  <span className="text-[#303972] text-[18px] font-medium">
                    Jakarta, Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#303972] text-[18px] font-mediumd">+12 345 6789 0</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#303972] text-[18px] font-medium">
                    {name}@mail.com
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <h2 className=" font-bold text-[#303972] mb-3 text-[24px]">
                  About:
                </h2>
                <p className="text-[#303972] text-[18px] font-normal w-3/4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="mb-8">
                <h2 className="font-bold text-[#303972] mb-3 text-[24px]">
                  Education:
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800  text-[18px] font-semibold">
                        {subject} Major, University Akademi Historia
                      </p>
                      <p className="text-gray-500 text-xs">2013-2017</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800  text-[18px] font-semibold">
                        Master of {subject}, University Akademi Historia
                      </p>
                      <p className="text-gray-500 text-xs">2017-2020</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-purple-900 mb-3">
                  Expertise:
                </h2>
                <p className="text-gray-600 text-[18px] font-semibold">
                  World {subject}, Philosophy, Prehistoric, Culture, Ancient
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className=" rounded-2xl shadow-sm h-full flex flex-col gap-y-8 ">
            <div className="mb-6 bg-white h-[129px] flex justify-center px-10 flex-col rounded-3xl">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">
                Schedule Details
              </h2>
              <p className="text-gray-500 text-[18px] font-semibold">
                Thursday, 10th April, 2021
              </p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-6 rounded-tl-2xl rounded-bl-2xl  bg-purple-600 "></div>
                <div className="bg-[white] h-[129px] flex justify-center px-10 flex-col rounded-3xl  p-4">
                  <h3 className="font-semibold text-gray-900 text-[18px]  mb-1">
                    World {subject}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">Class VII-B</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      <span>March 20, 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span>09:00 - 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0  bg-orange-500 w-6 rounded-tl-2xl rounded-bl-2xl"></div>
                <div className="bg-[white] h-[129px] flex justify-center px-10 flex-col rounded-3xl  p-4">
                  <h3 className="font-semibold text-gray-900 text-[18px]  mb-1">
                    Ancient {subject}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">Class VII-A</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      <span>March 20, 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span>09:00 - 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0  bg-yellow-500 w-6 rounded-tl-2xl rounded-bl-2xl"></div>
                <div className="bg-[white] h-[129px] flex justify-center px-10 flex-col rounded-3xl  p-4">
                  <h3 className="font-semibold text-gray-900 text-[18px]  mb-1">
                    Culture
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">Class VIII-A</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      <span>March 20, 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span>09:00 - 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
             <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0  bg-indigo-800 w-6 rounded-tl-2xl rounded-bl-2xl"></div>
                <div className="bg-[white] h-[129px] flex justify-center px-10 flex-col rounded-3xl  p-4">
                  <h3 className="font-semibold text-gray-900 text-[18px]  mb-1">
                    World {subject}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">Class VII-C</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-orange-500" />
                      <span>March 20, 2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span>09:00 - 10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700  py-3 px-4 rounded-lg text-[18px] font-semibold transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
