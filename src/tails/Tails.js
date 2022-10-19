import React from "react";
import { useSelector } from "react-redux";
import NewTail from "./NewTail";
import Tail from "./Tail";

function Tails() {
  const tailData = useSelector((state) => state.tailsData);

  return (
    <>
      {tailData.map((tail) => {
        return (
          <Tail
            key={tail.id}
            cardsData={tail.cardsData}
            theme={tail.theme}
            tailInfo={{
              tailName: tail.tailName,
              tailID: tail.id,
            }}
          />
        );
      })}
      <NewTail />
    </>
  );
}

export default Tails;
