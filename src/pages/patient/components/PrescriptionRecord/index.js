import { useState } from "react";
import { Paper, Table, TableCell, TableContainer, TextField, TableRow, TableHead, TableBody, Button } from "@mui/material";
import styles from "./prescriptionrecord.module.css";
import "../../../../assets/styles/styles.css";

const PrescriptionRecord = ({ prescriptionList, setPrescriptionList }) => {

    const [prescription, setPrescription] = useState({
        code: "",
        name: "",
        instruction: "",
    });

    const handleChange = (e) => {
        setPrescription({...prescription, [e.target.name]: e.target.value});
    }

    const addPrescription = () => {
        setPrescriptionList([...prescriptionList, {...prescription, id: crypto.randomUUID()}]);
        setPrescription({code: "", name: "", instruction: ""});
    }

    const deletePrescription = (id) => {
        const newPrescriptionList = prescriptionList.filter(p => p.id !== id);
        setPrescriptionList(newPrescriptionList);
    }

    return (
        <div className={styles.root}>
            <div className={styles.newPrescription}>
                <TextField className={styles.textField} name="code" variant="outlined" label="Code" value={prescription.code} onChange={handleChange}/>
                <TextField className={styles.textField} name="name" variant="outlined" label="Name" value={prescription.name} onChange={handleChange}/>
                <TextField className={styles.textField} name="instruction" variant="outlined" label="Instructions" value={prescription.instruction} onChange={handleChange}/>
                <button className="hsc-btn-contain" onClick={addPrescription}>Add</button>
            </div>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sr. No.</TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Instructions</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prescriptionList.map((p, idx) => (
                            <TableRow key={p.id}>
                                <TableCell><p className={styles.text}>{idx + 1}</p></TableCell>
                                <TableCell><p className={styles.text}>{p.code}</p></TableCell>
                                <TableCell><p className={styles.text}>{p.name}</p></TableCell>
                                <TableCell><p className={styles.text}>{p.instruction}</p></TableCell>
                                <TableCell>
                                    <Button variant="contained" color="warning" onClick={() => deletePrescription(p.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PrescriptionRecord;