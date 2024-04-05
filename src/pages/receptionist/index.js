import AppointmentComponent from "./components/AppointmentComponent/AppointmentComponent";
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import {ReceptionistHomePage} from "./components/ReceptionistHomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Receptionist = ()=>{


    return(
    //   <div>
    //   {/* <AddAppointment addAppointment={addAppointment} /> */}
    //   <AppointmentTable />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<ReceptionistHomePage />}/>
        
        <Route path="/appointment-list" element={<AppointmentTable />}/>
        <Route path="/add-appointment" element={<AppointmentComponent />}></Route>
      </Routes>
    </Router>
    )
}
export default Receptionist;