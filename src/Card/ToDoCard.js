import React, { useRef, useState } from "react";
import {
  Card,
  CardContent,
  List,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";
import { reducerActions } from "../redux/slice";
import { useDispatch } from "react-redux";
import DeleteDialog from "../dialoges/DeleteDialog";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

function ToDoCard(props) {
  const InputRef = useRef();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setisEditing] = useState(false);

  function editClickHandler() {
    setisEditing(true);
  }
  function handleDialogClose() {
    setIsDialogOpen(false);
  }
  function deleteClickHandler() {
    setIsDialogOpen(true);
  }

  function confirmEditClickHandler() {
    changeNameDispatcher();
  }
  function changeNameDispatcher() {
    const newName = InputRef.current.value;
    if (newName !== "" && newName !== props.card.cardName) {
      dispatch(
        reducerActions.changeCardName({
          tailID: props.tailID,
          cardID: props.cardID,
          newName: newName,
        })
      );
    }
    setisEditing(false);
  }
  function cardNameLoseFocusHandler(event) {
    setisEditing(false);
  }
  function EnterPressHandler(event) {
    if (event.key === "Enter") {
      changeNameDispatcher();
    }
  }
  function deleteConfirmed() {
    dispatch(
      reducerActions.deleteCard({
        tailID: props.tailID,
        cardID: props.cardID,
      })
    );
    setIsDialogOpen(false);
  }
  // ////////////////////////
  return (
    <Card
      elevation={5}
      sx={{
        m: "20px",
        // minWidth: "250px",
      }}
    >
      <CardContent
        sx={{
          background: props.theme.cardHeader,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          aria-readonly
          variant="standard"
          defaultValue={props.card.cardName}
          onBlur={cardNameLoseFocusHandler}
          onKeyDown={EnterPressHandler}
          inputRef={InputRef}
          InputProps={{
            disableUnderline: isEditing ? false : true,
            readOnly: isEditing ? false : true,
          }}
          // #TODO:
          // autoFocus
        ></TextField>
        <Box>
          {!isEditing && (
            <IconButton onClick={editClickHandler}>
              <EditTwoToneIcon />
            </IconButton>
          )}
          {isEditing && (
            <IconButton onClick={confirmEditClickHandler}>
              <CheckCircleTwoToneIcon />
            </IconButton>
          )}

          <IconButton onClick={deleteClickHandler}>
            <DeleteTwoToneIcon />
          </IconButton>
          <DeleteDialog
            isOpen={isDialogOpen}
            handleDialogClose={handleDialogClose}
            deleteConfirmed={deleteConfirmed}
          />
        </Box>
      </CardContent>
      <CardContent>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {props.card.TodosData.map((todo, index) => {
            return (
              <TodoItem
                todoData={todo}
                tailID={props.tailID}
                cardID={props.card.cardID}
                key={index}
                index={index + 1}
              />
            );
          })}
          <NewTodoItem cardID={props.card.cardID} tailID={props.tailID} />
        </List>
      </CardContent>
    </Card>
  );
}

export default ToDoCard;
