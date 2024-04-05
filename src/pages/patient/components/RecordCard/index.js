import styles from "./recordcard.module.css";
import { Paper, Button } from "@mui/material";

const RecordCard = ({ record, setShowRecord }) => {
    return (
        <div className={styles.root}>
            <Paper className={styles.paper}>
                <p>Record type: {record.type}</p>
                <p>Record date: {record.date}</p>
                <p>Information: <br />{record.text}</p>
                <Button className={styles.button} style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}} variant="contained" onClick={() => setShowRecord(false)}>Close</Button>
            </Paper>
        </div>
    );
}

export default RecordCard;