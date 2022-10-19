import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import PaletteTwoToneIcon from "@mui/icons-material/PaletteTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { useDispatch } from "react-redux";
import { reducerActions } from "../redux/slice";
import { GithubPicker } from "react-color";
import { colorToPalette, palette } from "../utilities/palette";
import DeleteDialog from "../dialoges/DeleteDialog";

function TailOptions(props) {
  const [isEditingName, setisEditingName] = useState(false);
  const [isEditingColor, setIsEditingColor] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef("");
  const dispatch = useDispatch();
  ////////////////////////////////////////////////////////////
  function deleteClickHandler() {
    setIsDialogOpen(true);
  }
  function deleteConfirmed() {
    dispatch(reducerActions.removeTale(props.tailInfo.tailID));
  }
  function handleDialogClose() {
    setIsDialogOpen(false);
  }
  ///
  function editClickHandler(id) {
    if (isEditingName) {
      dispatch(
        reducerActions.editTale({ id: id, newName: inputRef.current.value })
      );
    }
    setisEditingName((prev) => {
      return !prev;
    });
  }
  function paletteClickHandler(id, newTheme) {
    setIsEditingColor(true);
  }
  function paletteChangeHandler(color, event) {
    // change theme
    const palette = colorToPalette(color.hex);
    dispatch(
      reducerActions.changeTaleTheme({
        tailID: props.tailInfo.tailID,
        newTheme: palette,
      })
    );

    // setIsEditingColor(false);
  }
  // return ////////////////////////////////////////////////////////////////
  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: props.theme.tailOptionColor,
        color: "#acddde",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {/* Available Options: */}
      <IconButton onClick={() => deleteClickHandler()}>
        <DeleteTwoToneIcon />
      </IconButton>
      <DeleteDialog
        isOpen={isDialogOpen}
        handleDialogClose={handleDialogClose}
        deleteConfirmed={deleteConfirmed}
      />
      <IconButton onClick={paletteClickHandler}>
        {!isEditingColor && <PaletteTwoToneIcon />}
      </IconButton>
      {isEditingColor && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // gap: "4px",
            alignItems: "center",
            mb: "25px",
          }}
        >
          <GithubPicker
            colors={[...palette.map((colorObj) => colorObj.bgColor)]}
            triangle={"hide"}
            onChange={paletteChangeHandler}
            // style={{
            //   justifyContent: "space-around !important",
            //   backgroundColor: "red !important",
            //   height: "100px !important",
            // }}
          />
          <IconButton onClick={() => setIsEditingColor(false)}>
            <CheckCircleTwoToneIcon />
          </IconButton>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: isEditingName ? "row-reverse" : "column",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => editClickHandler(props.tailInfo.tailID)}>
          {isEditingName ? <CheckCircleTwoToneIcon /> : <EditTwoToneIcon />}
        </IconButton>
        {!isEditingName && (
          <Typography
            sx={{
              writingMode: "vertical-rl",
              color: "gray",
            }}
          >
            {props.tailInfo.tailName}
          </Typography>
        )}
        {isEditingName && (
          <TextField
            defaultValue={props.tailInfo.tailName}
            label={"Tail's New Name: "}
            inputRef={inputRef}
            type={"text"}
          />
        )}
      </Box>
    </Box>
  );
}

export default TailOptions;

// function TailOptionsIcon(props) {
//   return (
//     <IconButton onClick={props.onIconClick}>
//       <props.icon />
//     </IconButton>
//   );
// }
