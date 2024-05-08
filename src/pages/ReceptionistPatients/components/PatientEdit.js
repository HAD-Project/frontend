import React, { useEffect, useState } from "react";
import { Button, DialogActions, DialogContent } from "@mui/material";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PatientEditForm from "./PatientEditForm";
import useGetPatient from "../hooks/useGetPatient";
import Popup from "../../../components/Popup";
import { useCreateNotification } from "../../../components/Notification/useCreateNotification";
import { updateRefreshPatients } from "../../../slices/receptionistSlice";
import useUpdatePatient from "../hooks/useUpdatePatient";

const PatientEdit = ({ open, handleClose, patientId }) => {
  const initialState = {
    abha: "",
    name: "",
    sex: "",
    dob: null,
    age: null,
    phoneNumber: null,
    address: "",
  };
  const initialErrState = {
    abha: "",
    name: "",
    sex: "",
    dob: "",
    age: "",
    phoneNumber: "",
    address: "",
  };
  const [data, setData] = useState(initialState);
  const [errs, setErrs] = useState(initialErrState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createNotifcation } = useCreateNotification();
  const { patientData, getPatientData } = useGetPatient();
  const location = useLocation();
  const { updatePatientData } = useUpdatePatient();

  const handleData = (name, value) => {
    console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: value };
    });
    validation(name, value);
    if (name === "dob" && value) {
      handleData("age", dayjs().diff(value, "year"));
    }
  };

  const validation = (name, value) => {
    switch (name) {
      case "abha":
        setErrs((prev) => {
          return {
            ...prev,
            [name]: value.length === 0 ? "Please Enter ABHA Address" : "",
          };
        });

        break;

      default:
        setErrs((prev) => {
          return {
            ...prev,
            [name]:
              !value || (value && value.length === 0)
                ? `Please Enter Patient ${
                    name.charAt(0).toUpperCase() + name.slice(1)
                  }`
                : "",
          };
        });
        break;
    }
  };

  const submitValidations = (data) => {
    console.log(data);
    return true;
  };

  const handleEditClose = () => {
    handleClose();
    setData(initialState);
    setErrs(initialErrState);
  };

  const handleSubmit = () => {
    let valid = true;
    valid = submitValidations(data);

    if (valid) {
      // make backend submit
      const res = updatePatientData(data);
      if (res) {
        handleEditClose();

        if (location.pathname === "/receptionist/patients") {
          dispatch(updateRefreshPatients());
        } else {
          navigate("/receptionist/patients");
        }
      }
    } else {
      // show errors
      createNotifcation("error", {
        title: "Error",
        message: "Please clear errors to register the patient.",
      });
    }
  };

  const getViewData = () => {
    getPatientData(patientId);
    setData(patientData);
  };

  useEffect(() => {
    if (open) {
      getViewData();
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      console.log(patientData);
      setData((prev) => {
        return {
          ...prev,
          patientId: patientData.patientId,
          name: patientData.name,
          abha: patientData.abhaId,
          dob: dayjs(new Date(patientData.dob)),
          age: dayjs().diff(new Date(patientData.dob), "year"),
          sex: patientData.gender,
          phoneNumber: patientData.mobileNo,
        };
      });
    }
  }, [patientData]);

  return (
    <Popup
      title={"Edit Patient"}
      openPopup={open}
      handleClose={handleEditClose}
    >
      <DialogContent>
        <PatientEditForm data={data} errs={errs} handleData={handleData} />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={handleEditClose}>
          Cancel
        </Button>
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default PatientEdit;
