import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Fuzzy Bubbles",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
    ].join(","),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
