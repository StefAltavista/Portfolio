import React from "react";
import { Link } from "react-router-dom";
export default function ProjectPreview({ project }) {
    return (
        <>
            <Link to={`./${project.name}`}>
                <div
                    id="projectPreview"
                    style={{
                        backgroundColor: project.background,
                        color: project.color,
                    }}
                >
                    <div id="head">
                        <h3>{project.title}</h3>
                    </div>

                    <img src={project.images[0]} id="projLogo" />
                    <p>{project.subtitle}</p>
                </div>
            </Link>
        </>
    );
}
