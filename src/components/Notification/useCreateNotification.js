import React from "react";
import { NotificationManager } from "react-notifications";
export const useCreateNotification = () => {
  // NotificationManager.info(message, title, timeOut, callback, priority);
  const createNotifcation = (type, data = { title: "", message: "" }) => {
    const { title, message } = data;
    switch (type) {
      case "info":
        NotificationManager.info(message, title, 3000);
        break;
      case "success":
        NotificationManager.success(message, title, 3000);
        break;
      case "warning":
        NotificationManager.warning(message, title, 3000);
        break;
      case "error":
        NotificationManager.error(message, title, 3000);
        break;
    }
  };
  return { createNotifcation };
};
