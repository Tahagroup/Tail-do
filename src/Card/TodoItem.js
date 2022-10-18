import { Box, IconButton, ListItem, ListItemText } from "@mui/material";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import React, { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useDispatch } from "react-redux";
import { reducerActions } from "../redux/slice";
function CardToDoItem(props) {
  const [showOptions, setshowOptions] = useState(false);
  const dispatch = useDispatch();
  function todoOptionsClickHandler() {
    setshowOptions(true);
  }
  function todoDeleteHandler() {
    dispatch(
      reducerActions.removeTodo({
        tailID: props.tailID,
        cardID: props.cardID,
        index: props.index,
      })
    );
    setshowOptions(true);
  }
  function todoDoneHandler() {
    dispatch(
      reducerActions.toggleDone({
        tailID: props.tailID,
        cardID: props.cardID,
        index: props.index,
      })
    );
    setshowOptions(false);
  }
  const showOptionsComps = (
    <Box>
      <IconButton onClick={todoDeleteHandler}>
        <DeleteForeverTwoToneIcon />
      </IconButton>
      <IconButton onClick={todoDoneHandler}>
        {props.todoData.done ? (
          <CheckBoxTwoToneIcon />
        ) : (
          <CheckBoxOutlineBlankIcon />
        )}
      </IconButton>
      <IconButton
        onClick={() => {
          setshowOptions(false);
        }}
      >
        <CloseTwoToneIcon />
      </IconButton>
    </Box>
  );
  const noShowOptionsComps = (
    <Box>
      <IconButton onClick={todoOptionsClickHandler}>
        <WidgetsTwoToneIcon />
      </IconButton>
    </Box>
  );
  return (
    <ListItem
      key={0}
      secondaryAction={showOptions ? showOptionsComps : noShowOptionsComps}
      disablePadding
    >
      <ListItemText
        primary={props.todoData.todoTitle}
        sx={props.todoData.done ? { textDecoration: "line-through" } : {}}
      />
      {/* <ListItemText
        secondary={`${props.todoData.done}`}
        // sx={selected}
      /> */}
    </ListItem>
  );
}

export default CardToDoItem;
