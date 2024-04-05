import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewPatient } from "../../../../slices/doctorSlice";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ADDRESS } from "../../../../utils";

const PatientList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${ADDRESS}/api/v1/doctor/getPatients`,{
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setPatientList(data);
            })
        }

        fetchData();
    }, []);

    const showPatient = (patient) => {
        dispatch(viewPatient(patient));
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
                {patientList.map((pat, idx) => (
                    <TableRow key={pat.patientId} style={{backgroundColor: idx % 2 == 0 ? "white" : "#e8e8e8"}}>
                        <TableCell>{pat.patientId}</TableCell>
                        <TableCell>{pat.name}</TableCell>
                        <TableCell><Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}} onClick={() => showPatient(pat.patientId)}>View</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default PatientList;