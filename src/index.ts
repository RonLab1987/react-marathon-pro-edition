import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const virtualNode: HTMLElement = document.createElement("div");
ReactDOM.render(React.createElement(App), virtualNode, () => {
  document
    .getElementById("root")!
    .replaceWith(...Array.from(virtualNode.childNodes));
});
