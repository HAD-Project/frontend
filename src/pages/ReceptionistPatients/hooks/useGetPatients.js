import React, { useEffect, useState } from "react";
import { getPatients } from "../../../api/receptionistPatients";
import { useDispatch, useSelector } from "react-redux";
import { updateRefreshPatients } from "../../../slices/receptionistSlice";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";

export default function useGetPatients() {
  const [data, setData] = useState([]);
  const patientRefresh = useSelector(
    (state) => state.receptionist.patientRefresh
  );
  const dispatch = useDispatch();
  const { handleErrStatus } = useHandleStatusErrors();

  const getData = async () => {
    const res = await getPatients();
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
      setData(res);
      }
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    if (patientRefresh) {
      getData();
      dispatch(updateRefreshPatients());
    }
  }, [patientRefresh]);

  useEffect(() => {
    getData();
  }, []);

  return { data };
}
