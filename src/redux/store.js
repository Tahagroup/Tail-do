import { configureStore } from "@reduxjs/toolkit";
// also import other slices if available
import TailsSlice from "./slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
  key: "root",
  storage, // use localStorage not session or...
};
const persistedReducer = persistReducer(persistConfig, TailsSlice);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  // whitelist: ["reducer"],
  stateReconciler: hardSet, // state reconciler: how incoming state from storage replaces initial state
});
export const persistor = persistStore(store);
