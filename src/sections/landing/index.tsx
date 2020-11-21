import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col } from '../../components/Col';
import { Row } from '../../components/Row';
import { Section } from "../../components/Section";
import { VerticalDivider } from '../../components/VerticalDivider';


export const LandingSection = () =>
  <Section>
    <Row break>
      <Col right>
        <Col center>
          {/* Use srcSet with different res */}
          <img src={`/img/robert.merriman.jpg`} alt="It's-a me!" className="me" />
          <h1>Robert Merriman</h1>
          <p>Front endgineer</p>
          <Row>
            <div style={{ marginTop: 8 }}>
              <a target="_blank" href="https://github.com/RobertBMerriman" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </div>
          </Row>
        </Col>
      </Col>
      <VerticalDivider />
      <Col grow={2}>
        <div>
          <h1>THIS IS A WORK IN PROGRESS PLS NO JUDGE YOU HAVE BEEN WARNED KTHX</h1>
          <p>Hey wuddup my name is Robert and I'm a front-end developer in the UK</p>
          <p>
            I've worked with a variety of front-end and back-end languages mostly thanks to my apprenticeship at
            Sainsbury's where I worked on all kinds of teams and projects
              </p>
          <p>JavaScript, TypeScipt, React</p>
          <p>Wowee some other stuff</p>
          <p>Extra extra read all about it. I'm making this site again</p>
        </div>
      </Col>
    </Row>
  </Section>
