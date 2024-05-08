import React from "react";
import RecCard from "./RecCard";
import { Outpatient, Doctor, Calendar } from "healthicons-react/dist/filled";
const Cards = ({data}) => {
  return (
    <div className="rec-dashboard-cards-section">
      <RecCard name="Total Patients" value={data.noOfPatients} Icon={Outpatient} />
      <RecCard name="Available Doctors" value={data.noOfDoctors} Icon={Doctor} />
      <RecCard name="Appointments" value={data.noOfAppointments} Icon={Calendar} />
    </div>
  );
};

export default Cards;
