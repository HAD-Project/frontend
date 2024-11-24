import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell } from '@mui/material';
import { ADDRESS } from "../../../../utils";

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        const fetchAppointments = async () => {
            await fetch(`${ADDRESS}/api/v1/doctor/getAppointments`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`,
                }
            })
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
            .catch(err => {
                alert("Error in fetching appointments");
            });
        }
        fetchAppointments();

    }, []);


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
                    <TableRow key={appt.appointmentId}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>{appt.patientName}</TableCell>
                        <TableCell>{new Date(appt.time).toLocaleString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DoctorAppointments;