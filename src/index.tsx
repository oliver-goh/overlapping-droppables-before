import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function renderToDOM() {
  const root = document.getElementById("root");
  if (root !== null) {
    ReactDOM.render(<App />, root);
  }
}
renderToDOM();
export { renderToDOM };
