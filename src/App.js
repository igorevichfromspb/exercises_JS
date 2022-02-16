import { useState, useEffect } from "react";
import getDay from "./logic/getDay";
import compareTwoObject from "./logic/compareTwoObject";
import "./App.css";
import round from "./logic/round";
import reverseNumber from "./logic/reverseNumber";
import factorial from "./logic/factorial";
import largerNum from "./logic/largerNum";
import isArray from "./logic/array";
import isDate from "./logic/dateTime";
import isString from "./logic/isString";

function App() {
  useEffect(() => {
    getDay();
    compareTwoObject();
    round();
    reverseNumber();
    factorial();
    largerNum();
    isArray();
    isDate();
    isString();
  });
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
