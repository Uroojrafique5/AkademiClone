import { useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import Sidebar from "./components/Mainsidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import FoodPage from "./pages/Foodmenu";
import StudentsList from "./pages/Students/StudentsList";
import AddStudent from "./pages/Students/AddStudent";
import StudentDetails from "./pages/Students/StudentDetails";
import Teacher from "./pages/Teacher";
import TeacherDetail from "./pages/TeacherDetail";
import TeacherForm from "./pages/TeacherForm";
import LatestActivity from "./pages/LatestActivity";
import Event from "./pages/Event";
import { Finance } from "./pages/Finance";
import Chat from "./pages/Chat";

// KEPT: Your superior Layout component structure
const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Conditionally hide the Navbar if needed
  const isNavbarHidden = location.pathname === "/";

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
        {/* Navbar is rendered here, outside the Outlet */}
        {!isNavbarHidden && <Navbar setSidebarOpen={setSidebarOpen} />}

        {/* Child routes will be rendered here */}
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Parent route uses your Layout component */}
      <Route path="/" element={<Layout />}>
        {/* These child routes will be rendered inside the <Outlet /> */}
        <Route index element={<Dashboard />} />

        {/* YOUR student routes */}
        <Route path="students" element={<StudentsList />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="students/:studentId" element={<StudentDetails />} />

        {/* ADDED: Their teacher routes */}
        <Route path="teachers" element={<Teacher />} />
        <Route path="teacher/:id/:name/:subject" element={<TeacherDetail />} />
        <Route path="teacherform" element={<TeacherForm />} />

        {/* ADDED: Their other routes */}
        <Route path="event" element={<Event />} />
        <Route path="finance" element={<Finance />} />
        <Route path="chat" element={<Chat />} />
        <Route path="food" element={<FoodPage />} />
        <Route path="latestactivity" element={<LatestActivity />} />
      </Route>
    </Routes>
  );
}

export default App;
