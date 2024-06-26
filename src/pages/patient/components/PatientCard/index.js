import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import styles from "./patientcard.module.css";
import "../../../../assets/styles/styles.css";

const PatientCard = ({ patientData }) => {

    return (
        <Paper elevation={3} className={styles.root} sx={{color: "white", backgroundColor: "#007ea7"}}>
            <div className={styles.cardLeft}>
                <Avatar />
            </div>
            <div className={styles.cardRight}>
                <p>Name: {patientData.name}</p>
                <p>ABHA ID: {patientData.abhaId}</p>
                <p>DOB: {new Date(patientData.dob).toLocaleDateString()}</p>
                <p>Gender: {patientData.gender}</p>
            </div>
        </Paper>
    );
}

export default PatientCard;