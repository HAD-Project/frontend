import React from "react";
import useGetData from "./hooks/useGetData";
import Cards from "./components/Cards";
import DoctorList from "./components/DoctorList";
import AppointmentList from "./components/AppointmentList";
import "./styles/rec_dash.css"

const ReceptionistDashboard = () => {
  const [data] = useGetData();
  return (
    <div className="rec-dashboard-main">
      {/* cards section */}
      <Cards />
      <div className="rec-dashboard-tables-section">
        {/* doctors section */}
        <DoctorList />
        {/* appointments section */}
        <AppointmentList />
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
