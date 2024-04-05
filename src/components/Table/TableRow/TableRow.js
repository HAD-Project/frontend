import React, { useState } from 'react'
import styles from './TableRow.module.css'
import { Avatar, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Paper from "@mui/material/Paper";
import TableRowExtension from './TableRowExtension';
import UpdateDoctor from '../../../pages/admin/components/UpdateDoctor/UpdateDoctor';
import axios from 'axios';

const TableRow = (props) => {
    const tobedeleted = props.email;
    const [ viewDoctor, setViewDoctor ] = useState(false)
    const [ showEditModal, setShowEditModal ] = useState(false)

    const [ doctor, setDoctor ] = useState({
        "name": props.name,
        "username": props.username,
        "password": props.password,
        "email":props.email,
        "phone":props.phone,
        "gender": props.gender,
        "qualifications": props.qualifications,
        "department": "Pathology"
    })  

    const deleteDoctor = (event) => {
        event.preventDefault();
        axios.delete("http://localhost:9191/api/v1/doctor/deleteDoctor/"+tobedeleted,{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("accesstoken")
            }
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("success");
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <>
            <div className={styles.tableRow} onClick={() => setViewDoctor(!viewDoctor)}>
                <Grid container>
                    <Grid xs={2} sm={1}>
                        <Avatar/>
                    </Grid>
                    <Grid xs={9} sm={10} className={styles.tableCenter}>
                        <p className={styles.tablePara}>{props.name}</p>
                    </Grid>
                    <Grid xs={1} className={styles.tableExpand}>
                        <div className={styles.dropdown}>
                            <button className={styles.menuButton}>
                                <MenuIcon/>
                            </button>
                            <div className={styles.dropdownContent}>
                                <button onClick={() => setViewDoctor(!viewDoctor)}>View</button>
                                <button onClick={() => setShowEditModal(!showEditModal)}>Edit</button>
                                <button style={{backgroundColor: 'rgba(255, 102, 102, 1)', color: 'white' }} onClick={deleteDoctor}>Delete</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {viewDoctor && (
                <TableRowExtension 
                    name={props.name} 
                    qualifications={props.qualifications} 
                    gender={props.gender} 
                    department={props.department}
                    username={props.username}
                />
            )}
            { showEditModal && (
                <UpdateDoctor
                    name={props.name} 
                    qualifications={props.qualifications} 
                    gender={props.gender} 
                    password={props.password}
                    email={props.email}
                    phone={props.phone}
                    username={props.username}
                    showEditModal={showEditModal}
                    setShowEditModal={setShowEditModal}
                />
            )}
        </>
    )
}

export default TableRow

