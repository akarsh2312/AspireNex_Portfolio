import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiMicrosoftexcel,
  SiJupyter 
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
    </Row>
  );
}

export default Toolstack;
