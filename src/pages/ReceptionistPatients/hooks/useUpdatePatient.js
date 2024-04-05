import React, { useEffect, useState } from "react";
import { editPatient } from "../../../api/receptionistPatients";

export default function useUpdatePatient() {
  const updatePatientData = async (data, setRefresh) => {
    const res = await editPatient(data);
    if (res) {
      //   notify and relaod
      setRefresh(true);
    } else {
      //   notify the error
    }
  };

  return { updatePatientData };
}
