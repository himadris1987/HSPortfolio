import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css";


function ContactForm(props) {

    return (
<Jumbotron id ="jumbo">
    Welcome to my Contact Page. Below you will find my contact details and links to my github and LinkedIn profiles.
    
 <ListGroup>
        <ListGroup.Item id ="list">Contact Information</ListGroup.Item>
        <ListGroup.Item id ="list">Location: Sacramento, California 95824</ListGroup.Item>
        <ListGroup.Item id="list">Phone: 916-396-4514</ListGroup.Item>
        <ListGroup.Item id="list">Email: himadris@gmail.com</ListGroup.Item>
      </ListGroup>
</Jumbotron>
    );
}

export default ContactForm;