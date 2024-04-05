import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PatientCard from "./components/PatientCard";
import PrescriptionTable from "./components/PrescriptionTable";
import RecordsTable from "./components/RecordsTable";
import AddRecord from "./components/AddRecord";
import RequestRecord from "./components/RequestRecord";
import styles from "./patient.module.css";
import Button from '@mui/material/Button';
import { ADDRESS } from "../../utils";

const Patient = () => {

    const [showCreateRecord, setShowCreateRecord] = useState(false);
    const [showRequestRecord, setShowRequestRecord] = useState(false);
    const patientId = useSelector((state) => state.doctor.patientId);
    const [patientData, setPatientData] = useState({});

    useEffect(() => {
        const fetchPatientData = async () => {
            await fetch(`${ADDRESS}/api/doctor/patient?patientId=${patientId}`, {
                method: "GET",
            })
            .then(res => res.json())
            .then(data => setPatientData(data))
            .catch(err => console.log(err));
        }

        fetchPatientData();

    })

    console.log(patientId);

    return (
        <div className={styles.root}>
            {showCreateRecord && <AddRecord setShowCreateRecord={setShowCreateRecord} patientData={patientData} />}
            {showRequestRecord && <RequestRecord setShowRequestRecord={setShowRequestRecord} />}
            <div className={styles.top}>
                <PatientCard patientData={patientData} />
                <div className={styles.buttonGroup}>
                    <Button variant="contained" color="warning">Delete</Button>
                    <Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}} onClick={() => setShowRequestRecord(true)}>Request old record</Button>
                    <Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}} onClick={() => setShowCreateRecord(true)}>Add record</Button>
                </div>
            </div>
            <div className={styles.tables}>
                <RecordsTable />
            </div>
        </div>
    );
}

export default Patient;