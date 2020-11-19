import React from "react";
import {AiOutlineHtml5, AiOutlineGithub, AiFillApi } from "react-icons/ai";
import {DiCss3, DiJavascript1, DiReact, DiVisualstudio,DiMongodb } from "react-icons/di";
import {GrMysql, GrHeroku} from "react-icons/gr";
import {SiXcode, SiJquery, SiBootstrap} from "react-icons/si";
import {FaRobot, FaNodeJs} from "react-icons/fa";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"


function Skill (){
    return (
<Jumbotron id ="jumbo">
  <h1>Welcome to my Skills Page!</h1>
  <p>
    As mentioned in my about page, I have learned many languages, applications and tools
    to utilize for employment in the Coding market. Listed below are all of the skills that 
    I know so far.
  </p>
 <h2>Languages</h2>
 <Container>
     <Row id ="row">
         <Col ><AiOutlineHtml5 size={32}/></Col>
         <Col ><DiCss3 size ={32}/></Col>
         <Col ><DiJavascript1 size = {32}/></Col>
         <Col ><DiReact size ={32}/></Col>
    </Row>
    <Row id ="row">
         <Col >HTML</Col>
         <Col >CSS</Col>
         <Col >Java</Col>
         <Col >React</Col>
    </Row>
<br></br>
<h3>Applications</h3>
<Row id ="row">
         <Col ><DiVisualstudio size={32}/></Col>
         <Col ><GrMysql size ={32}/></Col>
         <Col ><DiMongodb size = {32}/></Col>
         <Col ><SiXcode size ={32}/></Col>
         <Col><FaRobot size ={32}/></Col>
    </Row>
    <Row id ="row">
         <Col >VSCode</Col>
         <Col >MySql</Col>
         <Col >MongoDb</Col>
         <Col >XCode</Col>
         <Col>RoboRT</Col>
    </Row>
<br></br>
<h4>Tools</h4>
<Row id ="row">
         <Col ><AiOutlineGithub size={32}/></Col>
         <Col ><GrHeroku size ={32}/></Col>
         <Col ><FaNodeJs size = {32}/></Col>
         <Col ><SiJquery size ={32}/></Col>
         <Col><SiBootstrap size ={32}/></Col>
         <Col><AiFillApi size = {32}/></Col>
    </Row>
    <Row id ="row">
         <Col >Github</Col>
         <Col >Heroku</Col>
         <Col >Node.js</Col>
         <Col >JQuery</Col>
         <Col>Bootstrap</Col>
         <Col>API</Col>
    </Row>

 </Container>
 






</Jumbotron>
    )
}
export default Skill;