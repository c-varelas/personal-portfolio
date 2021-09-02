import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Content from './Content'

//WILL ADD PROJECTS IN THE FUTURE. IN PROCESS OF REBUILDING/STYLING PREVIOUS PROJECTS
const Project = () => {
    return (
        <Container fluid className="project-section">
            <h1 className="project-heading">
                Projects that I had <strong className="green">Built</strong>
            </h1>
            <p style={{color:"#c2b18a"}}>
                Here an assortments of projects I had built in the past. Enjoy!
            </p>
        </Container>
    )
}
export default Project;