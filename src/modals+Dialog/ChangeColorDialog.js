import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import { palette } from "../utilities/palette";

function ChangeColorDialog(props) {
  return (
    <div>
      <Dialog
        open={true}
        // open={props.isEditingColor}
        onClose={props.handleColorDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Choose your desired theme:"}
        </DialogTitle>
        <DialogContent sx={{ display: "flex" }}>
          {/* .map(paletteColor) */}
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              margin: "5px",
              background: `${palette[0].bgColor}`,
            }}
          >
            <Typography>Name</Typography>
          </Box>
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              margin: "5px",
              background: `${palette[1].bgColor}`,
            }}
          >
            <Typography>Name</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleColorDialogClose}>Close</Button>
          <Button onClick={props.handleColorDialogClose} autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChangeColorDialog;
