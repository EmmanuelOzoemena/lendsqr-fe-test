import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";
import DashboardSidebar from "../components/dashboardSidebar";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  return (
    <div className="dashboard-layout">
     <DashboardHeader onMenuClick={toggleSidebar} />
      <div className="dashboard-layout__container">
        <DashboardSidebar isOpen={isSidebarOpen} />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
