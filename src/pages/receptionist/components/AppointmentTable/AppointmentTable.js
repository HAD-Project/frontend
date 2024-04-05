import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { deleteAppointment, listAppointments } from '../../../../services/ReceptionistService';
import { useNavigate, useParams } from 'react-router-dom';

const AppointmentTable = () => {
    const [appointments, setAppointments] = useState([{
        // "id": "1",
        // "patientID": "P101",
        // "name": "pat",
        // "doctor": "doc",
        // "date": "23-09-2000",
        // "time": "1230",
        // "type": "visited",
        // "status": "stable"
    }]);

    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        getAllAppointments();
    }, []);

    function getAllAppointments(){
        listAppointments().then((response) => {
            setAppointments(response.data);
        }).catch(error => {
            console.error(error);
        });
    }
    function addNewAppointment() {
        navigator('/add-appointment')
    }

    function editAppointment(id) {
        navigator(`/edit-appointment/${id}`)
    }

    function removeAppointment(id){
        console.log(id);

        deleteAppointment(id).then((response) => {
            getAllAppointments();
        }).catch(error => {
            console.log(error);
        })
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Edit Appointment</h2>;
        } else {
            return <h2 className='text-center'>Add Appointment</h2>
        }
    }
    return (
        <div className='container'>
            {
                pageTitle()
            }
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                <Link to={'/add-appointment'}>
                    <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)", borderRadius: '10px', alignContent: "right" }} onClick={addNewAppointment}>Add New Appointment</Button>
                </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Paper>
                    <Table style={{ width: 800 }}>
                        <TableHead style={{ backgroundColor: "rgba(0, 0, 220, 0.5)" }}>
                            <TableRow>
                                <TableCell style={{ color: "white" }}>Appointment ID</TableCell>
                                <TableCell style={{ color: "white" }}>Patient ID</TableCell>
                                <TableCell style={{ color: "white" }}>Name</TableCell>
                                <TableCell style={{ color: "white" }}>Doctor</TableCell>
                                <TableCell style={{ color: "white" }}>Date</TableCell>
                                <TableCell style={{ color: "white" }}>Time</TableCell>
                                <TableCell style={{ color: "white" }}>Type</TableCell>
                                <TableCell style={{ color: "white" }}>Status</TableCell>
                                <TableCell style={{ color: "white" }}>Edit</TableCell>
                                <TableCell style={{ color: "white" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((appointment, idx) => (
                                <TableRow key={appointment.id} style={{ backgroundColor: idx % 2 === 0 ? "white" : "#e8e8e8" }}>
                                    <TableCell>{appointment.id}</TableCell>
                                    <TableCell>{appointment.patientID}</TableCell>
                                    <TableCell>{appointment.name}</TableCell>
                                    <TableCell>{appointment.doctor}</TableCell>
                                    <TableCell>{appointment.date}</TableCell>
                                    <TableCell>{appointment.time}</TableCell>
                                    <TableCell>{appointment.type}</TableCell>
                                    <TableCell>{appointment.status}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)", borderRadius: "10px" }} onClick={() => editAppointment(appointment.id)}>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="contained" style={{ backgroundColor: "rgba(240, 0, 0, 0.5)", borderRadius: "10px" }} onClick={() => removeAppointment(appointment.id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    );
}

export default AppointmentTable;
