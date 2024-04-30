import { useState } from "react";
import styles from "./addrecord.module.css";
import { Paper, MenuItem, FormControl, Button, TextField, InputLabel, Select, Dialog } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ADDRESS } from "../../../../utils";
import "../../../../assets/styles/styles.css";
import PrescriptionRecord from "../PrescriptionRecord";
import dayjs from "dayjs";

const AddRecord = ({ showCreateRecord, setShowCreateRecord, patientData, fetchRecords }) => {

    const cancelCreation = () => {
        setShowCreateRecord(false);
    }

    const [prescriptionList, setPrescriptionList] = useState([]);

    const [recordData, setRecordData] = useState({
        "patientName": patientData.name,
        "abhaId": patientData.abhaId,
        "date": null,
        "recordType": "",
        "text": "",
        "display": "",
        "date": new Date().toISOString(),
    });

    const handleChange = (e) => {
        setRecordData({...recordData, [e.target.name]: e.target.value})
    }

    const createRecord = async () => {
        await fetch(`${ADDRESS}/api/v1/doctor/createRecord`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
            method: "POST",
            body: JSON.stringify({...recordData, patientId: patientData.patientId, prescriptionList: prescriptionList}),
        })
        .then(res => {
            if(res.status === 200) {
                alert("Record created");
                setShowCreateRecord(false);
                fetchRecords()
            }
            else {
                alert("Error in creating recod");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <Dialog className={styles.root} open={showCreateRecord} onClose={cancelCreation} maxWidth="lg">
                <Paper className={styles.paper}>
                    <div className={styles.addRecordForm}>
                    <h3>Add Record</h3>
                        <TextField className={styles.textField} label="Patient name" id="patient-name" value={recordData.patientName} name="patientName" onChange={handleChange} />
                        <TextField className={styles.textField} id="abha-id" label="ABHA ID" name="abhaId" value={recordData.abhaId} onChange={handleChange} />
                        <DatePicker className={styles.textField} value={dayjs(recordData.date)} onChange={(e) => setRecordData({...recordData, "date": new Date(e).toISOString()})} />
                        <FormControl>
                            <InputLabel id="record-type">Record Type</InputLabel>
                            <Select className={styles.textField} label="Record Type" id="record-type" labelId="record-type" name="recordType" value={recordData.recordType} onChange={handleChange}>
                                <MenuItem value={"Prescription"}>Prescription</MenuItem>
                                <MenuItem value={"DiagnosticReport"}>Diagnostic</MenuItem>
                                <MenuItem value={"ImmunizationRecord"}>Immunization</MenuItem>
                                <MenuItem value={"HealthDocumentRecord"}>Health Document</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className={styles.textField} label="Title" name="display" value={recordData.display} onChange={handleChange} />
                        {recordData.recordType === "Prescription" && <PrescriptionRecord prescriptionList={prescriptionList} setPrescriptionList={setPrescriptionList} />}
                        {recordData.recordType !== "Prescription" && <div style={{display: "flex", flexDirection: "column", rowGap: "24px"}}>
                            <TextField className={styles.textField} id="detatextils" name="text" value={recordData.text} onChange={handleChange} label="Details" multiline rows={4} />
                        </div>}
                        <div className={styles.buttonGroup}>
                            <button className="hsc-btn-contain" style={{width: "90px"}} onClick={createRecord}>Create</button>
                            <Button variant="contained" color="warning" style={{width: "90px"}} onClick={cancelCreation}>Cancel</Button>
                        </div>
                    </div>
                </Paper>
            </Dialog>
        </LocalizationProvider>
    );
}

export default AddRecord;