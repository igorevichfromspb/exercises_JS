import { useState, useEffect } from "react";
import getDay from "./logic/main";
import "./App.css";

function App() {
  useEffect(() => {
    getDay();
  });
  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
