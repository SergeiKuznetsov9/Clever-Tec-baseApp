import React from "react";
import ReactDOM from "react-dom/client";
import { api } from "./api";
import App from "./components/app/App";
import "./style/style.scss";

api.characters.getAllCharacters().then((res) => console.log(res));
api.characters.getCharacter(1011196).then((res) => console.log(res));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
