import { Box, IconButton } from "@mui/material";
import React from "react";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import { useDispatch } from "react-redux";
import { reducerActions } from "../redux/slice";

function NewTodoCard(props) {
  const dispatch = useDispatch();
  function addNewCardHandler() {
    dispatch(reducerActions.addNewCard(props.tailID));
  }
  return (
    <Box
      sx={{
        display: "flex",
        placeItems: "center",
        justifyContent: "space-around",
        margin: "20px",
        minWidth: "250px",
        backgroundColor: "white",
        opacity: "0.5",
        borderRadius: "4px",
      }}
    >
      <IconButton onClick={addNewCardHandler}>
        <AddCircleTwoToneIcon
          sx={{
            fontSize: "80px",
          }}
        />
      </IconButton>
    </Box>
  );
}

export default NewTodoCard;
