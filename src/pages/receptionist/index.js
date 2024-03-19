// import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import {ReceptionistHomePage} from "./components/ReceptionistHomePage";
import EditPatientDetails from "./components/EditPatientDetails/EditPatientDetails";
import PatientList from "./components/PatientList/PatientList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Receptionist = ()=>{
  const patients = [
    {
        "patientID": "P001",
        "name": "John Doe",
        "sex": "Male",
        "age": 30
    },
    {
        "patientID": "P002",
        "name": "Jane Smith",
        "sex": "Female",
        "age": 25
    },
    {
        "patientID": "P003",
        "name": "Alice Brown",
        "sex": "Female",
        "age": 40
    }
];
    return(
    <Router>
      <Routes>
        <Route path="/" element={<ReceptionistHomePage />}/>
        <Route path="/patient-list" element={<PatientList />}/>
        {/* <Route path="/register-patient" element={<RegisterPatient />}></Route> */}
        <Route path="/patient-list/edit/:patientID" element={<EditPatientDetails patients={patients} />}></Route>
        <Route path="/appointment-list" element={<AppointmentTable />}/>
        <Route path="/appointment-list/add" element={<AddAppointment />}></Route>
      </Routes>
    </Router>
    )
}
export default Receptionist;