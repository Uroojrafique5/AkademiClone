import React, { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";
const NavbarE = ({ setSidebarOpen, comp }) => {
  return (
    <>
      <div className="py-10 px-14">
        <div className="flex justify-between items-center">
          <div className="font-poppins font-bold text-[36px] leading-[100%] tracking-[0] text-[#303972]">
            {comp}
          </div>
          <div className="flex md:justify-between ">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-sm:w-[40px] w-64"
                />
              </div>
              <div className="lg:hidden max-sm:block">
                <Menu
                  className="w-6 h-6  text-gray-800 cursor-pointer"
                  onClick={() => setSidebarOpen(true)}
                />
              </div>
            </div>

            <div className="md:flex gap-5 justify-between items-center ml-8 hidden ">
              <div className="bg-white rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer ">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>

              <div className="bg-white rounded-full h-[50px] w-[50px] flex items-center justify-center cursor-pointer ">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2632 0.666672L9.41683 4.46615C8.93546 4.69779 8.47531 4.96458 8.03402 5.26563L4.32048 4.09636L0.583496 10.5703L3.3986 13.1484C3.28861 13.9648 3.33843 14.3672 3.3986 14.8516L0.583496 17.4297L4.32048 23.9037L8.03402 22.7344C8.47531 23.0354 8.93546 23.3022 9.41683 23.5339L10.2632 27.3333H17.7371L18.5835 23.5339C19.0649 23.3022 19.525 23.0354 19.9663 22.7344L23.6798 23.9037L27.4168 17.4297L24.6017 14.8516C24.6247 14.5682 24.6665 14.2845 24.6668 14C24.6679 13.7069 24.6217 13.4108 24.6017 13.1484L27.4168 10.5703L23.6798 4.09636L19.9663 5.26563C19.525 4.96458 19.0649 4.69779 18.5835 4.46615L17.7371 0.666672H10.2632ZM12.4038 3.33334H15.5965L16.2554 6.29167L16.9168 6.55209C17.6651 6.84512 18.3645 7.24846 18.9923 7.75001L19.5496 8.19271L22.4403 7.28386L24.0366 10.0495L21.8022 12.099L21.909 12.8021C22.0347 13.5797 22.0103 14.4746 21.909 15.1979L21.8022 15.901L24.0366 17.9505L22.4403 20.7162L19.5496 19.8073L18.9923 20.25C18.3645 20.7516 17.6651 21.1549 16.9168 21.4479L16.2554 21.7083L15.5965 24.6667H12.4038L11.745 21.7083L11.0835 21.4479C10.3353 21.1549 9.63581 20.7516 9.00797 20.25L8.45068 19.8073L5.56006 20.7162L3.9637 17.9505L6.19808 15.901L6.09131 15.1979C5.96108 14.4046 5.98107 13.4967 6.09131 12.8021L6.19808 12.099L3.9637 10.0495L5.56006 7.28386L8.45068 8.19271L9.00797 7.75001C9.63581 7.24846 10.3353 6.84512 11.0835 6.55209L11.745 6.29167L12.4038 3.33334ZM14.0002 8.66667C11.0704 8.66667 8.66683 11.0703 8.66683 14C8.66683 16.9297 11.0704 19.3333 14.0002 19.3333C16.9299 19.3333 19.3335 16.9297 19.3335 14C19.3335 11.0703 16.9299 8.66667 14.0002 8.66667ZM14.0002 11.3333C15.4887 11.3333 16.6668 12.5115 16.6668 14C16.6668 15.4886 15.4887 16.6667 14.0002 16.6667C12.5116 16.6667 11.3335 15.4886 11.3335 14C11.3335 12.5115 12.5116 11.3333 14.0002 11.3333Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#303972] font-bold">Nabila A.</p>{" "}
                <p className="text-[#A098AE]">Admin</p>
              </div>
              <div className=" cursor-pointer w-[50px] h-[50px]  bg-[#C1BBEB] rounded-[40px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { NavbarE };

const EventSidebarCom = ({ title, subtile, date, time, bordercolor }) => {
  return (
    <>
      <div
        className="bg-white md:w-[290px] w-full border-l-[12px] h-[128px] rounded-2xl flex flex-col justify-center gap-2 px-5"
        style={{ borderLeftColor: bordercolor }}
      >
        <div>
          {" "}
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-[#A098AE] text-sm">{subtile}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 5.25H16.5V4.5C16.5 4.30109 16.421 4.11032 16.2803 3.96967C16.1397 3.82902 15.9489 3.75 15.75 3.75C15.5511 3.75 15.3603 3.82902 15.2197 3.96967C15.079 4.11032 15 4.30109 15 4.5V5.25H12.75V4.5C12.75 4.30109 12.671 4.11032 12.5303 3.96967C12.3897 3.82902 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.82902 11.4697 3.96967C11.329 4.11032 11.25 4.30109 11.25 4.5V5.25H9V4.5C9 4.30109 8.92098 4.11032 8.78033 3.96967C8.63968 3.82902 8.44891 3.75 8.25 3.75C8.05109 3.75 7.86032 3.82902 7.71967 3.96967C7.57902 4.11032 7.5 4.30109 7.5 4.5V5.25H6C5.40326 5.25 4.83097 5.48705 4.40901 5.90901C3.98705 6.33097 3.75 6.90326 3.75 7.5V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V7.5C20.25 6.90326 20.0129 6.33097 19.591 5.90901C19.169 5.48705 18.5967 5.25 18 5.25ZM5.25 7.5C5.25 7.30109 5.32902 7.11032 5.46967 6.96967C5.61032 6.82902 5.80109 6.75 6 6.75H7.5V7.5C7.5 7.69891 7.57902 7.88968 7.71967 8.03033C7.86032 8.17098 8.05109 8.25 8.25 8.25C8.44891 8.25 8.63968 8.17098 8.78033 8.03033C8.92098 7.88968 9 7.69891 9 7.5V6.75H11.25V7.5C11.25 7.69891 11.329 7.88968 11.4697 8.03033C11.6103 8.17098 11.8011 8.25 12 8.25C12.1989 8.25 12.3897 8.17098 12.5303 8.03033C12.671 7.88968 12.75 7.69891 12.75 7.5V6.75H15V7.5C15 7.69891 15.079 7.88968 15.2197 8.03033C15.3603 8.17098 15.5511 8.25 15.75 8.25C15.9489 8.25 16.1397 8.17098 16.2803 8.03033C16.421 7.88968 16.5 7.69891 16.5 7.5V6.75H18C18.1989 6.75 18.3897 6.82902 18.5303 6.96967C18.671 7.11032 18.75 7.30109 18.75 7.5V9.75H5.25V7.5ZM18.75 18C18.75 18.1989 18.671 18.3897 18.5303 18.5303C18.3897 18.671 18.1989 18.75 18 18.75H6C5.80109 18.75 5.61032 18.671 5.46967 18.5303C5.32902 18.3897 5.25 18.1989 5.25 18V11.25H18.75V18Z"
                  fill="#FB7D5B"
                />
              </svg>
              <p className="text-[#A098AE] text-sm">{date}</p>
            </div>
            <div className="flex gap-1">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
                  fill="#FCC43E"
                />
                <path
                  d="M13 9H11V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11H13C13.2652 11 13.5196 10.8946 13.7071 10.7071C13.8946 10.5196 14 10.2652 14 10C14 9.73478 13.8946 9.48043 13.7071 9.29289C13.5196 9.10536 13.2652 9 13 9Z"
                  fill="#FCC43E"
                />
              </svg>

              <p className="text-[#A098AE] text-sm">{time}</p>
            </div>
          </div>

          <div>
            <div className=" cursor-pointer w-[50px] h-[50px]  bg-[#C1BBEB] rounded-[40px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Event = ({ setSidebarOpen, sidebarOpen }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState(null); // March = index 2
  const [selectedYear, setSelectedYear] = useState(2025);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const navbaritems = [
    {
      title: "Basic Algorithm",
      subtile: "Algorithm",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      bordercolor: "#4D44B5",
    },
    {
      title: "Basic Art",
      subtile: "Art",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      bordercolor: "#FB7D5B",
    },
    {
      title: " HTML & CSS Class",
      subtile: "Programming",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      bordercolor: "#FCC43E",
    },

    {
      title: "Simple Past Tense",
      subtile: "English",
      date: "March 20, 2021",
      time: "09.00 - 10.00 AM",
      bordercolor: "#303972",
    },
  ];

  const getCalendarDates = (month, year) => {
    const dates = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();

    for (let i = startDay - 1; i >= 0; i--) {
      const date = new Date(year, month, 1 - i - 1);
      dates.push({ day: date.getDate(), isCurrentMonth: false });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push({ day: i, isCurrentMonth: true });
    }

    const remaining = 42 - dates.length;
    for (let i = 1; i <= remaining; i++) {
      dates.push({ day: i, isCurrentMonth: false });
    }

    return dates;
  };

  const calendarDates = getCalendarDates(selectedMonth, selectedYear);

  return (
    <>
      <NavbarE
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        comp="Event"
      />

      <div className="py-3 px-5">
        <div className=" rounded-lg px-4 py-4 flex md:flex-row  flex-col justify-between gap-2  items-center">
          <div className="flex flex-col rounded-lg px-4 py-4 bg-white ">
            {/* first-row */}
            <div className="flex justify-between items-center gap-[20px] ">
              <div className="font-poppins font-bold text-[30px] leading-[100%] tracking-[0] text-[#303972]">
                Calander
              </div>
              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  name="month"
                  id="month"
                  className="w-[167px] h-[40px] text-[#4D44B5] rounded-[40px] border-[2px] border-[#4D44B5] text-md px-[43px] py-[5px] opacity-100 flex gap-[10px] appearance-none "
                >
                  {months.map((month, index) => (
                    <option value={index} key={index} className="bg-white">
                      {month}
                    </option>
                  ))}
                </select>
                <div className="absolute right-6 top-4 ">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6761 2.48798L11.2361 12.952C10.8521 13.4 10.1481 13.4 9.76415 12.952L0.324149 2.48798C-0.283851 1.81598 0.164149 0.727982 1.06015 0.727982L19.9401 0.727982C20.8361 0.727982 21.2841 1.81598 20.6761 2.48798Z"
                      fill="#4D44B5"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  name="month"
                  id="month"
                  className="w-[167px] h-[40px] text-[#4D44B5] rounded-[40px] border-[2px] border-[#4D44B5] text-md px-[43px] py-[5px] opacity-100 flex gap-[10px] appearance-none "
                >
                  <option value={selectedYear} className=" bg-white">
                    {selectedYear}
                  </option>
                </select>
                <div className="absolute right-6 top-4 ">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 21 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6761 2.48798L11.2361 12.952C10.8521 13.4 10.1481 13.4 9.76415 12.952L0.324149 2.48798C-0.283851 1.81598 0.164149 0.727982 1.06015 0.727982L19.9401 0.727982C20.8361 0.727982 21.2841 1.81598 20.6761 2.48798Z"
                      fill="#4D44B5"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-[#4D44B5] px-4 rounded-[40px]">
                <button className="flex h-[40px] items-center gap-3 text-sm text-white">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.34703 10.6647H0.382324V6.42941H6.34703V0.5H10.5823V6.42941H16.6176V10.6647H10.5823V16.6647H6.34703V10.6647Z"
                      fill="white"
                    />
                  </svg>
                  New Student
                </button>
              </div>
            </div>
            {/* week name */}
            <div className="flex justify-between mt-6 px-4">
              {days.map((day) => (
                <p className="text-[#A098AE]">{day}</p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 px-2 items-center justify-between">
              {calendarDates.map((date, idx) => (
                <div key={idx} className={``}>
                  <div
                    className={`w-[80px] h-[100px]  border-[2px] border-[#A098AE] rounded-[14px] opacity-100 ${
                      date.isCurrentMonth ? "" : "bg-gray-500"
                    } `}
                  >
                    <p className="text-[#303972] font-bold px-3 py-2">
                      {" "}
                      {date.day}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 flex flex-col gap-3 max-sm:w-full max-sm:gap-6">
            <div className="bg-white md:w-[290px] h-[128px]  max-sm:w-full max-sm:mt-5 rounded-2xl flex flex-col justify-center gap-2 px-5">
              <h1 className="font-bold text-2xl">Schedule Details</h1>
              <p className="text-[#A098AE] text-sm">
                Thursday, 10 April , 2021
              </p>
            </div>
            {navbaritems.map((item, index) => (
              <EventSidebarCom
                key={index}
                title={item.title}
                subtile={item.subtile}
                date={item.date}
                time={item.time}
                bordercolor={item.bordercolor}
              />
            ))}
            <div className="bg-[#4D44B5]/10 rounded-2xl py-2 mt-2 flex items-center justify-center">
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
