//INPROGRESS: PLAN TO ADD MY SOCIAL LINKS(github, linkein, email, instagram)
import React from "react";
import './Footer.css'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <Container fluid className="footer">
          <Row>
            <Col md="4" className="footer-desc">
              <h3>Personal Portfolio Developed and Designed by Cynthia Varelas</h3>
            </Col>
            <Col md="4" className="footer-copywright">
          <h3>Copyright © 2021 Cynthia Varelas</h3>
        </Col>
            <Col md="4" className="footer-body">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/c-varelas"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/cynthia-varelas-83a1801a2/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/"
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      );
}

export default Footer;