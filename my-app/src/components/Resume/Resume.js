import React from 'react';
import Content from './Contents'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {HiDocumentDownload} from 'react-icons/hi'
import pdf from '../../assets/cvarelas.pdf'
import './Resume.css'

const Resume = () => {
    return (
        <Container fluid className="experience-section">
            <Row className="experience">
                <Col md={6} className="exp-left">
                    <h3 className="exp-title">Experience</h3>
             
                <Content
                title="Special Education Paraeducator - Lompoc Unified School District"
                date="Jun 2021 - Current"
                content={[
                    "Work in a 1:1 and group setting to support teachers by preparing and assigning lectures to students remotely and in-person. ",
                    "Successfully manage a classroom of 10 students with guidance through difficult assignments and software programs.",
                    "Successfully collect data recording behavior analysis of an individual student in order to make recommendations for education goals."
                ]}
                />
                <Content
                title="Special Education Paraeducator - Maxim Healthcare Services"
                date=" Oct 2020 - Jun 2021"
                content={[
                    "Worked in a 1:1 and group setting to support teachers by preparing and assigning lectures to students remotely.",
                    "Managed an online class of 12-15 students with guidance through difficult assignments and software programs."
                ]}
                />
                <Content
                title="General Technician - City of Lompoc"
                date="Jun 2020 - Jul 2020"
                content={[
                    "Performed data entry and collected information for Community and Development Department that was then used to direct low-income families to financial support services.",
                    "Answered and responded to telephone and email inquires, as well as escalated questions when needed.",
                    "Typed, formatted, and edited routine memos and other reports in order to keep information up to date and accurate."
                ]}
                />
             </Col>
             <Col md={6} className="educ-right">
                 <h3 className="educ-title">Education</h3>
                 <Content
                 title="Cal Poly Extended Education/ Fullstack Academy"
                 date="Feb 2021 - Aug 2021"
                 content={[
                     "26 Week Coding Bootcamp focused on JavaScript and the latest web technologies."
                 ]}
                 />
                 <Content
                 title="California State University, Northridge"
                 date="Aug 2018 - May 2020"
                 content={[
                     "BA - Linguistics"
                 ]}
                 />
                 <Content
                 title="Santa Barbara City College"
                 date="Aug 2014 - May 2018"
                 content={[
                     "Transfer w/o Associate"
                 ]}
                 />
             </Col>
            </Row>
            <Button variant="primary" href={pdf} target="_blank">
                <HiDocumentDownload/>
                    &nbsp;Download CV
            </Button>
        </Container>
    )
}
export default Resume;