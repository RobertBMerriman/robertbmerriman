import React from "react";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { Row } from "./components/Row";
import { Col } from "./components/Col";
import { VerticalDivider } from "./components/VerticalDivider";

//leaf colour = #60c4c3

const App = () => {
  return (
    <div className="App">
      <div style={{ maxWidth: "70%" }}>
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
              <p>Hey wuddup my name is Robert and I'm a front-end developer in the UK</p>
              <p>
                I've worked with a variety of front-end and back-end languages mostly thanks to my apprenticeship at
                Sainsbury's where I worked on all kinds of teams and projects
              </p>
              <p>JavaScript, TypeScipt, React</p>
              <p>Wowee some other stuff</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default App;
