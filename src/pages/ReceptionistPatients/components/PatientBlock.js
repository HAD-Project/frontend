import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Chip,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import PatientDelete from "./PatientDelete";

const PatientBlock = ({ data , setRefresh }) => {
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const handleMenu = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };

  const handleDelete = () => setDeleteOpen(true);
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    handleClose();
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Avatar sx={{ width: 30, height: 30 }} variant="rounded" />
            <span>{data.name}</span>
          </Stack>
        </TableCell>
        <TableCell align="left">{data.abhaId}</TableCell>
        <TableCell align="left">{data.gender}</TableCell>
        <TableCell align="left">{data.age}</TableCell>
        <TableCell align="left">{data.mobileNo}</TableCell>
        <TableCell align="left">{data.address}</TableCell>
        <TableCell align="left">{data.bloodGrp}</TableCell>
        <TableCell align="left">
          <Chip
            label={data.status ? data.status : "Basic"}
            variant="outlined"
          />
        </TableCell>
        <TableCell align="center">
          <IconButton size="small" onClick={handleMenu}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={menu} open={Boolean(menu)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
          <PatientDelete
            open={deleteOpen}
            handleClose={handleDeleteClose}
            setRefresh={setRefresh}
            data={data}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * 1 * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default PatientBlock;
