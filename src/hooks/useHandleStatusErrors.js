import React from 'react'
import { useCreateNotification } from '../components/Notification/useCreateNotification';

export const useHandleStatusErrors = () => {
  const { createNotifcation } = useCreateNotification();

  const handleErrStatus = (res) => {
    if (res.err === 403) {
      createNotifcation("warning", {
        title: "Access Denied",
        message:
          "You doesn't have access. Please login with as appropriate user.",
      });
    } else if (res.err === 401) {
      createNotifcation("error", {
        title: "Invalid Credentials",
        message: "Please give correct credentials.",
      });
    } else if (res.err === 500 || res.err === 503) {
      createNotifcation("error", {
        title: "Server Issue",
        message: "Please try later.",
      });
    }
  };
  return { handleErrStatus };
}
