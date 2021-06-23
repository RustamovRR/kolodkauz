import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import { useModalStyles } from "./modalStyles";
import { Close } from "@material-ui/icons";

export default function Modal({ title, children, open, handleClose }) {
  const classes = useModalStyles();

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        style={{
          position: "absolute",
          maxWidth: 1440,
          width: "100%",
        }}
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
