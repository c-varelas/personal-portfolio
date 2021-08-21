//UNDER CONSTRUCTION TESTING TO SEE IF IT RENDERS ONTO PAGE

import React from 'react'

import {Card} from 'react-bootstrap'
import {AiOutlineArrowRight} from "react-icons/ai"

const AboutMe = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello There I'm <span className="green">Cynthia Varelas </span>
            from <span className="green">California's CentralCoast (805)</span>
            <br />I obtained my degree in <span className="green">Linguistics</span> from California State University Northridge. I also obtained my <span className="green">Certification in Web Development</span> from Cal Poly Extended Education. My expertise in linguistics trained me to conduct and collect data, and analyze verbal and non-verbal communications in our society. In web development I was trained to create front-end and back-end projects using: HTML, CSS, JavaScript, PostgreSQL, React.js and Node.js. I inspire to combine my knowledge to create immersive apps for consumers to enjoy.
            <br />
            <br />
          When I'm not coding, some activities I enjoy are:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> <span className="green">Learning Languages</span>
            </li>
            <li className="about-activity"> 
              <AiOutlineArrowRight/><span className="green">Watching Anime</span>
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight/><span className="green">Visting Local Breweries in the 805</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
      </Card>
  )
}

export default AboutMe;