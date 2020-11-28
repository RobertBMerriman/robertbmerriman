import React from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { VerticalDivider } from "components/VerticalDivider";

interface Props {
  icon?: IconDefinition
  name: string
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  description: React.ReactNode
}

const ratingBlock: React.CSSProperties = { width: 10, height: 24, margin: '0 1px', boxSizing: 'border-box', borderRadius: 3 }

export const Skill = ({ icon, name, rating, description }: Props) =>
  <Row>
    <Col right>
      <Col center>
        <Row>
          {icon && <FontAwesomeIcon icon={icon} size="2x" />}
          <Col center><span style={{ marginRight: 8, fontSize: '1.6em', lineHeight: 1 }}>{name}</span></Col>
          <Col center>
            <Row>
              {Array(rating).fill(0).map(() => <div style={{ ...ratingBlock, background: '#87c0d2' }} />)}
              {Array(10 - rating).fill(0).map(() => <div style={{ ...ratingBlock, border: '2px #87c0d2 solid' }} />)}
            </Row>
          </Col>
        </Row>
      </Col>
    </Col>
    <VerticalDivider />
    <Col grow={2}>
      {description}
    </Col>
  </Row>
