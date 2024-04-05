import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PatientCard from "./components/PatientCard";
import RecordCard from "./components/RecordCard";
import RecordsTable from "./components/RecordsTable";
import AddRecord from "./components/AddRecord";
import RequestRecord from "./components/RequestRecord";
import styles from "./patient.module.css";
import Button from '@mui/material/Button';
import { ADDRESS } from "../../utils";
import { viewPatient } from "../../slices/doctorSlice";

const Patient = () => {

    const [showCreateRecord, setShowCreateRecord] = useState(false);
    const [showRequestRecord, setShowRequestRecord] = useState(false);
    const patientId = useSelector((state) => state.doctor.patientId);
    const [patientData, setPatientData] = useState({});
    const [showRecord, setShowRecord] = useState(false);
    const [record, setRecord] = useState({});


    useEffect(() => {
        const fetchPatientData = async () => {
            await fetch(`${ADDRESS}/api/doctor/patient?patientId=${patientId}`, {
                method: "GET",
            })
            .then(res => res.json())
            .then(data => setPatientData(data))
            .catch(err => console.log(err));
        }
    }, []);

    return (
        <div className={styles.root}>
            {showRecord && <RecordCard record={record} setShowRecord={setShowRecord} />}
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
                <RecordsTable setRecord={setRecord} setShowRecord={setShowRecord} />
            </div>
        </div>
    );
}

export default Patient;