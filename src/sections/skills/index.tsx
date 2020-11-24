import React from 'react'
import { Section } from "components/Section";
import { faAndroid, faApple, faJava, faJsSquare, faPython, faReact, faSwift } from "@fortawesome/free-brands-svg-icons";
import { Skill } from "./Skill";
import { faGem } from '@fortawesome/free-regular-svg-icons';


export const SkillsSection = () =>
  <Section>
    <Skill icon={faJsSquare} name="Javascript" rating={8} description={<p>Ooooohhhhhhhh I'm bloody good mate</p>} />
    <Skill name="Typescript" rating={8} description={<p>Ooooohhhhhhhh I'm bloody good mate</p>} />
    <Skill icon={faReact} name="React" rating={8} description={<p>Ooooohhhhhhhh I'm bloody good mate</p>} />
    <br />
    <Skill icon={faPython} name="Python" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill name="Django" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill name="Flask" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <br />
    <Skill icon={faGem} name="Ruby" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill name="Rails" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill name="Sinatra" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <br />
    <Skill icon={faAndroid} name="Android" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill name="Kotlin" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill icon={faJava} name="Java" rating={4} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <br />
    <Skill icon={faApple} name="iOS" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <Skill icon={faSwift} name="Swift" rating={5} description={<p>Ooooohhhhhhhh I'm bloody okay mate</p>} />
    <br />


    <h3>Soft skills</h3>
    <p>Teaching - I have really enjoyed tutoring more junior devs and have got lots of positive feedback. ... This is something I'd like to do even more of.</p>
    <p>Non-technical communication - I make an effort to understand my audience when presenting ideas or handing off important information and try to cut down unnessicary technical details without sacrificing the overall point when talking to non-technical team-members or product stakeholders.<br />
    Once I had someone say "Thank god it was you explaining that, I have no idea what the other engienners are saying sometimes" </p>
  </Section>
