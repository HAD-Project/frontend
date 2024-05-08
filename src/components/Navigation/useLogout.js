import React from "react";
import { logoutUser } from "../../api/auth";
import { useCreateNotification } from "../Notification/useCreateNotification";
import { useHandleStatusErrors } from "../../hooks/useHandleStatusErrors";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../slices/userSlice";

export default function useLogout() {
  const { createNotifcation } = useCreateNotification();
  const { handleErrStatus } = useHandleStatusErrors();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res) {
      if (res.err) {
        handleErrStatus(res);
        dispatch(logout());
        navigate("/login");
      } else {
        dispatch(logout());
        createNotifcation("success", {
          title: "Logout",
          message: "Successfully logged out.",
        });
        navigate("/login");
      }
    } else {
      //   notify the error
      createNotifcation("error", {
        title: "Logout",
        message: "Error Logging out. Please try again.",
      });
      dispatch(logout());
      navigate("/login");
    }
  };

  return { handleLogout };
}
