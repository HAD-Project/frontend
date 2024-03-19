import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';

const AppointmentTable = (appointment) => {
    
    return (
        <div className='container'>
            <Link to={'/add'}>
            <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)" }}>Add+</Button>
            </Link>
            <Table style={{ width: 800 }} component={Paper}>
            <TableHead style={{ backgroundColor: "rgba(0, 0, 220, 0.5)" }}>
                <TableRow>
                    <TableCell style={{ color: "white" }}>Patient ID</TableCell>
                    <TableCell style={{ color: "white" }}>Name</TableCell>
                    <TableCell style={{ color: "white" }}>Doctor</TableCell>
                    <TableCell style={{ color: "white" }}>Time</TableCell>
                    <TableCell style={{ color: "white" }}>Type</TableCell>
                    <TableCell style={{ color: "white" }}>Status</TableCell>
                    <TableCell style={{ color: "white" }}>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {appointment.map((appointment, idx) => (
                    <TableRow key={appointment.id} style={{ backgroundColor: idx % 2 === 0 ? "white" : "#e8e8e8" }}>
                        <TableCell>{appointment.patientID}</TableCell>
                        <TableCell>{appointment.name}</TableCell>
                        <TableCell>{appointment.doctor}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>{appointment.type}</TableCell>
                        <TableCell>{appointment.status}</TableCell>
                        <TableCell>
                        <Link to={`/edit/${appointment.appointmentID}`}>
                            <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)" }}>View</Button>
                        </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
    );
}

export default AppointmentTable;
