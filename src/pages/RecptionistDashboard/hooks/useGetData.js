import React, { useState } from "react";

const useGetData = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    setData("");
  };
  return [data];
};

export default useGetData;
