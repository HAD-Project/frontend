import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from './listreceptionists.module.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { useState } from "react";
import AddReceptionists from '../AddReceptionists';
import { Paper, makeStyles, } from '@material-ui/core';
function ListReceptionists() {
    const [data] = useState([{name:'Tarun',img:'/receptionists.jpg'},{name:'Tarun',img:'/receptionists.jpg'},{name:'Tarun',img:'/receptionists.jpg'}])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const useStyles = makeStyles(theme => ({
        pageContent: {
            width: '100%',
            margin: theme.spacing(5),
            padding: theme.spacing(3)
        }
    }))
    const classes = useStyles();
  return (
    <Container>
        <Container
        maxWidth="sm"
        sx={{
            display: 'flex',justifyContent: 'center',alignItems: 'baseline',marginTop: '50px',minHeight: '100vh'
        }}
        >
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap={2}
            sx={{ width: '100%' }}
        >
            {data.map((d,index)=>(
            <Box key={index} className={styles.element} gridColumn="span 12" sx={{ display: 'flex', alignItems: 'center',justifyContent: 'space-between' }}>
            <img className={styles.image} src={d.img} alt="/receptionists.jpg" style={{ marginRight: '8px' }} />
            {d.name}
            <div>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <IconButton aria-label="Example">
                    <FontAwesomeIcon icon={faEllipsisV} />
                    </IconButton>
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{vertical: 'top',horizontal: 'left',}}>
                    <MenuItem  onClick={handleClose} style={{ backgroundColor: 'rgba(0, 0, 220, 0.5)', color: 'white',borderRadius:'10px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px' }}>View</MenuItem>
                    <MenuItem  onClick={handleClose} style={{ backgroundColor: 'rgba(0, 0, 220, 0.5)', color: 'white',borderRadius:'10px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px'}}>Edit</MenuItem>
                    <MenuItem  onClick={handleClose} style={{ backgroundColor: 'rgba(255, 0, 0, 0.49)', color: 'white',borderRadius:'10px',marginLeft:'5px',marginRight:'5px'}}>Delete</MenuItem>
                </Menu>
                </div>
            </Box>
            ))}
            <Paper  className={classes.pageContent}>
            <AddReceptionists/>
            </Paper>
        </Box>
        </Container>
    </Container>    
  );
}

export default ListReceptionists;
