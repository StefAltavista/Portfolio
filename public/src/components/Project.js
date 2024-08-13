import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Project({ name, projects }) {
    const project = projects.find((x) => x.name == name);
    const location = useLocation().pathname;
    const newline = (x) => x.split("\n").map((str, i) => <p key={i}>{str}</p>);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <div id="project">
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
                            <img src={project.logo} id="pTop" />
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
                            <a href={project.url} id="pLinkTo" target="_blank">
                                Visit Website
                            </a>
                        ) : null}
                        {project.name == "about" && (
                            <Link to="/contact">Request CV</Link>
                        )}
                        <a href={project.gitHub} id="pLinkTo" target="_blank">
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
