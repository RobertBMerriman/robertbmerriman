import React from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { VerticalDivider } from "components/VerticalDivider";

interface Props {
  icon: IconDefinition
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  description: React.ReactNode
}

const ratingBlock: React.CSSProperties = { width: 10, height: 'auto', margin: '5px 1px', boxSizing: 'border-box', borderRadius: 3 }

export const Skill = ({ icon, rating, description }: Props) =>
  <Row>
    <Col right>
      <Col center>
        <Row>
          <FontAwesomeIcon icon={icon} size="4x" />
          {Array(rating).fill(0).map(() => <div style={{ ...ratingBlock, background: '#87c0d2' }} />)}
          {Array(10 - rating).fill(0).map(() => <div style={{ ...ratingBlock, border: '2px #87c0d2 solid' }} />)}
        </Row>
      </Col>
    </Col>
    <VerticalDivider />
    <Col grow={2}>
      {description}
    </Col>
  </Row>
