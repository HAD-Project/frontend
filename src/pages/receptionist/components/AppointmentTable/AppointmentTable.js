import React, { useEffect, useState } from 'react';
import { listAppointments, deleteAppointment } from '../../../../services/ReceptionistService';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const AppointmentTable = () => {
    const [appointments, setAppointments] = useState([]);
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        getAllAppointments();
    }, []);

    function getAllAppointments() {
        listAppointments()
            .then((response) => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function addNewAppointment() {
        navigator('/receptionist/add-appointment');
    }

    function editAppointment(id) {
        navigator(`/edit-appointment/${id}`);
    }

    function removeAppointment(id){
        deleteAppointment(id)
            .then(() => {
                getAllAppointments();
            })
            .catch(error => {
                console.error(error);
            });
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
                <Button variant="contained" style={{ backgroundColor: "rgba(0, 0, 220, 0.5)", borderRadius: '10px', alignContent: "right" }} onClick={addNewAppointment}>Add New Appointment</Button>
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
                                <TableCell style={{ color: "white" }}>Remarks</TableCell>
                                <TableCell style={{ color: "white" }}>Edit</TableCell>
                                <TableCell style={{ color: "white" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map((appointment, idx) => (
                                <TableRow key={appointment.id} style={{ backgroundColor: idx % 2 === 0 ? "white" : "#e8e8e8" }}>
                                    <TableCell>{appointment.appointmentId}</TableCell>
                                    <TableCell>{appointment.patientID}</TableCell>
                                    <TableCell>{appointment.patientName}</TableCell>
                                    <TableCell>{appointment.doctorName}</TableCell>
                                    <TableCell>{appointment.date}</TableCell>
                                    <TableCell>{appointment.time}</TableCell>
                                    <TableCell>{appointment.type}</TableCell>
                                    <TableCell>{appointment.status}</TableCell>
                                    <TableCell>{appointment.remarks}</TableCell>
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
