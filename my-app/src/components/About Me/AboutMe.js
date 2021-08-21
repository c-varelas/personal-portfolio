import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import AboutMe from "../About Me/AboutMeCard"
import MySkills from "../About Me/MySkills"
import Image from "../../assets/IMG_0965.jpg"
import "./AboutMe.css"

const About = () => {
    return (
        <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get To Know The <strong className="green">Developer</strong>
            </h1>
          <AboutMe/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
             <img
            src={Image}
            alt="selfie"
            className="image"
          />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="green">Skillset </strong>
        </h1>
        <MySkills/>
      </Container>
    </Container> 
    )
}

export default About;