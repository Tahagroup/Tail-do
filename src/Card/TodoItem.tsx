import { Box, IconButton, ListItem, ListItemText } from "@mui/material";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import React, { useState } from "react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { reducerActions } from "../redux/slice";
import { useAppDispatch } from "../hooks/useAppDispatch";

interface CardToDoItemProps {
  tailID: string;
  cardID: string;
  index: number;
  todoData: TodoItem;
}
function CardToDoItem(props: CardToDoItemProps) {
  const [showOptions, setshowOptions] = useState(false);
  const dispatch = useAppDispatch();
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
      // disablePadding
      divider
    >
      <ListItemText
        primary={props.todoData.todoTitle}
        primaryTypographyProps={{
          overflow: "hidden",
          textOverflow: "clip",
          // mr: "20px",
          width: "90%",
        }}
        secondary={" "} //add between-item space
        sx={
          props.todoData.done
            ? { textDecoration: "line-through" }
            : { overflow: "hidden", textOverflow: "clip" }
        }
      />
    </ListItem>
  );
}

export default CardToDoItem;
