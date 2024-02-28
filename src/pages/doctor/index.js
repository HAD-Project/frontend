import { useState } from "react";
import DoctorAppointments from "./components/DoctorAppointments/DoctorAppointments";
import PatientList from "./components/PatientList/PatientList";

const Doctor = () => {
    const screens = {
        OVERVIEW: 0,
        PATIENTS: 1,
    }
    const [screen, setScreen] = useState(screens.OVERVIEW);

    return (
        <>
            <button onClick={() => setScreen(screens.OVERVIEW)}>Overview</button>
            <button onClick={() => setScreen(screens.PATIENTS)}>Patients</button>
            {screen === screens.OVERVIEW && <DoctorAppointments />}
            {screen === screens.PATIENTS && <PatientList />}
        </>
    )
}

export default Doctor;