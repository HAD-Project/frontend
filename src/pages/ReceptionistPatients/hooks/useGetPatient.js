import React, { useEffect, useState } from "react";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";
import { viewPatient } from "../../../api/receptionistPatients";

export default function useGetPatient() {
  const [patientData, setPatientData] = useState({});
  const { handleErrStatus } = useHandleStatusErrors();

  const getPatientData = async (patientId) => {
    const res = await viewPatient(patientId);
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
        setPatientData(res);
      }
    } else {
      setPatientData({});
    }
  };

  return { patientData, getPatientData };
}
