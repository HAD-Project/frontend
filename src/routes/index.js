import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ReceptionistDashboard from "../pages/RecptionistDashboard";
import ReceptionistPatients from "../pages/ReceptionistPatients";
import DoctorList from "../pages/admin/components/DoctorList/DoctorList";
import Doctor from "../pages/doctor";
import Patient from "../pages/patient";
import PageNavigation from "../components/Navigation";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        {/* receptionist */}
        <Route path="/" element={<PageNavigation />}>

        <Route
          path="receptionist/dashboard"
          element={<ReceptionistDashboard />}
        />

        <Route
          path="receptionist/patients"
          element={<ReceptionistPatients />}
        />

        {/* doctor */}
        {/* admin */}
        <Route path="doctor" element={<Doctor />} />
        <Route path="patient" element={<Patient />} />
        <Route
          path="admin"
          element={
            <>
              <DoctorList />
            </>
          }
        />
        {/* not match */}
        <Route path="*" element={<div>no match found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
