import React from "react";
import NewTodoCard from "./NewTodoCard";
import TodoCard from "./TodoCard";
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
          <TodoCard
            key={card.cardID}
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
