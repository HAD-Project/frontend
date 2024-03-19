// import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
// import AddAppointment from "./components/AddAppointment/AddAppointment";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import AppointmentTable from "./components/AppointmentTable/AppointmentTable";
import EditPatientDetails from "./components/EditPatientDetails/EditPatientDetails";
import PatientList from "./components/PatientList/PatientList";
import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
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
        {/* <Route exact path="/"><Receptionist /></Route> */}
        <Route exact path="/patient-list">
          <PatientList patients={patients} />
        </Route>
        {/* <Route><RegisterPatient /></Route> */}
        <Route path="/patient-list/edit/:patientID">
          <EditPatientDetails patients={patients} />
        </Route>
        <Route path="/appointment-list"><AppointmentTable /></Route>
        <Route path="/appointment-list/add"><AddAppointment /></Route>
      </Routes>
    </Router>
    )
}
export default Receptionist;