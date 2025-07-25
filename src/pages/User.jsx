"use client"
import { Search, Bell, Settings, MapPin, Phone, Mail, Plus, MoreHorizontal } from "lucide-react"
export default function User() {
  const contacts = [
    { id: 1, name: "Samantha William", class: "Class VII-A" },
    { id: 2, name: "Tony Soap", class: "Class VII-K" },
    { id: 3, name: "Karen Hope", class: "Class VII-A" },
    { id: 4, name: "Jordan Nico", class: "Class VII-B" },
    { id: 5, name: "Nadila Adja", class: "Class VII-C" },
  ]
  const messages = [
    {
      id: 1,
      name: "Samantha William",
      text: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      unread: 2,
    },
    {
      id: 2,
      name: "Tony Soap",
      text: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      unread: 2,
    },
    {
      id: 3,
      name: "Karen Hope",
      text: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      unread: 0,
    },
    {
      id: 4,
      name: "Jordan Nico",
      text: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      unread: 2,
    },
    {
      id: 5,
      name: "Nadila Adja",
      text: "Lorem ipsum dolor sit amet...",
      time: "12:45 PM",
      unread: 0,
    },
  ]
  const activities = [
    {
      id: 1,
      text: (
        <>
          <span className="font-semibold">Karen Hope</span> moved task "
          <span className="text-[#FB7D5B] font-semibold">User Research</span>" from{" "}
          <span className="font-semibold ">On Progress</span> to <span className="font-semibold">Done</span>
        </>
      ),
      date: "2 March 2021, 13:45 PM",
    },
    {
      id: 2,
      text: (
        <>
          <span className="font-semibold">Samantha William</span> add new <b>4</b> attached files on task "
          <span className="text-yellow-400 font-semibold">Photo's Assets</span>"
        </>
      ),
      date: "2 March 2021, 13:45 PM",
    },
    {
      id: 3,
      text: (
        <>
          <span className="font-semibold">Tony Soap</span> invite you in task "
          <span className="text-purple-600 font-semibold">Wireframing</span>" and "
          <span className="text-green-500 font-semibold">Hi-fidelity</span>"
        </>
      ),
      date: "2 March 2021, 13:45 PM",
    },
    {
      id: 4,
      text: (
        <>
          <span className="font-semibold">Samantha William</span> created new{" "}
          <span className="text-red-600 font-semibold">Task</span>
        </>
      ),
      date: "2 March 2021, 13:45 PM",
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 font-sans">
      <header className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
          <Settings className="w-6 h-6 text-gray-500 cursor-pointer" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm">
              NA
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Nabila A.</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative  h-32 overflow-hidden rounded-3xl">
              <img
                src="/src/assets/cover.png"
                alt="Abstract geometric pattern"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="px-6 pb-6 pt-4">
              <div className="relative -mt-16 mb-6">
                <div className="w-32 h-32 bg-purple-200 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Nabila Azalea</h2>
                  <p className="text-[#303972] text-lg mb-2">Admin</p>
                  <div className="flex items-center gap-2 text-[#303972] text-lg">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-[#A098AE] text-lg">Jakarta, Indonesia</span>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#303972] text-lg">+12 345 6789 0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#303972] text-lg">jordan@mail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#303972]">Contacts</h2>
                  <p className="text-[#A098AE] text-sm">
                    You have <span className="font-semibold">741</span> contacts
                  </p>
                </div>
                <button className="w-10 h-10 bg-[#4D44B5] rounded-full flex items-center justify-center text-white shadow-md hover:bg-purple-700 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#303972] " />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 px-10 focus:outline-none focus:ring-2 focus:[#303972] rounded-3xl"
                />
              </div>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#C1BBEB] rounded-full"></div>
                      <div>
                        <p className="font-medium text-gray-900">{contact.name}</p>
                        <p className="text-gray-500 text-sm">{contact.class}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white shadow-md hover:bg-purple-700 transition-colors">
                      <Mail />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-[#4D44B51A] text-purple-600 font-medium rounded-lg border border-purple-100 hover:bg-purple-50 transition-colors">
                View More
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Messages</h2>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#303972]" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#C1BBEB] rounded-full flex-shrink-0"></div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">{message.name}</p>
                      <p className="text-gray-500 text-sm truncate">{message.text}</p>
                    </div>
                    <div className="flex flex-col items-end flex-shrink-0">
                      <span className="text-gray-500 text-xs">{message.time}</span>
                      {message.unread > 0 && (
                        <span className="w-5 h-5 bg-[#FB7D5B] text-white text-xs rounded-full flex items-center justify-center mt-1">
                          {message.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-purple-600 font-medium rounded-lg border bg-[#4D44B51A] border-purple-100 hover:bg-purple-50 transition-colors">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 space-y-6">
          <div className="relative rounded-2xl p-6 overflow-hidden bg-[#4D44B5] shadow-md">
            <img
              src="/src/assets/Masking.png"
              alt="Abstract purple background"
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute bottom-0 right-0 flex gap-1 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white text-lg font-semibold">Your Plan</h2>
                <MoreHorizontal className="w-5 h-5 text-white cursor-pointer" />
              </div>
              <p className="text-white text-3xl font-bold mb-4">Free</p>
              <ul className="text-white text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>50 GB Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Limited Features</span>
                </li>
              </ul>
              <p className="text-white text-xs mb-6 opacity-80">
                Upgrade to Premium Plan to get more Features & Storage memory
              </p>
              <button className="w-48 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#363B64] mb-6">Lastest Activity</h2>
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 relative z-10">
                  <div className="w-10 h-10 bg-[#C1BBEB] rounded-full flex-shrink-0 flex items-center justify-center mt-1"></div>
                  <div>
                    <p className="text-[#363B64] text-sm leading-relaxed mb-1">{activity.text}</p>
                    <p className="text-[#A098AE] text-[14px]">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
