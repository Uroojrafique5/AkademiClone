

import { useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";


import Sidebar from "./components/Mainsidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import FoodPage from "./pages/Foodmenu";
import Teacher from "./pages/Teacher";
import TeacherDetail from "./pages/TeacherDetail";
import TeacherForm from "./pages/TeacherForm";

// IMPORTS FROM `main` BRANCH
import StudentsList from "./pages/Students/StudentsList";
import AddStudent from "./pages/Students/AddStudent";
import StudentDetails from "./pages/Students/StudentDetails";
import LatestActivity from "./pages/LatestActivity";
import Event from "./pages/Event";
import { Finance } from "./pages/Finance";
import Chat from "./pages/Chat";

import FoodDetail from "./pages/FoodDetail";
import User from "./pages/User";



const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Permanent Sidebar for Desktop */}
      <div className="hidden lg:block min-h-screen">
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>

      {/* Mobile Sidebar (overlay) */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-screen bg-white shadow-lg z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>

      {/* Main Content Area - This part contains the Outlet */}
      <main className="flex-1 bg-[#F3F4FF] min-h-screen">
        {/* Navbar is rendered here for all child pages */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Child routes defined below will be rendered here inside the <Outlet /> */}
        <Outlet />
      </main>
    </div>
  );
};


// The App component now only handles routing logic.
function App() {
  return (
    <Routes>
      {/* Parent route uses our Layout component. All children will have the sidebar/navbar. */}
      <Route path="/" element={<Layout />}>
        {/* Child routes are rendered inside the <Outlet /> */}
        <Route index element={<Dashboard />} />

        {/* Student routes from `main` */}
        <Route path="students" element={<StudentsList />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="students/:studentId" element={<StudentDetails />} />

        {/* Teacher routes (combined from both branches) */}
        <Route path="teachers" element={<Teacher />} />
        <Route path="teacher/:id/:name/:subject" element={<TeacherDetail />} />
        <Route path="teacherform" element={<TeacherForm />} />

        {/* Other routes from `main` */}
        <Route path="event" element={<Event />} />
        <Route path="finance" element={<Finance />} />
        <Route path="chat" element={<Chat />} />
        <Route path="latestactivity" element={<LatestActivity />} />
        
        {/* Food routes (combined from both branches) */}
        <Route path="food" element={<FoodPage />} />
        
        {/* --- ADDED: UNIQUE ROUTES FROM YOUR `HEAD` BRANCH --- */}
        <Route path="FoodDetail/:name" element={<FoodDetail />} />
        <Route path="user" element={<User />} />

      </Route>
    </Routes>
  );
}

export default App;