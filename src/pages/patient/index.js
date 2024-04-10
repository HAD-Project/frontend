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
import "../../assets/styles/styles.css";

const Patient = () => {

    const [showCreateRecord, setShowCreateRecord] = useState(false);
    const [showRequestRecord, setShowRequestRecord] = useState(false);
    const patientId = useSelector((state) => state.doctor.patientId);
    const [patientData, setPatientData] = useState({});
    const [showRecord, setShowRecord] = useState(false);
    const [record, setRecord] = useState({});
    const [recordList, setRecordList] = useState([]);

    const fetchPatientData = async () => {
        await fetch(`${ADDRESS}/api/v1/doctor/patient?patientId=${patientId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
        .then(res => res.json())
        .then(data => setPatientData(data))
        .catch(err => console.log(err));
    }

    const fetchRecords = async () => {
        await fetch(`${ADDRESS}/api/v1/doctor/getRecords?patientId=${patientId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
        .then(res => res.json())
        .then(data => setRecordList(data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchPatientData();
    }, []);

    return (
        <div className={styles.root}>
            {showRecord && <RecordCard record={record} setShowRecord={setShowRecord} />}
            {showCreateRecord && <AddRecord showCreateRecord={showCreateRecord} setShowCreateRecord={setShowCreateRecord} patientData={patientData} fetchRecords={fetchRecords} />}
            {showRequestRecord && <RequestRecord showRequestRecord={showRequestRecord} patientData={patientData} setShowRequestRecord={setShowRequestRecord} />}
            <div className={styles.top}>
                <PatientCard patientData={patientData} />
                <div className={styles.buttonGroup}>
                    <button variant="contained" className="hsc-btn-contain" onClick={() => setShowCreateRecord(true)}>Add record</button>
                    <button variant="contained" className="hsc-btn-contain">Link Records</button>
                    <button variant="contained" className="hsc-btn-contain" onClick={() => setShowRequestRecord(true)}>Request old record</button>
                    <Button variant="contained" color="warning">Delete</Button>
                </div>
            </div>
            <div className={styles.tables}>
                <RecordsTable setRecord={setRecord} setShowRecord={setShowRecord} fetchRecords={fetchRecords} records={recordList} />
            </div>
        </div>
    );
}

export default Patient;