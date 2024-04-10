import { useState } from "react";
import styles from "./addrecord.module.css";
import { Paper, MenuItem, FormControl, Button, TextField, InputLabel, Select, Dialog } from "@mui/material";
import { ADDRESS } from "../../../../utils";
import "../../../../assets/styles/styles.css";

const AddRecord = ({ showCreateRecord, setShowCreateRecord, patientData, fetchRecords }) => {

    const cancelCreation = () => {
        setShowCreateRecord(false);
    }

    const [recordData, setRecordData] = useState({
        "patientName": patientData.name,
        "abhaId": patientData.abhaId,
        "date": null,
        "recordType": "",
        "text": "",
        "display": "",
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
            body: JSON.stringify({...recordData, patientId: patientData.patientId, "date": new Date().toISOString()}),
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
        <Dialog className={styles.root} open={showCreateRecord} onClose={cancelCreation}>
            <Paper className={styles.paper}>
                <h3>Add Record</h3>
                <div className={styles.addRecordForm}>
                    <TextField label="Patient name" id="patient-name" value={recordData.patientName} name="patientName" onChange={handleChange} />
                    <TextField id="abha-id" label="ABHA ID" name="abhaId" value={recordData.abhaId} onChange={handleChange} />
                    <FormControl>
                        <InputLabel id="record-type">Record Type</InputLabel>
                        <Select label="Record Type" id="record-type" labelId="record-type" name="recordType" value={recordData.recordType} onChange={handleChange}>
                            <MenuItem value={"Prescription"}>Prescription</MenuItem>
                            <MenuItem value={"DiagnosticReport"}>Diagnostic</MenuItem>
                            <MenuItem value={"ImmunizationRecord"}>Immunization</MenuItem>
                            <MenuItem value={"HealthDocumentRecord"}>Health Document</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label="Title" name="display" value={recordData.display} onChange={handleChange} />
                    <TextField id="detatextils" name="text" value={recordData.text} onChange={handleChange} label="Details" multiline rows={4} />
                    <div className={styles.buttonGroup}>
                        <button className="hsc-btn-contain" style={{width: "90px"}} onClick={createRecord}>Create</button>
                        <Button variant="contained" color="warning" style={{width: "90px"}} onClick={cancelCreation}>Cancel</Button>
                    </div>
                </div>
            </Paper>
        </Dialog>
    );
}

export default AddRecord;