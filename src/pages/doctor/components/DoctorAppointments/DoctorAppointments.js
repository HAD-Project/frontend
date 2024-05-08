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
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>Sr. No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {appointments.map((appt, idx) => (
                    <TableRow key={appt.id}>
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