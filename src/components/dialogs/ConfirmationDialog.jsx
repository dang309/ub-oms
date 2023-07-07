// material
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useEventBus } from "src/hooks";

const ConfirmationDialog = () => {
  const { $on } = useEventBus();

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    title: "",
    content: "",
    cancelText: "",
    actionText: "",
    actionHandler: null,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    $on("dialog/confirmation/open", (payload) => {
      handleOpen();
      setInfo(payload);
    });

    $on("dialog/confirmation/close", () => {
      handleClose();
    });
  }, [$on]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{info.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{info.content} </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          {info.cancelText || "Cancel"}
        </Button>
        <Button onClick={info.actionHandler} variant="contained">
          {info.actionText || "Ok"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
