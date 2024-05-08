import React from "react";
import useGetData from "./hooks/useGetData";
import Cards from "./components/Cards";
import DoctorList from "./components/DoctorList";
import AppointmentList from "./components/AppointmentList";
import "./styles/rec_dash.css";

const ReceptionistDashboard = () => {
  const { data } = useGetData();
  return (
    <div className="rec-dashboard-main">
      {/* cards section */}
      <Cards data={data} />
      <div className="rec-dashboard-tables-section">
        {/* doctors section */}
        <DoctorList data={data.doctors ? data.doctors : []} />
        {/* appointments section */}
        <AppointmentList data={data.appointments ? data.appointments : []} />
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
