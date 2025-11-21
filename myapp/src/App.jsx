import React, { useState } from "react";
import "./style.css";
import BuisnesCard from "./components/buisnes-card";
import Gallery from "./components/gallery";
import Profile from "./components/profile";
import Hobbies from "./components/hobbies";
import Todo from "./components/todo";
import Counter from "./components/counter";
import OnChange from "./components/on-change";
import Uzd3 from "./components/uzd3";
import PostsList from "./components/posts-list";
import Dog from "./components/dog-image";

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
      case "Counter":
        return <Counter />;
      case "OnChange":
        return <OnChange />;
      case "Uzd3":
        return <Uzd3 />;
      case "PostsList":
        return <PostsList />;
      case "Dog":
        return <Dog />;
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
        <button onClick={() => setActiveComponent("Counter")}>Counter</button>
        <button onClick={() => setActiveComponent("OnChange")}>OnChange</button>
        <button onClick={() => setActiveComponent("Uzd3")}>Uzd3</button>
        <button onClick={() => setActiveComponent("PostsList")}>PostsList</button>
        <button onClick={() => setActiveComponent("Dog")}>Dog</button>
        <button onClick={changeColor}>Change Background Color</button>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
