import { createSlice } from "@reduxjs/toolkit";
import { palette } from "../utilities/palette";
interface tailType {
  tailsData: Tail[];
}
const initialState: tailType = {
  tailsData: [
    {
      id: "1",
      tailName: "Daily Tasks",
      theme: palette[3],
      cardsData: [
        {
          cardID: "aa",
          cardName: "Monday",
          TodosData: [
            { todoTitle: "Do the laundry", done: false, index: 1 },
            { todoTitle: "Wash the dishes", done: false, index: 2 },
            { todoTitle: "Mow the lawn", done: true, index: 3 },
          ],
        },
        {
          cardID: "ab",
          cardName: "Tuesday",
          TodosData: [
            { todoTitle: "Go To Work", done: true, index: 1 },
            { todoTitle: "Take a Shower", done: true, index: 2 },
            { todoTitle: "Buy Groceries", done: false, index: 3 },
            { todoTitle: "18:00 => Meet Friends", done: false, index: 4 },
          ],
        },
      ],
    },
    {
      id: "2",
      theme: palette[4],
      tailName: "Month Goals",
      cardsData: [
        {
          cardID: "ba",
          cardName: "January",
          TodosData: [
            { todoTitle: "Learn TypeScript", done: false, index: 1 },
            { todoTitle: "Improve ReactJS Skills", done: false, index: 2 },
            { todoTitle: "Finish The Book", done: true, index: 3 },
          ],
        },
      ],
    },
    {
      id: "3",
      theme: palette[5],
      tailName: "Postponed Works",
      cardsData: [
        {
          cardID: "bb",
          cardName: "Til End Of Month",
          TodosData: [
            { todoTitle: "Business Trip", done: false, index: 1 },
            { todoTitle: "Buy A New PC", done: false, index: 2 },
          ],
        },
      ],
    },
  ],
};
const tailsDataSlice = createSlice({
  name: "Tails",
  initialState,
  reducers: {
    // tail actions
    addNewTail(state) {
      state.tailsData.push(newTailTemplate());
    },
    removeTale(state, action) {
      const newTailData = state.tailsData.filter(
        (item) => item.id !== action.payload
      );
      state.tailsData = newTailData;
    },
    editTale(state, action) {
      const tailToEdit = state.tailsData.find((tail) => {
        return tail.id === action.payload.id;
      });
      tailToEdit.tailName = action.payload.newName;
    },
    changeTaleTheme(state, action) {
      const tailToEdit = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      state.tailsData[tailToEdit].theme = action.payload.newTheme;
    },
    // card actions
    addNewCard(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload;
      });
      state.tailsData[tailIndex].cardsData.push(newCardTemplate());
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

    // item actions
    addNewItem(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const cardIndex = state.tailsData[tailIndex].cardsData.findIndex(
        (card) => {
          return card.cardID === action.payload.cardID;
        }
      );
      let lastIndex = 0;
      try {
        lastIndex =
          state.tailsData[tailIndex].cardsData[cardIndex].TodosData.slice(-1)[0]
            .index;
      } catch (e) {
        lastIndex = 0;
      }
      state.tailsData[tailIndex].cardsData[cardIndex].TodosData.push(
        NewItemTemplate(action.payload.todoItem, ++lastIndex)
      );
    },
    removeTodo(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const cardIndex = state.tailsData[tailIndex].cardsData.findIndex(
        (card) => {
          return card.cardID === action.payload.cardID;
        }
      );
      const newTodos = state.tailsData[tailIndex].cardsData[
        cardIndex
      ].TodosData.filter((todo) => {
        return todo.index !== action.payload.index;
      });
      state.tailsData[tailIndex].cardsData[cardIndex].TodosData = newTodos;
    },
    toggleDone(state, action) {
      const tailIndex = state.tailsData.findIndex((tail) => {
        return tail.id === action.payload.tailID;
      });
      const cardIndex = state.tailsData[tailIndex].cardsData.findIndex(
        (card) => {
          return card.cardID === action.payload.cardID;
        }
      );
      const todoIndex = state.tailsData[tailIndex].cardsData[
        cardIndex
      ].TodosData.findIndex((todo) => {
        return todo.index === action.payload.index;
      });
      state.tailsData[tailIndex].cardsData[cardIndex].TodosData[
        todoIndex
      ].done =
        !state.tailsData[tailIndex].cardsData[cardIndex].TodosData[todoIndex]
          .done;
    },
  },
});
export const reducerActions = tailsDataSlice.actions;
export default tailsDataSlice.reducer;

// new Templates

let lastPaletteIndex = -1;
function newTailTemplate() {
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

function newCardTemplate() {
  return {
    cardID: Math.random().toString(36).slice(2, 9),
    cardName: "New Card",
    TodosData: [],
  };
}

function NewItemTemplate(text: string, index: number) {
  return {
    index,
    todoTitle: text,
    done: false,
  };
}
