import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button } from "@mui/material"
import styles from "./viewprescription.module.css";


const ViewPrescription = ({ prescriptionList }) => {
    return (
        <TableContainer component={Paper} className={styles.tableContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Sr. No.</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Instructions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {prescriptionList.map((p, idx) => (
                        <TableRow key={p.id}>
                            <TableCell><p className={styles.text}>{idx + 1}</p></TableCell>
                            <TableCell><p className={styles.text}>{p.code}</p></TableCell>
                            <TableCell><p className={styles.text}>{p.name}</p></TableCell>
                            <TableCell><p className={styles.text}>{p.instruction}</p></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ViewPrescription;