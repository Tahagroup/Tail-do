import { configureStore } from "@reduxjs/toolkit";
import TailsSlice from "./slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: "root",
  storage, // use localStorage
};

const persistedReducer = persistReducer(persistConfig, TailsSlice);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  // #TODO: how incoming state from storage replaces initial state
  // stateReconciler: hardSet, //
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
