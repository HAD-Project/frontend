import React, { useState } from "react";

export default function useGetPatients() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  return { data };
}
