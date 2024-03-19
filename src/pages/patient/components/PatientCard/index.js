import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import styles from "./patientcard.module.css";

const PatientCard = () => {
    return (
        <Paper elevation={3} className={styles.root} sx={{color: "white", backgroundColor: "rgba(156, 156, 251, 1)"}}>
            <div className={styles.cardLeft}>
                <Avatar />
            </div>
            <div className={styles.cardRight}>
                <p>Name: </p>
                <p>ABHA ID: </p>
                <p>Age: </p>
                <p>Gender: </p>
            </div>
        </Paper>
    );
}

export default PatientCard;