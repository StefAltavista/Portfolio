import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const projects = require("../../../content.json");

export default function Project({ name }) {
    console.log("PROJ", name);
    const proj = projects.find((x) => x.name == name);

    return (
        <div id="project">
            <NavBar idn="appear" />
            <div id="projBody">
                <p id="pTitle">{proj.title}</p>
                <p id="pDescription">{proj.description}</p>
                <a href={proj.url} id="pLinkTo">
                    Go to {proj.name}
                </a>
            </div>
        </div>
    );
}
