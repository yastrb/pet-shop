import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
