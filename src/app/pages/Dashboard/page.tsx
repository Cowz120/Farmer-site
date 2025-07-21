import React from "react";
import Dashboardtop from "./Dashboardtop";
import LineChart from "./LineChart";
import { ActiveUsers } from "./ActiveUsers";
import RecentActivityTable from "./table1";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-3 rounded-md">
      <p className="text-3xl font-semibold  mx-3">OVERVIEW</p>
      <div>
        <Dashboardtop />
      </div>
      <div className="flex justify-center gap-4">
        <div>
          <LineChart />
        </div>
        <div>
          <ActiveUsers />
        </div>
      </div>
      <div className="my-4">
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Dashboard;
