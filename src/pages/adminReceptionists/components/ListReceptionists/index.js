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
import Popup from '../controls/Popup';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ViewReceptionists from '../ViewReceptionists';

function ListReceptionists() {
    const [data] = useState([{name:'Young Smith',
    img:'/receptionists.jpg',
    gender: 'male',
    username: 'youngsmith',
    email: 'youngsmith@gmail.com',
    phone: '1234567890',
    qualifications: 'B.E'},
    {name:'Vivek',
    img:'/receptionists.jpg',
    gender: 'male',
    username: 'vivek',
    email: 'vivek@gmail.com',
    phone: '1234567890',
    qualifications: 'B.E'},
    {name:'Pavani',
    img:'/receptionists.jpg',
    gender: 'female',
    username: 'pavani',
    email: 'pavani@gmail.com',
    phone: '1234567890',
    qualifications: 'B.E'}])
    const [anchorEls, setAnchorEls] = React.useState(new Array(data.length).fill(null));

    const [selectedUserData, setSelectedUserData] = useState(null);
    const open = Boolean(anchorEls);
    const handleClick = (event, index) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = event.currentTarget;
        setAnchorEls(newAnchorEls);
      };
      
      const handleClose = (index) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = null;
        setAnchorEls(newAnchorEls);
      };
    const handleViewClick = (userData) => {
        setSelectedUserData(userData);
        setOpenViewPopup(true);
    };
    const [openPopup, setOpenPopup] = useState(false)
    const [openViewPopup, setOpenViewPopup] = useState(false)
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
            {data.map((d, index) => (
                <Box key={index} className={styles.element} gridColumn="span 12" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img className={styles.image} src={d.img} alt="/receptionists.jpg" style={{ marginRight: '8px' }} />
                    {d.name}
                    <div>
                    <Button
                        id={`demo-positioned-button-${index}`}
                        aria-controls={open ? `demo-positioned-menu-${index}` : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event) => handleClick(event, index)}
                    >
                        <IconButton aria-label="Example">
                        <FontAwesomeIcon icon={faEllipsisV} />
                        </IconButton>
                    </Button>
                    <Menu
                        id={`demo-positioned-menu-${index}`}
                        aria-labelledby={`demo-positioned-button-${index}`}
                        anchorEl={anchorEls[index]}
                        open={Boolean(anchorEls[index])}
                        onClose={() => handleClose(index)}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        <MenuItem onClick={() => { handleViewClick(d); setOpenViewPopup(true); handleClose(index); }} style={{ backgroundColor: 'rgba(0, 0, 220, 0.5)', color: 'white', borderRadius: '10px', marginBottom: '10px', marginLeft: '5px', marginRight: '5px' }}>View</MenuItem>
                        <MenuItem onClick={() => handleClose(index)} style={{ backgroundColor: 'rgba(0, 0, 220, 0.5)', color: 'white', borderRadius: '10px', marginBottom: '10px', marginLeft: '5px', marginRight: '5px' }}>Edit</MenuItem>
                        <MenuItem onClick={() => handleClose(index)} style={{ backgroundColor: 'rgba(255, 0, 0, 0.49)', color: 'white', borderRadius: '10px', marginLeft: '5px', marginRight: '5px' }}>Delete</MenuItem>
                    </Menu>
                    </div>
                </Box>
                ))}
      
        <Box  gridColumn="span 12" sx={{ display: 'flex', alignItems: 'center',justifyContent: 'flex-end' }}>
            <AddCircleRoundedIcon 
                variant="outlined" 
                onClick={() => setOpenPopup(true)}
                style={{ color: '#9C9CFB',  fontSize: '40px' }} />
        </Box>
        </Box>
        </Container>
        <Popup title="Add Receptionists" openPopup={openPopup} setOpenPopup={setOpenPopup}>
            <AddReceptionists/>
        </Popup>
        {selectedUserData && (
                <Popup title="Receptionists" openPopup={openViewPopup} setOpenPopup={setOpenViewPopup}>
                    <ViewReceptionists userData={selectedUserData} />
                </Popup>
            )}
    </Container>    
  );
}

export default ListReceptionists;
