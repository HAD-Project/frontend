import React from "react";
import {
  Dialog,
  DialogTitle,
//   DialogContent,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(1),
    position: "absolute",
    // top: theme.spacing(3),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup({ title, children, openPopup, handleClose }) {
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1,fontWeight:"bold" }}>{title}</div>
          <div>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
      {/* <DialogContent>{children}</DialogContent> */}
      {/* use content and actions section separately in the component */}
      {children}
    </Dialog>
  );
}
