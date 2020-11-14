import React from "react";
import Media from 'react-bootstrap/Media'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css";
import profile from "../../Assets/profile.jpg"



function Picture() {
    return (
<Jumbotron id="jumbo">
WELCOME TO MY PROFILE!!!
<Card id ="card">
<Card.Header id ="header"></Card.Header>

        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src={profile}
                alt="profile"
            />
            <Media.Body>
                <h5>My Biography</h5>
                <p>
                    My name is Himadri Narayan Sinha. I have a Bacehlor's of Science in Environmental Science and Policy from St. Edward's University
                    in Austin, TX. However, I have always been interested in full stack development for web applications and software, so I decided to attend
                    the University of California at Davis Full Stack Web Development Bootcamp. During this 6 month course, I have learned a lot and I've decided I'm interested
                    in application development for video games and would love to proceed down this career path in the future.
                </p>
                <p>

                    In this portfolio page, that uses many React Elements, you will find some of the work I have completed as part of the bootcamp along with a contact
                    page, should you like to contact me.
                </p>
                <p>
                    I greatly appreciate you in taking the time to visit my page!
          </p>
            </Media.Body>
        </Media>
        </Card>
        </Jumbotron>

    );
}

export default Picture;