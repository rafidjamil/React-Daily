import React from "react";
import Sidebar from "./Sidebar";
import Tables from "./Tables";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        
      <Tables/>
      </div>
    </div>
  );
};

export default Dashboard;
