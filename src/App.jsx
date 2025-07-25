import { useState } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Import all your pages and components
import Dashboard from './pages/Dashboard';
import FoodPage from './pages/Foodmenu';
import StudentsList from './pages/Students/StudentsList'; 
import AddStudent from './pages/Students/AddStudent';
import StudentDetails from './pages/Students/StudentDetails';
// import Teachers from './pages/Teachers';
import Sidebar from './components/Mainsidebar';
import Navbar from './components/Navbar';


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Conditionally hide the Navbar if needed
  const isNavbarHidden = location.pathname === '/'; 

  return (
    <div className="flex">
      {/* Permanent Sidebar for Desktop */}
      <div className='hidden lg:block min-h-screen'>
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>

      {/* Mobile Sidebar (overlay) */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-screen bg-white shadow-lg z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#F3F4FF] min-h-screen">
        {!isNavbarHidden && <Navbar setSidebarOpen={setSidebarOpen} />}
        
       
        <Outlet />
      </main>
    </div>
  );
};



function App() {
  return (
    <Routes>
      {/* This parent route uses the Layout component */}
      <Route path="/" element={<Layout />}>
        
        {/* These child routes will be rendered inside the <Outlet /> */}
        <Route index element={<Dashboard />} />
        <Route path="students" element={<StudentsList />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="students/:studentId" element={<StudentDetails />} /> 
        <Route path="food" element={<FoodPage />} />


      </Route>
      
     
    </Routes>
  );
}

export default App;