import React from "react";
import './Skill.scss'
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
const ratingHollow: React.CSSProperties = { background: 'transparent', borderWidth: '2px', borderStyle: 'solid', }
const ratingLeft: React.CSSProperties = { marginLeft: 1.5, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, }
const ratingRight: React.CSSProperties = { marginRight: 1.5, borderTopRightRadius: 5, borderBottomRightRadius: 5, }

export const Skill = ({ icon, name, rating }: Props) =>
  <Row className="skill">
    <Col right vCenter>
      <span style={{ fontSize: '1.6em', lineHeight: 1, whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </Col>
    <div style={{ fontSize: '24px', height: '1.25em', width: '1.25em', margin: '0 2px 0 3.5px' }}>
      {icon && <FontAwesomeIcon icon={icon} fixedWidth />}
    </div>
    <Col center vCenter>
      <Row className="rating">
        {Array(rating).fill(0).map((_, i) => i % 2 === 0 ? <div style={{ ...ratingBlock, ...ratingLeft, }} /> : <div style={{ ...ratingBlock, ...ratingRight, }} />)}
        {Array(10 - rating).fill(0).map((_, i) =>
          i % 2 === rating % 2
            ? <div style={{ ...ratingBlock, ...ratingLeft, ...ratingHollow, borderRight: 'none', }} />
            : <div style={{ ...ratingBlock, ...ratingRight, ...ratingHollow, borderLeft: 'none', }} />)}
      </Row>
    </Col>
  </Row>

// TODO HACK
export const SkillSpacer = () => <Row><div style={{ fontSize: 6 }}>&nbsp;</div></Row>
