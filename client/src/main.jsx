import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyContext } from "./MyContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MyContext.Provider>
  </React.StrictMode>
);
