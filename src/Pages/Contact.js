import React from "react";
import Container from "../Components/Container";
import Section from "../Components/Section";
import ContactForm from "../Components/ContactForm";
import Websites from "../Components/Websites";
import Sidebar from "../Components/Sidebar";

function Contact (){
    return (
        <Container>
            <Section> 
                <ContactForm/>
            </Section>
            <Sidebar>
            <Websites/>
            </Sidebar>
        </Container>
    )
};

export default Contact;