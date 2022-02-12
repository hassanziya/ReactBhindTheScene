import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutPut";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App running");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
