import { Grid } from '@mui/material'
import React from 'react'
import styles from './TableRow.module.css'

const TableRowExtension = (props) => {
  return (
    <div className={styles.extensionRow}>
        <Grid container>
            <Grid xs={12} md={6}>
                <p><b>Name:</b> {props.name}</p>
                <p><b>Username:</b> {props.username}</p>
                <p><b>Gender:</b> {props.gender}</p>
            </Grid>
            <Grid xs={12} md={6}>
                <p><b>Department:</b> {props.department}</p>
                <p><b>Qualifications:</b> {props.qualifications}</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default TableRowExtension