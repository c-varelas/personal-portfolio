//UNDER CONSTRUCTION TESTING TO SEE IF IT RENDERS ONTO PAGE

import React from 'react'

import {Card} from 'react-bootstrap'

const AboutMe = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '70%', margin: '4rem' }}>
        <Card.Header>Get to Know Me:</Card.Header>
        <Card.Body>
          <p>
            Hello, my name is Cynthia. I reside in Santa Barbara County. 
          </p>
        </Card.Body>
      </Card>
    </div>
    )
}

export default AboutMe;