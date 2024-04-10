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
import "../../../../assets/styles/styles.css";

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
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>Sr. No</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>View Details</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {patientList.map((pat, idx) => (
                    <TableRow key={pat.patientId}>
                        <TableCell>{pat.patientId}</TableCell>
                        <TableCell>{pat.name}</TableCell>
                        <TableCell><button className="hsc-btn-contain" onClick={() => showPatient(pat.patientId)}>View</button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default PatientList;