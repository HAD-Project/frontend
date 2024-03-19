import React from "react";
import RecCard from "./RecCard";
import { Outpatient, Doctor, Calendar } from "healthicons-react/dist/filled";
const Cards = () => {
  return (
    <div className="rec-dashboard-cards-section">
      <RecCard name="Total Patients" value={123} Icon={Outpatient} />
      <RecCard name="Available Doctors" value={123} Icon={Doctor} />
      <RecCard name="Appointments" value={123} Icon={Calendar} />
    </div>
  );
};

export default Cards;
