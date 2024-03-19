import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';

const AppointmentTable = () => {
    const appointment = [
        {
            "id":"1",
          "patientID": "P001",
          "name": "John Doe",
          "doctor": "Dr. Smith",
          "date":"2024-03-19",
          "time": "T10:00:00",
          "type": "Consultation",
          "status": "Pending"
        },
        {
            "id":"2",
          "patientID": "P002",
          "name": "Jane Smith",
          "doctor": "Dr. Johnson",
          "date":"2024-03-20",
          "time": "T14:30:00",
          "type": "Follow-up",
          "status": "Confirmed"
        },
        {
            "id":"3",
          "patientID": "P003",
          "name": "Alice Brown",
          "doctor": "Dr. Patel",
          "date":"2024-03-21",
          "time": "T09:15:00",
          "type": "Procedure",
          "status": "Cancelled"
        }
      ]
      
    return (
        <div className='container'>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'80px' }}>
            <Link to={'/add'}>
                <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)", borderRadius: '10px' ,alignContent:"right"}}>Add</Button>
            </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop:'15px' }}>
            <Table style={{ width: 800 }} component={Paper}>
            <TableHead style={{ backgroundColor: "rgba(0, 0, 220, 0.5)" }}>
                <TableRow>
                    <TableCell style={{ color: "white" }}>Patient ID</TableCell>
                    <TableCell style={{ color: "white" }}>Name</TableCell>
                    <TableCell style={{ color: "white" }}>Doctor</TableCell>
                    <TableCell style={{ color: "white" }}>Date</TableCell>
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
                        <TableCell>{appointment.date}</TableCell>
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
        </div>
    );
}

export default AppointmentTable;
