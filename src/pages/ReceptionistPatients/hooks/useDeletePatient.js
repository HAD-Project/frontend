import React from "react";
import { deletePatient } from "../../../api/receptionistPatients";
import { useDispatch } from "react-redux";
import { updateRefreshPatients } from "../../../slices/receptionistSlice";
import { useCreateNotification } from "../../../components/Notification/useCreateNotification";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";

export default function useDeletePatient() {
  const dispatch = useDispatch();
  const { createNotifcation } = useCreateNotification();
  const { handleErrStatus } = useHandleStatusErrors();
  const deletePatientData = async (patientId) => {
    const res = await deletePatient(patientId);
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
        createNotifcation("success", {
          title: "Delete Patient",
          message: "Successfully deleted patient.",
        });
      }
      dispatch(updateRefreshPatients());
    } else {
      createNotifcation("error", {
        title: "Delete Patient",
        message: "Error deleting patient. Please try again.",
      });
    }
  };

  return { deletePatientData };
}
