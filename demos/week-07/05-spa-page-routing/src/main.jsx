import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//we are going to provide our app with the React Router tools
import { BrowserRouter } from "react-router"; //this is a provider!
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
