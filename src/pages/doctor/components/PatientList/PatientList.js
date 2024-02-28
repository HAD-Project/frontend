import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';
import { useNavigate } from "react-router-dom";

const PatientList = () => {

    const navigate = useNavigate();

    const patients = [
        {
            id: 1,
            name: "ABC",
        },
        {
            id: 2,
            name: "ABC",
        },
        {
            id: 3,
            name: "ABC",
        },
        {
            id: 4,
            name: "ABC",
        },
    ];

    const showPatient = () => {
        navigate("/patient");
    }

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
                {patients.map((pat, idx) => (
                    <TableRow key={pat.id} style={{backgroundColor: idx % 2 == 0 ? "white" : "#e8e8e8"}}>
                        <TableCell>{pat.id}</TableCell>
                        <TableCell>{pat.name}</TableCell>
                        <TableCell><Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}} onClick={showPatient}>View</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default PatientList;