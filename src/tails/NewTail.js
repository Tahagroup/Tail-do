import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { reducerActions } from "../redux/slice";

function NewTail() {
  const dispatch = useDispatch();

  function NewTailClickHandler() {
    dispatch(reducerActions.addNewTail());
  }

  return (
    <Box m={5} sx={{ display: "flex" }}>
      <Button onClick={NewTailClickHandler}>+ New Tail</Button>
    </Box>
  );
}

export default NewTail;
