import React from "react";
import NewTodoCard from "./NewTodoCard";
import ToDoCard from "./ToDoCard";

interface TailCardsProps {
  tailID: string;
  cardsData: Card[];
  theme: Theme;
}

function TailCards(props: TailCardsProps) {
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
