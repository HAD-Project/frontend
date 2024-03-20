import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ReceptionistDashboard from "../pages/RecptionistDashboard";
import ReceptionistPatients from "../pages/ReceptionistPatients";
import DoctorList from "../pages/admin/components/DoctorList/DoctorList";
import Doctor from "../pages/doctor";
import Patient from "../pages/patient";
import AdminReception from "../pages/adminReceptionists";
// import PageNavigation from "../Components/Navigation";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* receptionist */}

        <Route
          path="/receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />

        <Route
          path="/receptionist/patients"
          element={<ReceptionistPatients />}
        />
        <Route path="/doctor" element={<div><Doctor /></div>} />      
            <Route path="/patient" element={<div><Patient /></div>} />
            <Route path="/admin" element={<div><DoctorList/></div>} />
            <Route path="/adminreceptionists" element={<div><AdminReception/></div>}/>
        {/* doctor */}
        {/* admin */}
        {/* not match */}
        <Route path="*" element={<div>no match found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
