import React from "react";
import { registerPatient } from "../../api/receptionistPatients";
import { useCreateNotification } from "../Notification/useCreateNotification";
import { useHandleStatusErrors } from "../../hooks/useHandleStatusErrors";

export default function useRegisterPatient() {
  const { createNotifcation } = useCreateNotification();
  const { handleErrStatus } = useHandleStatusErrors();

  const registerPatientData = async (data) => {
    const res = await registerPatient(data);
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
        createNotifcation("success", {
          title: "Register Patient",
          message: "Successfully registered patient.",
        });
      }
      //   notify and relaod
      return true;
    } else {
      //   notify the error
      createNotifcation("error", {
        title: "Register Patient",
        message: "Error creating patient. Please try again.",
      });
      return false;
    }
  };

  return { registerPatientData };
}
