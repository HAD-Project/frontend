import { handleAPIStatus } from "../misc/utils";
import axios from "./instance";

export const loginUser = async (data) => {
  try {
    // console.log(data);
    const res = await axios.post("/api/v1/auth/authenticate", data);
    return res.data;
  } catch (error) {
    return handleAPIStatus(error);
  }
};

export const logoutUser = async () => {
    try {
      const res = await axios.post("/api/v1/auth/logout",null,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      });
      return res.data;
    } catch (error) {
      return handleAPIStatus(error);
    }
  };
