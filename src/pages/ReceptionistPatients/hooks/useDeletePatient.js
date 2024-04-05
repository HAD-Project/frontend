import React from "react";
import { deletePatient } from "../../../api/receptionistPatients";

export default function useDeletePatient() {
  const deletePatientData = async (patientId, setRefresh) => {
    const res = await deletePatient(patientId);
    if (res) {
      //   notify and relaod
      setRefresh(true);
    } else {
      //   notify the error
    }
  };

  return { deletePatientData };
}
