import React from "react";
import "./style.css";

function Sidebar(props) {
    return <section className="sidebar">{props.children}</section>;
}

export default Sidebar;