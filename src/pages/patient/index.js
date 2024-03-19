import PatientCard from "./components/PatientCard";
import PrescriptionTable from "./components/PrescriptionTable";
import RecordsTable from "./components/RecordsTable";
import styles from "./patient.module.css";
import Button from '@mui/material/Button';

const Patient = () => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <PatientCard />
                <div className={styles.buttonGroup}>
                    <Button variant="contained" color="warning">Delete</Button>
                    <Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>Request old record</Button>
                    <Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>Add record</Button>
                </div>
            </div>
            <div className={styles.tables}>
                <RecordsTable />
            </div>
        </div>
    );
}

export default Patient;