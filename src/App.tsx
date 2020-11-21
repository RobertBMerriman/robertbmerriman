import React from "react";
import "./App.scss";
import { SkillsSection } from "./sections/skills";
import { LandingSection } from "./sections/landing";

// old leaf colour = #60c4c3

const App = () => {
  return (
    <>
      <LandingSection />
      <SkillsSection />
    </>
  );
};

export default App;
