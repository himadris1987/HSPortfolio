import React from "react";
import "./style.css";

function Container(props) {

    return (
        <div id="container" className="container">
            {props.children}
        </div>
    );
}

export default Container;