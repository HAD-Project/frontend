import React, { useEffect, useState } from "react";
import { editPatient } from "../../../api/receptionistPatients";
import { useCreateNotification } from "../../../components/Notification/useCreateNotification";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";
import { useDispatch } from "react-redux";
import { updateRefreshPatients } from "../../../slices/receptionistSlice";

export default function useUpdatePatient() {
  const { createNotifcation } = useCreateNotification();
  const { handleErrStatus } = useHandleStatusErrors();
  const dispatch = useDispatch();

  const updatePatientData = async (data) => {
    const reqData = {
      patientId: data.patientId,
      name: data.name,
      age: data.age,
      dob: data.dob,
      gender: data.sex,
      address: data.address,
      abhaId: data.abhaId,
      mobileNo: data.phoneNumber,
    };
    const res = await editPatient(reqData);
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
        createNotifcation("success", {
          title: "Edit Patient",
          message: "Successfully updated patient.",
        });
      }
      dispatch(updateRefreshPatients());
    } else {
      createNotifcation("error", {
        title: "Edit Patient",
        message: "Error updating patient. Please try again.",
      });
    }
  };

  return { updatePatientData };
}
