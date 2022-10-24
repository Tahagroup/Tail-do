import { configureStore } from "@reduxjs/toolkit";
// also import other slices if available
import TailsSlice from "./slice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
  key: "root",
  storage, // use localStorage
};

// const persistedReducer = persistReducer<ReturnType<typeof TailsSlice>>(
const persistedReducer = persistReducer(persistConfig, TailsSlice);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  // #TODO:
  // stateReconciler: hardSet, // state reconciler: how incoming state from storage replaces initial state
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
