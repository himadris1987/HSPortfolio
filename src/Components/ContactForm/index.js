import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container, Row, Col } from 'react-bootstrap';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

import "./style.css";


function ContactForm(props) {
    const githublink = "https://github.com/himadris1987";
    const linkedinlink = "https://www.linkedin.com/in/himadri-sinha-a1532257";

    return (
<Jumbotron id ="jumbo">
   <h1> Welcome to my Contact Page! </h1>
   <p> Below you will find my contact details and links to my github and LinkedIn profiles.</p>
    
 <ListGroup>
        <ListGroup.Item id ="list">Contact Information</ListGroup.Item>
        <ListGroup.Item id ="list">Location: Sacramento, California 95824</ListGroup.Item>
        <ListGroup.Item id="list">Phone: 916-396-4514</ListGroup.Item>
        <ListGroup.Item id="list"><span>Email:&nbsp;<a href="mailto:himadris@gmail.com" target="_blank" rel="noopener noreferrer">himadris@gmail.com 
        </a></span>
        </ListGroup.Item>
</ListGroup>
<Container>
    <h5>Find me on these websites!</h5>
    <Row>
        <Col id="git"><AiFillGithub size={100} onClick={() => window.open(githublink, "_blank")}/></Col>
        <Col id="in"><AiFillLinkedin size ={100} onClick={() => window.open(linkedinlink, "_blank")}/></Col>
    </Row>
</Container>

</Jumbotron>
    );
}

export default ContactForm;