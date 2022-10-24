import React from "react";
import TailOptions from "./TailOptions";
import { Box } from "@mui/material";
import TailCards from "../Card/TailCards";

interface TailProps {
  theme: Theme;
  tailInfo: { tailName: string; tailID: string };
  cardsData: Card[];
}
function Tail(props: TailProps) {
  return (
    <Box
      maxHeight={600}
      minHeight={370}
      mt={2}
      component="section"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: props.theme.bgColor,
        // scroll:
        overflowX: "scroll",
        "::-webkit-scrollbar": { width: "10px" },
        "::-webkit-scrollbar-track": { background: "#ddd" },
        "::-webkit-scrollbar-thumb": {
          background: "#bbb",
          borderRadius: "2px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "gray",
        },
      }}
    >
      <TailOptions theme={props.theme} tailInfo={props.tailInfo} />
      <TailCards
        cardsData={props.cardsData}
        theme={props.theme}
        tailID={props.tailInfo.tailID}
      />
    </Box>
  );
}

export default Tail;
