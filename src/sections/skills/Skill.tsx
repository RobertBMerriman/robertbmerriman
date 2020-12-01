import React from "react";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "components/Row";
import { Col } from "components/Col";

interface Props {
  icon?: IconDefinition
  name: string
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

const ratingBlock: React.CSSProperties = { width: 8, height: 24, boxSizing: 'border-box', }
const ratingLeft: React.CSSProperties = { marginLeft: 1, borderTopLeftRadius: 3, borderBottomLeftRadius: 3, }
const ratingRight: React.CSSProperties = { marginRight: 1, borderTopRightRadius: 3, borderBottomRightRadius: 3, }

export const Skill = ({ icon, name, rating }: Props) =>
  <Row>
    <Col right vCenter>
      <span style={{ fontSize: '1.6em', lineHeight: 1, whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </Col>
    <div style={{ fontSize: '24px', height: '1.25em', width: '1.25em', margin: '0 2px' }}>
      {icon && <FontAwesomeIcon icon={icon} fixedWidth />}
    </div>
    <Col center vCenter>
      <Row>
        {Array(rating).fill(0).map((_, i) => i % 2 === 0 ? <div style={{ ...ratingBlock, ...ratingLeft, background: '#87c0d2' }} /> : <div style={{ ...ratingBlock, ...ratingRight, background: '#87c0d2' }} />)}
        {Array(10 - rating).fill(0).map((_, i) => i % 2 === rating % 2 ? <div style={{ ...ratingBlock, ...ratingLeft, border: '2px #87c0d2 solid', borderRight: 'none' }} /> : <div style={{ ...ratingBlock, ...ratingRight, border: '2px #87c0d2 solid', borderLeft: 'none' }} />)}
      </Row>
    </Col>
  </Row>
