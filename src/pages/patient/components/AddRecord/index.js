import styles from "./addrecord.module.css";
import Paper from "@mui/material/Paper";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddRecord = ({ setShowCreateRecord }) => {

    const cancelCreation = () => {
        setShowCreateRecord(false);
    }

    return (
        <div className={styles.root}>
            <Paper className={styles.paper}>
                <FormControl className={styles.form}>
                    <TextField id="patient-name" label="Patient Name" defaultValue="Patient Name" />
                    <TextField id="abha-id" label="ABHA ID" defaultValue="12345678901234" />
                    <TextField id="date" label="Date" defaultValue="1/1/2001" />
                    <TextField select label="Record Type">
                        <MenuItem>Prescription</MenuItem>
                        <MenuItem>Diagnostic</MenuItem>
                        <MenuItem>Immunization</MenuItem>
                        <MenuItem>Health Document</MenuItem>
                    </TextField>
                    <div className={styles.buttonGroup}>
                        <Button variant="contained">Create</Button>
                        <Button variant="contained" color="warning" onClick={cancelCreation}>Cancel</Button>
                    </div>
                </FormControl>
            </Paper>
        </div>
    );
}

export default AddRecord;