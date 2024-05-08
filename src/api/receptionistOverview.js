import axios from "./instance";

export const receptionistOverview = async (receptionistId) => {
  try {
    const res = await axios.get("/api/receptionist/dashboard", {
      params: { receptionistId },
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
