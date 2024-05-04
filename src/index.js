import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const curdate = new Date();
const gethrs = curdate.getHours();
let greeting = "";
const styleCss = {};

if (gethrs >= 5 && gethrs < 12) {
  greeting = "Good Morning";
  styleCss.color = "green";
} else if (gethrs >= 12 && gethrs < 18) {
  greeting = "Good Afternoon";
  styleCss.color = "orange";
} else {
  greeting = "Good night";
  styleCss.color = "black";
}
ReactDOM.render(
  <>
  <div>
    <h1>
      Hello Sir ,<span style={styleCss}> {greeting}</span>
    </h1>
    </div>
  </>,
  document.getElementById("root")
);
