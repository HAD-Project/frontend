import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TableRow from '../../../../components/Table/TableRow/TableRow'
import { Container, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import styles from './DoctorList.module.css'
import AddDoctor from '../AddDoctor/AddDoctor';

const DoctorList = () => {

    const [ showAddModal, setShowAddModal ] = useState(false)
    
    const [ doctors, setDoctors ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9191/api/admin/getDoctors")
        .then(response => {
            setDoctors(response.data)
        })
        .catch(error => {
            console.error("Error fetching Doctors: ", error);
        })
    }, [])
  
    return (
        <Container>
            {doctors && doctors.map(doctor => { return (
                <TableRow 
                    name={doctor.name}
                    username={doctor.username}
                    gender={doctor.gender}
                    qualifications={doctor.qualifications}
                    department={doctor.department.name}
                />
            )})}
            <div>
                <Grid container>
                    <Grid xs={12}>
                        <button className={styles.addButton} onClick={() => setShowAddModal(!showAddModal)}><AddIcon/></button>
                    </Grid>
                </Grid>
            </div>
            { showAddModal && (
                <AddDoctor doctors={doctors} setDoctors={setDoctors} setShowAddModal={setShowAddModal} showAddModal={showAddModal}/>
            )}
        </Container>
    )
}

export default DoctorList