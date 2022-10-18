import React from "react";
import NewTodoCard from "./NewTodoCard";
import ToDoCard from "./ToDoCard";

function TailCards(props) {
  return (
    <>
      {props.cardsData.map((card, index) => {
        return (
          <ToDoCard
            key={index}
            card={card}
            theme={props.theme}
            tailID={props.tailID}
            cardID={card.cardID}
          />
        );
      })}
      <NewTodoCard tailID={props.tailID} />
    </>
  );
}

export default TailCards;
