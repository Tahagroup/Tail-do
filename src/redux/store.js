import { configureStore } from "@reduxjs/toolkit";
import TailsSlice from "./slice";
// also import other slices if available

// create the store(initial setup of redux which will be passed to top level component to give every child component access redux data)
const store = configureStore({
  // add all slices, they will be merged
  reducer: {
    // tailsData is name of choice
    tailsDataSlice: TailsSlice,
    // , slice2: mySlice.reducer
  },
});
export default store;
