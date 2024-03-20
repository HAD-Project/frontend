import PageRoutes from "./routes";
import "./assets/styles/styles.css"
import DoctorList from "./pages/admin/components/DoctorList/DoctorList";
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";

import AdminReception from "./pages/adminReceptionists";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <PageRoutes/>
    <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<><DoctorList/></>} />
        <Route path="/adminreceptionists" element={<AdminReception/>}/>
    </div>
  );
}

export default App;
