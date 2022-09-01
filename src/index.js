import React from "react";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { createRoot } from "react-dom/client";

// ReactDOM.render(
//   <React.StrictMode>
//     <DarkModeContextProvider>
//       <App />
//     </DarkModeContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);