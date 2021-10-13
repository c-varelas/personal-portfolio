import React from "react";
import {Container, Row, Col} from "react-bootstrap";
// import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Content from './Content'
import Strangers from "../../assets/strangerthings.png"
import './Projects.css'

//WILL ADD PROJECTS IN THE FUTURE. IN PROCESS OF REBUILDING/STYLING PREVIOUS PROJECTS
const Project = () => {
    return (
        <Container fluid className="project-section">
            <h1 className="project-heading">
                Projects that I had <strong className="green">Built</strong>
            </h1>
            <p className="project-p"  style={{color:"#c2b18a"}}>
                Here an assortments of projects I had built in the past. Enjoy! (Currently Under Construction)
            </p>
            <Row style={{justifyContent: "center", paddingBottom:"10px"}}>
                <Col md={4} className="project-card">
                    <Content
                        imgPath={Strangers}
                        isBlog={false}
                        title="Strangers Things"
                        description="Fullstack mock Craiglist application, solely developed with the purpose to sell a user's items. This project allows a new or current user to post items that wish to be sold. Users are also able to post publicly, update, or delete their posts inlcuding responding to others users.
                        Technologies used: JavaScript, jQuery, HTML, CSS BootStrap"
                        link="https://vigorous-fermi-4902e7.netlify.app/"
                    />
                </Col>           
            </Row>
        </Container>
    )
}
export default Project;