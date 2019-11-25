import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
const deleteBtn = document.querySelector('.delete');
deleteBtn.onclick = (e) => {
  const article = e.currentTarget.parentNode.parentNode;
  article.style.display = 'none';
}
