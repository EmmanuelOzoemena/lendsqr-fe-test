import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboardHeader";
import DashboardSidebar from "../components/dashboardSidebar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />
      <div className="dashboard-layout__container">
        <DashboardSidebar />
        <main className="dashboard-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
