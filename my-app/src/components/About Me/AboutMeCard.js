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
            In May 2020 I graduated from <strong className="green">Cal State Northridge. </strong> Graduating during a pandemic I wasn't sure exactly what I wanted to do. 
            <br />I thought about becoming an <strong className="green">ESL Teacher </strong> or a  <strong className="green"> Government Career either as an NSA or CIA.</strong> Until I discover that Linguist are employed in tech companies. This peak my interest in programming languages and how linguist ulitize their skills in building apps. I begun my journey as a <strong className="green">developer</strong> in  <strong className="green">June 2020</strong>; The first programming language that been introduced was  <strong className="green">JavaScript</strong>. As a lingust graduate naturally I fell in love with programming languages. In which those linguistics skills were ulitize to help navigate through coding and building immersive applications. More recently, I put my data collection and communication skills to the test working as a <strong className="green">paraeducator</strong>. This experience sharpened my skills to assist students in their academic goals and troubleshoot any software issues.  <strong className="green"> I aspire to combine my knowledge to create immersive apps for consumers to enjoy.</strong> 
            <br />
            <br />
            <h2>
           More Information <strong className="green">&</strong> Facts:
            </h2>          
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> <span className="green">Pronouns: She/Her/Hers</span>
            </li>
            <li className="about-activity"> 
              <AiOutlineArrowRight/><span className="green">Bilingual (English and Spanish), Currently Learning Japanese</span>
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight/><span className="green">I currently reside in Santa Barbara, CA</span>

            </li>
            <li className="about-activity">
              <AiOutlineArrowRight/><span className="green">I am huge language geek (Verbal, Nonverbal and Computer)</span>
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight/><span className="green">I love watching anime and reading comics.</span>
              
            </li>
          </ul>
        </blockquote>
      </Card.Body>
      </Card>
  )
}

export default AboutMe;