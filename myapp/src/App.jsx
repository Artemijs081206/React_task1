import React, { useState } from "react";
import "./style.css";
import BuisnesCard from "./components/buisnes-card";
import Gallery from "./components/gallery";
import Profile from "./components/profile";
import Hobbies from "./components/hobbies";
import Todo from "./components/todo";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const changeColor = () => {
    const colors = ["crimson", "Tomato", "DodgerBlue", "MediumSeaGreen", "Gold", "DeepPink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "BuisnesCard":
        return <BuisnesCard />;
      case "Gallery":
        return <Gallery />;
      case "Profile":
        return <Profile />;
      case "Hobbies":
        return <Hobbies />;
      case "TodoList":
        return <Todo />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={() => setActiveComponent("BuisnesCard")}>BuisnesCard</button>
        <button onClick={() => setActiveComponent("Gallery")}>Gallery</button>
        <button onClick={() => setActiveComponent("Profile")}>Profile</button>
        <button onClick={() => setActiveComponent("Hobbies")}>Hobbies</button>
        <button onClick={() => setActiveComponent("TodoList")}>TodoList</button>
        <button onClick={changeColor}>Change Background Color</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
