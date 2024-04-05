import React, { useEffect, useState } from "react";
import { getPatients } from "../../../api/receptionistPatients";

export default function useGetPatients() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const getData = async () => {
    const res = await getPatients();
    if (res) {
      setData(res);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    if (refresh) {
      getData();
      setRefresh(false);
    }
  }, [refresh]);

  return { data, setRefresh };
}
