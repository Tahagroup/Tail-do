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

function TailOptions(props) {
  const [isEditingName, setisEditingName] = useState(false);
  const [isEditingColor, setIsEditingColor] = useState(false);
  const inputRef = useRef("");

  const dispatch = useDispatch();

  function deleteClickHandler(id) {
    dispatch(reducerActions.removeTale(id));
  }
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
  const paletteColors = palette.map((colorObj) => colorObj.bgColor);
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
      <IconButton onClick={() => deleteClickHandler(props.tailInfo.tailID)}>
        <DeleteTwoToneIcon />
      </IconButton>
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
            position: "auto",
            color: "green",
          }}
        >
          <GithubPicker
            colors={[...paletteColors]}
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
      <IconButton onClick={() => editClickHandler(props.tailInfo.tailID)}>
        {isEditingName ? <CheckCircleTwoToneIcon /> : <EditTwoToneIcon />}
      </IconButton>
      {/* <ChangeColorDialog
        isEditingColor={isEditingColor}
        handleColorDialogClose={handleColorDialogClose}
      /> */}
      {/* Tail name: */}
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
