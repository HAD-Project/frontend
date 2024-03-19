import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import ReceptionistDashboard from "../Pages/RecptionistDashboard";
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
          element={<ReceptionistDashboard/>}
        />

        <Route
          path="/receptionist/patients"
          element={<div>receptionist patients</div>}
        />

        {/* doctor */}
        {/* admin */}
        {/* not match */}
        <Route path="*" element={<div>no match found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
