import { IconButton, ListItem, ListItemText } from "@mui/material";
import WidgetsTwoToneIcon from "@mui/icons-material/WidgetsTwoTone";
import React, { useState } from "react";

function CardToDoItem(props) {
  const [isSelected, setisSelected] = useState(false);
  function todoOptionsClickHandler() {
    setisSelected(true);
  }
  // const lined = props.todoData.done && { textDecoration: "line-through" };
  // if (props.todoData.done) {
  //   return { textDecoration: "line-through" };
  // }
  // if (isSelected) {
  //   return { backgroundColor: "#bbb", padding: "5px" };
  // }
  // const selected = isSelected && { backgroundColor: "#bbb", padding: "5px" };
  return (
    <ListItem
      key={0}
      secondaryAction={
        <IconButton onClick={todoOptionsClickHandler}>
          <WidgetsTwoToneIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemText
        primary={props.todoData.todoTitle}
        sx={
          props.todoData.done ? { textDecoration: "line-through" } : {}
          // isSelected ? { backgroundColor: "#bbb", padding: "5px" } : {})
        }
      />
      <ListItemText
        secondary={`${props.todoData.done}`}
        // sx={selected}
      />
    </ListItem>
  );
}

export default CardToDoItem;
