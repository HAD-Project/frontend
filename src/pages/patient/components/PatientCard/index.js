import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import styles from "./patientcard.module.css";

const PatientCard = () => {

    const patient = useSelector((state) => state.doctor.patient);

    return (
        <Paper elevation={3} className={styles.root} sx={{color: "white", backgroundColor: "rgba(156, 156, 251, 1)"}}>
            <div className={styles.cardLeft}>
                <Avatar />
            </div>
            <div className={styles.cardRight}>
                <p>Name: {patient.name}</p>
                <p>ABHA ID: {patient.abhaId}</p>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
            </div>
        </Paper>
    );
}

export default PatientCard;