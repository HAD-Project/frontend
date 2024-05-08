import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TableCell } from '@mui/material';
import "../../../../assets/styles/styles.css";

const RecordsTable = ({ records, setRecord, setShowRecord, fetchRecords, setRe }) => {
    

    useEffect(() => {
        fetchRecords();
    }, []);

    const showRecord = (record) => {
        setRecord(record);
        setShowRecord(true);
    }

    return (
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={5} style={{textAlign: "center"}}>Records</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Sr. No</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Record Type</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {records.map((record, idx) => (
                    <TableRow key={record.recordId}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.recordType}</TableCell>
                        <TableCell><button className="hsc-btn-contain" onClick={() => showRecord(record)}>View</button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default RecordsTable;