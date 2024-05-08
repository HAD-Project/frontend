import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ReceptionistDashboard from "../pages/RecptionistDashboard";
import ReceptionistPatients from "../pages/ReceptionistPatients";
import DoctorList from "../pages/admin/components/DoctorList/DoctorList";
import Doctor from "../pages/doctor";
import Patient from "../pages/patient";
import AdminReception from "../pages/adminReceptionists";
import PageNavigation from "../components/Navigation";
import AppointmentTable from "../pages/receptionist/components/AppointmentTable/AppointmentTable"
import AppointmentComponent from "../pages/receptionist/components/AppointmentComponent/AppointmentComponent";

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

          <Route 
            path="receptionist/appointments"
            element={<AppointmentTable />}
          />

          <Route 
            path="receptionist/add-appointment"
            element={<AppointmentComponent />}
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
          <Route
            path="adminreceptionists"
            element={
              <div>
                <AdminReception />
              </div>
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
