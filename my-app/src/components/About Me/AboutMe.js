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
              Linguist| <strong className="green">Developer|</strong> Educator
            </h1>
            <h3 style={{fontSize: "1.5em", paddingBottom:"5px"}}>
              From An Aspiring <strong className="green">Linguist</strong> To An Aspiring <strong className="green">Web Developer</strong>
            </h3>
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
          My <strong className="green">Skillset </strong> and <strong className="green">Technologies</strong> I Used:
        </h1>
        <MySkills/>
      </Container>
    </Container> 
    )
}

export default About;