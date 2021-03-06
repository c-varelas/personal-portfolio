import React from 'react';
import {Button, Card} from 'react-bootstrap';
import { ImLink } from 'react-icons/im';

const Content = (props) => {
    return (
        <Card className="project-content">
            <Card.Img variant="top" src={props.imgPath} alt="project-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>{props.description}</Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <ImLink/> &nbsp;
                    {props.isProject ? "View Project" : "View Project"}
                    </Button>
            </Card.Body>
        </Card>
    );
}
export default Content;
