import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';

const DoctorAppointments = () => {
    const appointments = [
        {
            id: 1,
            name: "ABC",
            time: "09:00",
        },
        {
            id: 2,
            name: "ABC",
            time: "09:00",
        },
        {
            id: 3,
            name: "ABC",
            time: "09:00",
        },
        {
            id: 4,
            name: "ABC",
            time: "09:00",
        },
    ];

    return (
        <Table style={{width: 500}} component={Paper}>
            <TableHead style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>
                <TableRow>
                    <TableCell style={{color: "white"}}>Sr. No</TableCell>
                    <TableCell style={{color: "white"}}>Name</TableCell>
                    <TableCell style={{color: "white"}}>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {appointments.map((appt, idx) => (
                    <TableRow key={appt.id} style={{backgroundColor: idx % 2 == 0 ? "white" : "#e8e8e8"}}>
                        <TableCell>{appt.id}</TableCell>
                        <TableCell>{appt.name}</TableCell>
                        <TableCell>{appt.time}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DoctorAppointments;