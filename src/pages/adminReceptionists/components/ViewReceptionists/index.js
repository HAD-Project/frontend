import { Grid,  makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
    viewContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
}))
const ViewReceptionists = (props) => {
    const{userData}=props;
    const classes = useStyles();
  return (
      <div>
        <Grid container spacing={2} >
            <Grid className={classes.viewContent} item xs={12}>
                Name:{userData.name}
            </Grid>
            <Grid className={classes.viewContent} item xs={12}>
                Username:{userData.username}
            </Grid>
            <Grid className={classes.viewContent} item xs={12}>
                Gender:{userData.gender}
            </Grid>
            <Grid className={classes.viewContent} item xs={12}>
                Email:{userData.email}
            </Grid>
            <Grid className={classes.viewContent} item xs={12}>
                Phone:{userData.phone}
            </Grid>
            <Grid className={classes.viewContent} item xs={12}>
                Qualification:{userData.qualifications}
            </Grid>
        </Grid>
    </div>
  )
}

export default ViewReceptionists