import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col } from 'components/Col';
import { Row } from 'components/Row';
import { Section } from "components/Section";
import { VerticalDivider } from 'components/VerticalDivider';


export const LandingSection = () =>
  <Section>
    <Row break>
      <Col grow={1} right >
        <Col center vCenter >
          {/* Use srcSet with different res */}
          <img src={`/img/robert.merriman.jpg`} alt="It's-a me!" className="me" />
          <h1>Robert Merriman</h1>
          <p>Full-stack Engineer</p>
          <Row>
            <div style={{ marginTop: 8 }}>
              <a target="_blank" href="https://github.com/RobertBMerriman" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/robertbmerriman/" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a target="_blank" href="https://robertbmerriman.co.uk/" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
              </a>
            </div>
          </Row>
        </Col>
      </Col>
      <VerticalDivider />
      <Col grow={2} vCenter>
        <div>
          <h1 style={{ fontWeight: 'normal' }}>Hi! I am currently working very hard bringing this new-and-improved site to life. It will be a combination CV/portfolio and I'm sure you'll love it.</h1>
          <h1 style={{ fontWeight: 'normal' }}>Please come back later when it is ready, maybe in a few weeks. Or you can see my progress on <a target="_blank" href="https://github.com/RobertBMerriman/robertbmerriman" rel="noopener noreferrer">GitHub</a> :)</h1>
        </div>
      </Col>
    </Row>
  </Section>
