import React from "react";
import useDeletePatient from "../hooks/useDeletePatient";
import { Button, DialogActions, DialogContent } from "@mui/material";
import Popup from "../../../components/Popup";

const PatientDelete = ({ open, handleClose, data, setRefresh }) => {
  const { deletePatientData } = useDeletePatient();

  const handleDeleteSubmit = async () => {
    deletePatientData(data.patientId, setRefresh);
    handleClose()
  };
  return (
    <Popup
      title={"Delete Patient"}
      openPopup={open}
      handleClose={handleClose}
    >
      <DialogContent>{data.name}-{data.patientId}</DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" size="small" onClick={handleDeleteSubmit}>
          Delete
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default PatientDelete;
