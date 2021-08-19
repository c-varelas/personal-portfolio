import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//UNDER CONSTRUCTION: PLANNING TO ADD ABOUT ME PAGE, PROJECTS PAGE, CONTACT, AND RESUMES SECTIONS
const NavbarReact = () => {
return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Cynthia Varelas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/about-me">About Me</Nav.Link>
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
)
}

export default NavbarReact;