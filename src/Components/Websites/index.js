import React from "react";
import "./style.css";
import github from"../../Assets/github.png"
import linkedin from "../../Assets/linkedin.png"


function Connect(props) {

    const githublink = "https://github.com/himadris1987";
    const linkedinlink = "https://www.linkedin.com/in/himadri-sinha-a1532257";

    return (
        <div className="connect">
            <h2 className="h2websites">
                Find me on these websites
            </h2>
            <img id="github" src={github} className="social" alt="GitHub" title="GitHub" onClick={() => window.open(githublink, "_blank")} />

            <img id="linkedin" src={linkedin} className="social" alt="LinkedIn" title="LinkedIn" onClick={() => window.open(linkedinlink, "_blank")} />
            {props.children}
        </div>
    )
};

export default Connect;