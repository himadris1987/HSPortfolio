import React from "react";
import "./style.css";


function Section(props) {

    return (
        <section className="section">
            {props.children}
        </section>
    );
}

export default Section;