import { handleAPIStatus } from "../misc/utils";
import axios from "./instance";

export const receptionistOverview = async () => {
  try {
    const res = await axios.get("/api/receptionist/overview", {
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
