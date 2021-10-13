import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Home.css'
import Image from "../../assets/IMG_9921.JPG";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello there,
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name"> Cynthia Varelas </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                Welcome To My Portfolio! I Hope You Enjoy Exploring My Page And Get To Know Bit About Who I Am.
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} >
            <img
            src={Image}
            alt="selfie"
            className="image"
          />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;