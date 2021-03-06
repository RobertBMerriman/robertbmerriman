import React from 'react'
import { Section } from "components/Section";
import { faAndroid, faApple, faAws, faGitAlt, faJava, faJsSquare, faPython, faReact, faSwift, faUnity } from "@fortawesome/free-brands-svg-icons";
import { Skill, SkillSpacer } from "./Skill";
import { faGem } from '@fortawesome/free-regular-svg-icons';
import { Col } from 'components/Col';
import { Row } from 'components/Row';
import { faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons';

export const SkillsSection = () =>
  <Section>
    <Row>
      <Col>
        <h1>Experience</h1>
        <h3>Soft skills</h3>
        <p>Teaching - I have really enjoyed tutoring more junior devs and have got lots of positive feedback. ... This is something I'd like to do even more of.</p>
        <p>
          Non-technical communication - I make an effort to understand my audience when presenting ideas or handing off important information and try to cut down unnessicary technical details without sacrificing the overall point when talking to non-technical team-members or product stakeholders.<br />
          Once I had someone say "Thank god it was you explaining that, I have no idea what the other engienners are saying sometimes"
        </p>


        <h3>Current - looking after family, learning music and bass guitar</h3>

        <h3>Front-end @ Goodlord - </h3>
        Typescript
        React
        PHP
        Javascript & jQuery
        Scala

        Tutoring junior devs


        <h3>Full-stack @ Sainsburys - </h3>

        <p>Currently work on Sainsbury’s SmartShop proposition working in a full-stack XP pairing environment on React front-end, Go & Python backend and Android & iOS apps</p>
        <p>Familiar with Agile and thinking outside my job description by working with managers, designers and product in cross-functional teams, in the past I have contributed heavily to the UX of React front-ends and combining it with designs.</p>
        <p>In my apprenticeship worked over 4 different teams in 2 years being exposed to a variety of technologies including app, front-end, back-end and infrastructure development. I have learnt and become proficient in several stacks, languages and frameworks.</p>
        Smartshop

        Full-stack - Xtreme Programming (XP)

        Go
        Javascript
        React
        iOS
        Swift
        PHP


        New Nectar

        Full-stack - Pairing

        Java
        Springboot
        iOS
        Swift
        Android
        Kotlin
        Javascript
        React






        <h3>Apprentice @ Sainsburys - 2 years </h3>
        New Nectar
        Python
        AWS infrastructure


        Big Data thing
        Scala

        GOL
        iOS -

        <h3>Other experience</h3>

        Unity, C#, WebGL HTML5 Canvas
      </Col>
      <Col center>
        {/* <h1>&nbsp;</h1> */}
        <Col right>
          <Skill icon={faJsSquare} name="JavaScript" rating={10} />
          <Skill name="TypeScript" rating={10} />
          <Skill icon={faReact} name="React" rating={10} />
          <SkillSpacer />
          <Skill name="Kotlin" rating={9} />
          <Skill icon={faAndroid} name="Android" rating={8} />
          <Skill name="Scala" rating={8} />
          <Skill icon={faJava} name="Java" rating={7} />
          <SkillSpacer />
          <Skill icon={faSwift} name="Swift" rating={9} />
          <Skill icon={faApple} name="iOS" rating={8} />
          <SkillSpacer />
          <Skill icon={faPython} name="Python" rating={8} />
          <Skill name="Flask" rating={8} />
          <Skill name="Django" rating={5} />
          <SkillSpacer />
          <Skill icon={faGem} name="Ruby" rating={8} />
          <Skill name="Rails" rating={7} />
          <Skill name="Sinatra" rating={5} />
          <SkillSpacer />
          <Skill name="Go" rating={7} />
          <Skill name="PHP" rating={4} />
          <SkillSpacer />
          <SkillSpacer />
          <Skill icon={faGitAlt} name="Git" rating={10} />
          <Skill icon={faTerminal} name="Terminal" rating={9} />
          <Skill icon={faAws} name="AWS Infra" rating={7} />
          <Skill icon={faDatabase} name="SQL" rating={6} />
          <SkillSpacer />
          <SkillSpacer />
          <Skill name="C#" rating={8} />
          <Skill icon={faUnity} name="Unity" rating={7} />
          <Skill name="WebGL" rating={5} />
        </Col>
      </Col>
    </Row>
  </Section>
