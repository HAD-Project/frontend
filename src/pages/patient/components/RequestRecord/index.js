import styles from "./requestrecord.module.css";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";

const RequestRecord = ({ setShowRequestRecord }) => {

    const cancelRequest = () => {
        setShowRequestRecord(false);
    }
    
    return (
        <div className={styles.root}>
            <Paper className={styles.paper}>
                <h3>Request Record</h3>
                <div className={styles.form}>
                    <TextField id="patient-name" label="Patient Name" defaultValue="Patient Name" />
                    <TextField id="abha-id" label="ABHA ID" defaultValue="12345678901234" />
                    <TextField select label="Record Type">
                        <MenuItem>Prescription</MenuItem>
                        <MenuItem>Diagnostic</MenuItem>
                        <MenuItem>Immunization</MenuItem>
                        <MenuItem>Health Document</MenuItem>
                    </TextField>
                    <DatePicker label="From" />
                    <DatePicker label="To" />
                    <DatePicker label="Expiry" />
                    <div className={styles.buttonGroup}>
                        <Button variant="contained">Request</Button>
                        <Button variant="contained" color="warning" onClick={cancelRequest}>Cancel</Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default RequestRecord;