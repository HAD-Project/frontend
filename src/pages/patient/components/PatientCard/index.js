import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import styles from "./patientcard.module.css";

const PatientCard = ({ patientData }) => {

    return (
        <Paper elevation={3} className={styles.root} sx={{color: "white", backgroundColor: "rgba(156, 156, 251, 1)"}}>
            <div className={styles.cardLeft}>
                <Avatar />
            </div>
            <div className={styles.cardRight}>
                <p>Name: {patientData.name}</p>
                <p>ABHA ID: {patientData.abhaId}</p>
                <p>Age: {patientData.age}</p>
                <p>Gender: {patientData.gender}</p>
            </div>
        </Paper>
    );
}

export default PatientCard;