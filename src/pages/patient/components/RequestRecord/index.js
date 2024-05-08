import styles from "./requestrecord.module.css";
import { Paper, FormControl, Button, MenuItem, TextField, Dialog, InputLabel, Select, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import "../../../../assets/styles/styles.css";
import { ADDRESS } from "../../../../utils";

const RequestRecord = ({ showRequestRecord, setShowRequestRecord, patientData }) => {

    const cancelRequest = () => {
        setShowRequestRecord(false);
    }

    const [requestData, setRequestData] = useState({
        "patientName": patientData.name,
        "abhaId": patientData.abhaId,
        "metaCode": "",
        "explanation": "",
        "recordType": [],
        "fromDate": null,
        "toDate": null,
        "expiryDate": null,
    });

    const handleChange = (e) => {
        setRequestData({...requestData, [e.target.name]: e.target.value});
    }

    const requestRecords = async () => {
        console.log(requestData);
        await fetch(`${ADDRESS}/api/v1/doctor/requestRecords`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
            body: JSON.stringify(requestData)
        })
        .then(res => {
            if(res.status === 200) {
                alert("Records requested");
                setShowRequestRecord(false);
            }
            else {
                alert("Error in requesting recod");
            }
        })
        .catch(err => console.log(err));
    }
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <Dialog className={styles.root} open={showRequestRecord} onClose={cancelRequest} maxWidth="lg">
                <Paper className={styles.paper}>
                    <h3>Request Record</h3>
                    <div className={styles.form}>
                        <TextField className={styles.input} id="patient-name" label="Patient Name" value={requestData.patientName} />
                        <TextField className={styles.input} id="abha-id" label="ABHA ID" value={requestData.abhaId} />
                        <FormControl>
                            <InputLabel id="metaCode">Code</InputLabel>
                            <Select 
                                className={styles.input} 
                                label="Code" 
                                id="metaCode" 
                                labelId="metaCode" 
                                name="metaCode" 
                                value={requestData.metaCode} 
                                onChange={handleChange}
                            >
                                <MenuItem value={"CAREMGT"}>Care Management</MenuItem>
                                <MenuItem value={"BTG"}>Break the Glass</MenuItem>
                                <MenuItem value={"PUBHLTH"}>Public Health</MenuItem>
                                <MenuItem value={"HPAYMT"}>Healthcare Payment</MenuItem>
                                <MenuItem value={"DSRCH"}>Disease Specific Healthcare Research</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="record-type">Record Type</InputLabel>
                            <Select 
                                className={styles.input} 
                                label="Record Type" 
                                id="record-type" 
                                labelId="record-type" 
                                name="recordType" 
                                value={requestData.recordType} 
                                onChange={handleChange} 
                                multiple 
                            >
                                <MenuItem value={"Prescription"}>Prescription</MenuItem>
                                <MenuItem value={"DiagnosticReport"}>Diagnostic</MenuItem>
                                <MenuItem value={"ImmunizationRecord"}>Immunization</MenuItem>
                                <MenuItem value={"HealthDocumentRecord"}>Health Document</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField className={styles.input} name="explanation" label="Explanation" value={requestData.explanation} onChange={handleChange} />
                        <DatePicker className={styles.input} label="From" onChange={(date) => setRequestData({...requestData, "fromDate": new Date(date).toISOString()})}/>
                        <DatePicker className={styles.input} label="To" onChange={(date) => setRequestData({...requestData, "toDate": new Date(date).toISOString()})}/>
                        <DatePicker className={styles.input} label="Expiry" onChange={(date) => setRequestData({...requestData, "expiryDate": new Date(date).toISOString()})}/>
                        <div className={styles.buttonGroup}>
                            <button className="hsc-btn-contain" onClick={requestRecords}>Request</button>
                            <Button variant="contained" color="warning" onClick={cancelRequest}>Cancel</Button>
                        </div>
                    </div>
                </Paper>
            </Dialog>
        </LocalizationProvider>
    );
}

export default RequestRecord;