import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const projects = require("../../../content.json");

export default function Project({ name }) {
    console.log("PROJ", name);
    const project = projects.find((x) => x.name == name);

    return (
        <div id="project">
            <NavBar
                idn="appear"
                css={{
                    backgroundColor: project.background,
                    color: project.color,
                }}
            />
            <div
                id="projBody"
                style={
                    project.name == "wrongimage"
                        ? { color: project.color }
                        : { color: project.background }
                }
            >
                <a href={project.url} target="blank">
                    <p id="pTitle">{project.title}</p>
                </a>
                <p id="pSub">{project.subtitle}</p>
                <div id="pInfo">
                    <a href={project.url} target="blank">
                        <img src={project.images[0]} id="pTop" />
                    </a>
                    <p id="pDescription">{project.description}</p>
                </div>
                {project.name != "about" && project.name != "mobileapps" ? (
                    <a href={project.url} id="pLinkTo">
                        Go to {project.title}
                    </a>
                ) : null}

                <div id="pImages">
                    {project.images.map((x, i) =>
                        i == 0 ? null : <img src={x} key={i} id="pImg" />
                    )}
                </div>
            </div>
        </div>
    );
}
