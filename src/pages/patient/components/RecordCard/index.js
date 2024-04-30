import styles from "./recordcard.module.css";
import { Paper, Button, Dialog } from "@mui/material";
import ViewPrescription from "../ViewPrescription";
import "../../../../assets/styles/styles.css";

const RecordCard = ({ record, showRecord, setShowRecord }) => {
    console.log(record);
    return (
        <Dialog open={showRecord} onClose={() => setShowRecord(false)} maxWidth="lg">
            <Paper className={styles.paper}>
                <p>Record type: {record.recordType}</p>
                <p>Record date: {record.date}</p>
                <p>Information: <br />{record.text}</p>
                {record.recordType === "Prescription" && <ViewPrescription prescriptionList={record.prescriptionList} />}
                <button className={`hsc-btn-contain ${styles.button}`} onClick={() => setShowRecord(false)}>Close</button>
            </Paper>
        </Dialog>
    );
}

export default RecordCard;