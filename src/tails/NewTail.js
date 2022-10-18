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
    <Box
      m={5}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      <Button variant="outlined" onClick={NewTailClickHandler} fullWidth>
        + New Tail
      </Button>
    </Box>
  );
}

export default NewTail;
