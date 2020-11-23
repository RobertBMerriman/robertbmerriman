import React from 'react'
import { Section } from "components/Section";
import { faJava, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { Skill } from "./Skill";


export const SkillsSection = () =>
  <Section>
    <Skill icon={faJsSquare} rating={8} description={<p>Ooooohhhhhhhh I'm bloody good mate</p>} />
    <Skill icon={faJava} rating={4} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
  </Section>
