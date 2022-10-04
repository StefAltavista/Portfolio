import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Background from "./Background";

const projects = require("../../../content.json");

export default function Project({ name }) {
    console.log("PROJ", name);
    const project = projects.find((x) => x.name == name);
    const newline = (x) => x.split("\n").map((str, i) => <p key={i}>{str}</p>);
    console.log(project.tech);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [useLocation()]);

    return (
        <>
            {" "}
            <Background />
            <div id="project">
                <NavBar
                    options={{
                        home: true,
                        projectMenu: false,
                        projectMenuBG: true,
                        idn: "appear",
                        css: {
                            backgroundColor: project.background,
                            color: project.color,
                        },
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
                        <div id="pDescription">
                            {newline(project.description)}
                        </div>
                        <div id="tech">{newline(project.tech)}</div>
                        <div id="dev">{newline(project.development)}</div>{" "}
                    </div>
                    <div id="links">
                        {project.name != "about" &&
                        project.name != "mobileapps" ? (
                            <a href={project.url} id="pLinkTo">
                                Visit Website
                            </a>
                        ) : null}
                        <a href={project.gitHub} id="pLinkTo">
                            Visit GitHub
                        </a>
                    </div>

                    <div id="pImages">
                        {project.images.map((x, i) =>
                            i == 0 ? null : <img src={x} key={i} id="pImg" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
