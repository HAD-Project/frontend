import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';

const PrescriptionTable = () => {
    const prescriptions = [
        {
            id: 1,
            name: "ABC",
            date: "DD/MM/YYYY",
        },
        {
            id: 2,
            name: "ABC",
            date: "DD/MM/YYYY",
        },
        {
            id: 3,
            name: "ABC",
            date: "DD/MM/YYYY",
        },
        {
            id: 4,
            name: "ABC",
            date: "DD/MM/YYYY",
        },
    ];

    return (
        <Table style={{width: 500}} component={Paper} ali>
            <TableHead style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>
                <TableRow>
                    <TableCell style={{color: "white"}}>Sr. No</TableCell>
                    <TableCell style={{color: "white"}}>Name</TableCell>
                    <TableCell style={{color: "white"}}>View Details</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {prescriptions.map((pat, idx) => (
                    <TableRow key={pat.id} style={{backgroundColor: idx % 2 == 0 ? "white" : "#e8e8e8"}}>
                        <TableCell>{pat.id}</TableCell>
                        <TableCell>{pat.name}</TableCell>
                        <TableCell><Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>View</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default PrescriptionTable;