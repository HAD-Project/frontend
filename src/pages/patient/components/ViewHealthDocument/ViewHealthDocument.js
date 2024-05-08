import React from "react";
import styles from "./viewhealthdocument.module.css";
import { TableContainer, Table, TableHead, TableBody, Paper, TableCell, TableRow } from "@mui/material";
import "../../../../assets/styles/styles.css";
import { ADDRESS } from "../../../../utils";

const ViewHealthDocument = ({ healthDocumentList }) => {

    const viewFile = async (id, name) => {
        await fetch(`${ADDRESS}/api/v1/doctor/download?fileId=${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
        })
        .then(res => res.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return (
        <TableContainer component={Paper} className={styles.tableContainer}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Sr. No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {healthDocumentList.map((p, idx) => (
                    <TableRow key={p.id}>
                        <TableCell><p className={styles.text}>{idx + 1}</p></TableCell>
                        <TableCell><p className={styles.text}>{p.fileName}</p></TableCell>
                        <TableCell><button className="hsc-btn-contain" onClick={() => viewFile(p.id, p.fileName)}>View</button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default ViewHealthDocument;