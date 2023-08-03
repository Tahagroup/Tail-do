import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

interface DeleteDialogProps {
  isOpen: boolean;
  handleDialogClose: () => void;
  deleteConfirmed: () => void;
}
function DeleteDialog(props: DeleteDialogProps) {
  return (
    <div>
      <Dialog open={props.isOpen}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={props.handleDialogClose}
          >
            No
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={props.deleteConfirmed}
            autoFocus
          >
            Yes, delete it.
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;
