import React from "react";
import { registerPatient } from "../../api/receptionistPatients";

export default function useRegisterPatient() {
  const registerPatientData = async (data) => {
    const res = await registerPatient(data);
    if (res && res.status === 200) {
      //   notify and relaod
      return true
    } else {
      //   notify the error
      return false
    }
  };

  return { registerPatientData };
}
