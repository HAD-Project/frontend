import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';
import { ADDRESS } from "../../../../utils";

const RecordsTable = () => {
    const [records, setRecords] = useState([]);
    const patientId = useSelector(state => state.doctor.patientId);

    useEffect(() => {
        const fetchRecords = async () => {
            await fetch(`${ADDRESS}/api/doctor/getRecords?patientId=${patientId}`, {
                method: "GET",
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.log(e));
        }

        fetchRecords();
    })

    return (
        <Table style={{width: 700}} component={Paper}>
            <TableHead style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>
                <TableRow>
                    <TableCell colSpan={5} style={{color: "white", textAlign: "center", fontWeight: "bolder"}}>Records</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{color: "white"}}>Sr. No</TableCell>
                    <TableCell style={{color: "white"}}>Name</TableCell>
                    <TableCell style={{color: "white"}}>Date</TableCell>
                    <TableCell style={{color: "white"}}>Record Type</TableCell>
                    <TableCell style={{color: "white"}}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {records.map((record, idx) => (
                    <TableRow key={record.id} style={{backgroundColor: idx % 2 == 0 ? "white" : "#e8e8e8"}}>
                        <TableCell>{record.id}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.type}</TableCell>
                        <TableCell><Button variant="contained" style={{backgroundColor: "rgba(0, 0, 220, 0.5)"}}>View</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default RecordsTable;