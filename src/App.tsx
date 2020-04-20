import React from "react";
import "./App.css";
import Sakura from "./sakura";

//leaf colour = #60c4c3

const App = () => {
  return (
    <div className="App">
      <Sakura leaves={30} />
      <Sakura leaves={10} zIndex={10} />
      <div className="card">
        <div className="col center">
          <img src="img/robert.merriman.jpg" alt="It's-a me!" className="me" />
          <h2>Front endgineer</h2>
          <p>lorem ispem</p>
        </div>
        <div className="vr" />
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia deserunt officia quasi vel.
            Accusantium libero tenetur.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptates quas facere! Magni quis in
            assumenda eius facilis! Omnis velit consectetur culpa sequi commodi modi?
          </p>
          <p>Lorem ipsum, dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default App;
