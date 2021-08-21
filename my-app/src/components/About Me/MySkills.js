import React from 'react';
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiGit,
    DiNodejs,
    DiPostgresql,
    DiReact,
    DiGitBranch,
    DiGithubBadge,
    DiHeroku,
    DiBootstrap
} from "react-icons/di"

const MySkills = () => {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <DiJavascript />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiReact />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiPostgresql />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGitBranch />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGithubBadge />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiHeroku />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
    </Col>
  </Row>  
)
}

export default MySkills;