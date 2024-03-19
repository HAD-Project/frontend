import { useState } from "react";
import styles from "./addrecord.module.css";
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { InputLabel, Select } from "@mui/material";
import { Form } from "react-router-dom";
import { ADDRESS } from "../../../../utils";

const AddRecord = ({ setShowCreateRecord, patientData }) => {

    const cancelCreation = () => {
        setShowCreateRecord(false);
    }

    const [recordData, setRecordData] = useState({
        "patientName": patientData.name,
        "abhaId": patientData.abhaId,
        "recordType": 0,
        "text": ""
    });

    const handleChange = (e) => {
        setRecordData({...recordData, [e.target.name]: e.target.value})
    }

    const createRecord = async () => {
        console.log(recordData);
        await fetch(`${ADDRESS}/api/doctor/createRecord`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({...recordData, patientId: patientData.patientId, doctorId: 1, "date": new Date().toISOString()}),
        })
        .then(res => console.log(res.status))
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.root}>
            <Paper className={styles.paper}>
                <h3>Add Record</h3>
                <div className={styles.addRecordForm}>
                    <TextField id="patient-name" label="Patient Name" value={recordData.patientName} name="patientName" onChange={handleChange} disabled />
                    <TextField id="abha-id" label="ABHA ID" name="abhaId" value={recordData.abhaId} onChange={handleChange} disabled />
                    {/* <TextField id="date" name="date" value={recordData.date} onChange={handleChange} label="Date" /> */}
                    <InputLabel id="record-type">Record Type</InputLabel>
                    <Select name="recordType" value={recordData.recordType} onChange={handleChange}>
                        <MenuItem value={0}>Prescription</MenuItem>
                        <MenuItem value={1}>Diagnostic</MenuItem>
                        <MenuItem value={2}>Immunization</MenuItem>
                        <MenuItem value={3}>Health Document</MenuItem>
                    </Select>
                    <TextField id="detatextils" name="text" value={recordData.text} onChange={handleChange} label="Details" multiline rows={4} />
                    <div className={styles.buttonGroup}>
                        <Button variant="contained" onClick={createRecord}>Create</Button>
                        <Button variant="contained" color="warning" onClick={cancelCreation}>Cancel</Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default AddRecord;