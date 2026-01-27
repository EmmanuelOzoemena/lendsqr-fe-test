import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";
import DashboardSidebar from "../components/dashboardSidebar";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <DashboardHeader />
      <div>
        <DashboardSidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
