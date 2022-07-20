import React from "react";
import { Link } from "react-router-dom";
const projects = require("../../../content.json");

export default function Home() {
    console.log(projects);
    return (
        <>
            <img src="../../images/background.png" />
            <h1>Stefano Altavista Mascitti</h1>
            <p>
                I am a Creative, Evergrowing Technological being.<br></br>{" "}
                Digital Artist <br></br> Full-Stack Developper{" "}
            </p>

            <div id="board">
                {projects.map((x) => {
                    return (
                        <div id="project" key={x.name}>
                            {" "}
                            <Link to={`/${x.name}`}>
                                <p>{x.title}</p>
                                <image src={x.image} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
