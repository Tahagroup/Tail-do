import { Button, ListItem, TextField } from "@mui/material";
import { FocusEvent, KeyboardEvent, useRef, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { reducerActions } from "../redux/slice";

interface NewTodoItemProps {
  tailID: string;
  cardID: string;
}

function NewTodoItem(props: NewTodoItemProps) {
  const [isAdding, setIsAdding] = useState(false);
  const InputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function newTodoClickHandler() {
    setIsAdding(true);
  }
  function addNewItemDispatcher() {
    const todoText = InputRef.current!.value;
    if (todoText !== "") {
      dispatch(
        reducerActions.addNewItem({
          tailID: props.tailID,
          cardID: props.cardID,
          todoItem: todoText,
        })
      );
    }
    setIsAdding(false);
  }
  function newTodoLoseFocusHandler(event: FocusEvent<HTMLInputElement>) {
    addNewItemDispatcher();
  }
  function onEnterPressHandler(event: KeyboardEvent<HTMLImageElement>) {
    if (event.key === "Enter") {
      addNewItemDispatcher();
    }
  }
  return (
    <ListItem key={-1} disablePadding>
      {isAdding ? (
        <TextField
          variant="filled"
          size="small"
          helperText="Press Enter or click outside to add"
          label="Enter Todo's Text:"
          inputRef={InputRef}
          autoFocus
          sx={{
            mt: "5px",
          }}
          InputProps={{
            disableUnderline: true,
          }}
          onBlur={newTodoLoseFocusHandler}
          onKeyDown={onEnterPressHandler}
        />
      ) : (
        <Button
          onClick={newTodoClickHandler}
          variant="text"
          size="small"
          sx={{
            textTransform: "none",
            mt: "5px",
            // margin: "auto",
          }}
        >
          + Add a Todo
        </Button>
      )}
    </ListItem>
  );
}

export default NewTodoItem;
