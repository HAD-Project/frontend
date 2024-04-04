import React, { useState } from "react";
import Popup from "../Popup";
import { Button, DialogActions, DialogContent } from "@mui/material";
import FormSections from "./FormSections";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const RegisterPatient = ({ open, setOpen }) => {
  const initialState = {
    abha: "",
    name: "",
    sex: "",
    dob: null,
    age: null,
    phoneNumber: null,
    address: "",
    abha_available: true,
  };
  const initialErrState = {
    abha: "",
    name: "",
    sex: "",
    dob: "",
    age: "",
    phoneNumber: "",
    address: "",
    abha_available: true,
  };
  const [data, setData] = useState(initialState);
  const [errs, setErrs] = useState(initialErrState);
  const navigate = useNavigate();

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
    console.log(data)
    return true;
  };

  const handleClose = () => {
    setOpen(false);
    setData(initialState);
    setErrs(initialErrState);
  };

  const handleSubmit = () => {
    let valid = true;
    valid = submitValidations(data);

    if (valid) {
      // make backend submit
      handleClose();
      navigate("/receptionist/patients");
    } else {
      // show errors
    }
  };

  return (
    <Popup
      title={"Register Patient"}
      openPopup={open}
      handleClose={handleClose}
    >
      <DialogContent>
        <FormSections data={data} errs={errs} handleData={handleData} />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" size="small" onClick={handleSubmit}>
          Register
        </Button>
      </DialogActions>
    </Popup>
  );
};

export default RegisterPatient;