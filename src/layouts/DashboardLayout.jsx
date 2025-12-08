import { Outlet } from 'react-router'; 
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 transition-colors duration-300">
      
      <Sidebar />
      
      <div className="flex-1 md:ml-64">
        <div className="pt-16 md:pt-0 p-4 sm:p-6"> 
          <Outlet />
        </div>
      </div>
      
    </div>
  );
};

export default DashboardLayout;
