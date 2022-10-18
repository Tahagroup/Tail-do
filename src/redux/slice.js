import { createSlice } from "@reduxjs/toolkit";
import { palette } from "../utilities/palette";

const initialState = {
  //initial state
  tailsData: [
    {
      id: "1",
      tailName: "First Tail",
      theme: palette[0],
      cardsData: [
        {
          cardID: "first",
          cardName: "First Tail first card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: true },
          ],
        },
        {
          cardID: "second",
          cardName: "First Tail second card",
          TodosData: [
            { todoTitle: "todo1", done: true },
            { todoTitle: "todo2", done: false },
          ],
        },
      ],
    },
    {
      id: "2",
      theme: palette[1],
      tailName: "second Tail",
      cardsData: [
        {
          cardID: "ba",
          cardName: "second Tail first card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: true },
            { todoTitle: "todo3", done: false },
          ],
        },
      ],
    },
    {
      id: "3",
      theme: palette[2],
      tailName: "third Tail",
      cardsData: [
        {
          cardID: "bb",
          cardName: "third Tail 1th card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: true },
          ],
        },
        {
          cardID: "bc",
          cardName: "third Tail 2th card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: false },
          ],
        },
        {
          cardID: "bd",
          cardName: "third Tail 3th card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: false },
          ],
        },
        {
          cardID: "be",
          cardName: "third Tail 4th card",
          TodosData: [
            { todoTitle: "todo1", done: true },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: false },
          ],
        },
        {
          cardID: "bf",
          cardName: "third Tail 5th card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: false },
          ],
        },
        {
          cardID: "bg",
          cardName: "third Tail 6th card",
          TodosData: [
            { todoTitle: "todo1", done: false },
            { todoTitle: "todo2", done: false },
            { todoTitle: "todo3", done: false },
          ],
        },
      ],
    },
  ],
};
const tailsDataSlice = createSlice({
  name: "Tails", //this is slice name to distinguish from other slices
  initialState,
  reducers: {
    //define possible actions
    // Tail Actions ////////////////////////////////////
    addNewTail(state) {
      state.tailsData.push(newTailGenerator());
    },
    removeTale(state, action) {
      const newTailData = state.tailsData.filter(
        (item) => item.id !== action.payload
      );
      state.tailsData = newTailData;
    },
    editTale(state, action) {
      const tailToEdit = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.id;
      });
      state.tailsData[tailToEdit].tailName = action.payload.newName;
    },
    changeTaleTheme(state, action) {
      const tailToEdit = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      state.tailsData[tailToEdit].theme = action.payload.newTheme;
    },
    // Card Actions ////////////////////////////////////
    addNewCard(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload;
      });
      state.tailsData[tailIndex].cardsData.push(newCardTemplate);
    },
    deleteCard(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const newCardsData = state.tailsData[tailIndex].cardsData.filter(
        (card) => {
          return card.cardID !== action.payload.cardID;
        }
      );
      state.tailsData[tailIndex].cardsData = newCardsData;
    },
    changeCardName(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const cardIndex = state.tailsData[tailIndex].cardsData.findIndex(
        (card) => {
          return card.cardID === action.payload.cardID;
        }
      );
      state.tailsData[tailIndex].cardsData[cardIndex].cardName =
        action.payload.newName;
    },

    // Item Actions ////////////////////////////////////
    addNewItem(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const cardIndex = state.tailsData[tailIndex].cardsData.findIndex(
        (card) => {
          return card.cardID === action.payload.cardID;
        }
      );
      state.tailsData[tailIndex].cardsData[cardIndex].TodosData.push(
        createNewItemTemplate(action.payload.todoItem)
      );
    },
    // tailCRUD()
    // CardCRUD()
    // NewTodo()
    // TodoCRUD()
  },
});
//exporting reducer actions (which will be imported into store) to execute them in the components
export const reducerActions = tailsDataSlice.actions;
//exporting whole reducer:
export default tailsDataSlice.reducer;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lastPaletteIndex = -1;
function newTailGenerator() {
  lastPaletteIndex++;
  if (lastPaletteIndex === palette.length) {
    lastPaletteIndex = 0;
  }
  return {
    id: Math.random().toString(36).slice(2, 8),
    tailName: "New Tail",
    theme: palette[lastPaletteIndex],
    cardsData: [],
  };
}
const newCardTemplate = {
  cardID: Math.random().toString(36).slice(2, 9),
  cardName: "New Card",
  TodosData: [],
};

function createNewItemTemplate(text) {
  return {
    todoTitle: text,
    done: false,
  };
}
