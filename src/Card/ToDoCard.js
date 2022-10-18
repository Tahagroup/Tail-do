import React, { useRef } from "react";
import { Card, CardContent, List, TextField, IconButton } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import NewTodoItem from "./NewTodoItem";
import TodoItem from "./TodoItem";
import { reducerActions } from "../redux/slice";
import { useDispatch } from "react-redux";

function ToDoCard(props) {
  const InputRef = useRef();
  const dispatch = useDispatch();

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
  }
  function cardNameLoseFocusHandler(event) {
    changeNameDispatcher();
  }
  function EnterPressHandler(event) {
    if (event.key === "Enter") {
      changeNameDispatcher();
    }
  }
  function deleteClickHandler() {
    // console.log(props.tailID + " " + props.cardID);
    dispatch(
      reducerActions.deleteCard({
        tailID: props.tailID,
        cardID: props.cardID,
      })
    );
  }
  // ////////////////////////
  return (
    <Card
      elevation={4}
      sx={{
        margin: "20px",
        minWidth: "250px",
      }}
    >
      <CardContent
        sx={{
          background: props.theme.cardHeader,
        }}
      >
        <TextField
          variant="standard"
          defaultValue={props.card.cardName}
          onBlur={cardNameLoseFocusHandler}
          onKeyDown={EnterPressHandler}
          inputRef={InputRef}
          InputProps={{ disableUnderline: true }}
          // #TODO:
          // autoFocus
        ></TextField>
        <IconButton onClick={deleteClickHandler}>
          <DeleteTwoToneIcon />
        </IconButton>
      </CardContent>

      <CardContent>
        <List
          dense
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {props.card.TodosData.map((todo, index) => {
            return <TodoItem todoData={todo} key={index} />;
          })}
          <NewTodoItem cardID={props.card.cardID} tailID={props.tailID} />
        </List>
      </CardContent>
    </Card>
  );
}

export default ToDoCard;
