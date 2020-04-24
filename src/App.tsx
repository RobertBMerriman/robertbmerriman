import React from "react";
import "./App.scss";
import Sakura from "./sakura";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { Card } from "./components/Card";
import { Row } from "./components/Row";
import { Col } from "./components/Col";
import { VerticalDivider } from "./components/VerticalDivider";

//leaf colour = #60c4c3

const App = () => {
  return (
    <div className="App">
      <Sakura leaves={6} />
      <Sakura leaves={2} zIndex={10} />
      <Card>
        <Col center>
          <img src="img/robert.merriman.jpg" alt="It's-a me!" className="me" />
          <h1>Robert Merriman</h1>
          <p>Front endgineer</p>
          <Row>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </Row>
        </Col>
        <VerticalDivider />
        <Col>
          <p>Hey wuddup my name is Robert and I'm a front-end developer in the UK</p>
          <p>I've worked with a variety of front-end and back-end languages mostly thanks</p>
        </Col>
      </Card>
    </div>
  );
};

export default App;
