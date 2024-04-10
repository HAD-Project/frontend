import styles from "./requestrecord.module.css";
import { Paper, FormControl, Button, MenuItem, TextField, Dialog, InputLabel, Select } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from "react";
import "../../../../assets/styles/styles.css";

const RequestRecord = ({ showRequestRecord, setShowRequestRecord, patientData }) => {

    const cancelRequest = () => {
        setShowRequestRecord(false);
    }

    const [requestData, setRequestData] = useState({
        "patientName": patientData.name,
        "abhaId": patientData.abhaId,
        "recordType": "",
        "fromDate": null,
        "toDate": null,
        "expiryDate": null
    });

    const handleChange = (e) => {
        setRequestData({...requestData, [e.target.name]: e.target.value});
    }
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <Dialog className={styles.root} open={showRequestRecord} onClose={cancelRequest}>
                <Paper className={styles.paper}>
                    <h3>Request Record</h3>
                    <div className={styles.form}>
                        <TextField id="patient-name" label="Patient Name" value={requestData.patientName} />
                        <TextField id="abha-id" label="ABHA ID" value={requestData.abhaId} />
                        <FormControl>
                            <InputLabel id="record-type">Record Type</InputLabel>
                            <Select label="Record Type" id="record-type" labelId="record-type" name="recordType" value={requestData.recordType} onChange={handleChange}>
                                <MenuItem value={"prescription"}>Prescription</MenuItem>
                                <MenuItem value={"diagnostic"}>Diagnostic</MenuItem>
                                <MenuItem value={"immunization"}>Immunization</MenuItem>
                                <MenuItem value={"health_document"}>Health Document</MenuItem>
                            </Select>
                        </FormControl>
                        <DatePicker label="From" onChange={(date) => setRequestData({...requestData, "fromDate": new Date(date).toISOString()})}/>
                        <DatePicker label="To" onChange={(date) => setRequestData({...requestData, "toDate": new Date(date).toISOString()})}/>
                        <DatePicker label="Expiry" onChange={(date) => setRequestData({...requestData, "expiryDate": new Date(date).toISOString()})}/>
                        <div className={styles.buttonGroup}>
                            <button className="hsc-btn-contain">Request</button>
                            <Button variant="contained" color="warning" onClick={cancelRequest}>Cancel</Button>
                        </div>
                    </div>
                </Paper>
            </Dialog>
        </LocalizationProvider>
    );
}

export default RequestRecord;