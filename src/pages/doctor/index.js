import { useState } from "react";
import DoctorAppointments from "./components/DoctorAppointments/DoctorAppointments";
import PatientList from "./components/PatientList/PatientList";
import "../../assets/styles/styles.css";

const Doctor = () => {
    const screens = {
        OVERVIEW: 0,
        PATIENTS: 1,
    }
    const [screen, setScreen] = useState(screens.OVERVIEW);

    return (
        <>
            <button className="hsc-btn-contain" style={{margin: "0 4px"}}onClick={() => setScreen(screens.OVERVIEW)}>Overview</button>
            <button className="hsc-btn-contain" style={{margin: "0 4px"}}onClick={() => setScreen(screens.PATIENTS)}>Patients</button>
            <br />
            <br />
            {screen === screens.OVERVIEW && <DoctorAppointments />}
            {screen === screens.PATIENTS && <PatientList />}
        </>
    )
}

export default Doctor;