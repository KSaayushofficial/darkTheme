import { useState } from "react";
import "./style.css";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonBg, setButtonBg] = useState("white");
  const [buttonBorder, setButtonBorder] = useState("#1b1b1b");

  function handleClick() {
    setBgColor((prev) => (prev === "white" ? "#1b1b1b" : "white"));
    setTextColor((prev) => (prev === "#1b1b1b" ? "#ffa31a" : "#1b1b1b"));
    setButtonBg((prev) => (prev === "white" ? "#1b1b1b" : "white"));
    setButtonBorder((prev) => (prev === "#1b1b1b" ? "#ffa31a" : "#1b1b1b"));
  }

  return (
    <section style={{ backgroundColor: bgColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonBg,
          color: textColor,
          border: `2px solid ${buttonBorder}`, 
        }}
      >
        Toggle Theme
      </button>
      <div className="content">
        <h1>
          Welcome To A <br />
          Real World
        </h1>
      </div>
    </section>
  );
}

export default App;
