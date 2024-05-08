import React, { useEffect, useState } from "react";
import { useHandleStatusErrors } from "../../../hooks/useHandleStatusErrors";
import { receptionistOverview } from "../../../api/receptionistOverview";

const useGetData = () => {
  const [data, setData] = useState({});
  const { handleErrStatus } = useHandleStatusErrors();

  const getData = async () => {
    const res = await receptionistOverview();
    if (res) {
      if (res.err) {
        handleErrStatus(res);
      } else {
        console.log(res)
        setData(res);
      }
    } else {
      setData({});
    }
  };

  useEffect(() => {
    getData()
  }, [])
  
  return { data };
};

export default useGetData;
