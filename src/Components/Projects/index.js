import React from "react";
import Media from 'react-bootstrap/Media';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Buy from "../../Assets/Buy.png";
import Final from "../../Assets/Final.png";
import Final2 from "../../Assets/Final2.0.png";
import "./style.css";

function Projects(props) {
    return (
    <Card id = "card">
        <Card.Header id="header">Projects</Card.Header>
        <ul className="list-unstyled">
            <Media as="li">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={Buy}
                    alt="Buy Buy Buy"
                />
                <Media.Body>
                    <h5>Buy Buy Buy</h5>
                    <p>
                        This project is a simple currency converter that converts all major currencies and
                        cryptocurrencies
      </p>
                    <Button id="button" href="https://himadris1987.github.io/Buy_Buy_Buy/" target="blank">Go to project url</Button>
                    &nbsp;
                    <Button id ="button"href="https://github.com/himadris1987/Buy_Buy_Buy" target="blank ">Go to github code url</Button>

                </Media.Body>
            </Media>

            <Media as="li">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={Final}
                    alt="Final Phantasy v1.0"
                />
                <Media.Body>
                    <h5>Final Phantasy Version 1.0</h5>
                    <p>
                        A game that utilizes a store where the user can purchase items and then use them in
                        battle against AI enemies. However, due to time constraints this project is incomplete.
                        Please look to Final Phantasy 2.0 for a more complete application.
      </p>
                    <Button id = "button" href="https://fin-phantasy.herokuapp.com/" target="blank">Go to project url</Button>
                    &nbsp;
                    <Button id ="button" href="https://github.com/himadris1987/BCProject2" target="blank">Go to github code url</Button>

                </Media.Body>
            </Media>

            <Media as="li">
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={Final2}
                    alt="Final Phantasy v2.0"
                />
                <Media.Body>
                    <h5>Final Phantasy Version 2.0 using React</h5>
                    <p>
                    This is an updated version of Final Phantasy 1.0. This version uses React instead of just Java that v1.0 used. In addition, this version fixed many bugs and errors that v1.0 had and allowed for actual gameplay and stats being updated correctly during stage 1 and boss battle fights. In 
                    addition to the functionality, all but the boss image were custom made for the game instead of 
                    using premade images taken from Google.
      </p>
                    <Button id ="button" href="#" target="https://dry-mountain-58151.herokuapp.com">Go to project url</Button>
                    &nbsp;
                    <Button id= "button" href="#"target ="https://github.com/himadris1987/Project3">Go to github code url</Button>

                </Media.Body>
            </Media>
        </ul>
        </Card>
    )
};

export default Projects;