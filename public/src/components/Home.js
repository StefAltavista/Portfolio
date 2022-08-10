import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import PerlinNoise from "../P5/perlinNoise.js";
import ProjectPreview from "./ProjectPreview.js";
import NavBar from "./NavBar.js";
const projects = require("../../../content.json");

export default function Home() {
    console.log(projects);
    return (
        <>
            {" "}
            <div id="header">
                <div id="background">
                    <ReactP5Wrapper sketch={PerlinNoise} id="canvas" />
                </div>
                <div id="sam">
                    <h3>Stefano Altavista Mascitti</h3>
                    <p>
                        Continuous Creative Development <br></br> Full-Stack
                        engineer
                    </p>
                </div>
                <NavBar idn="navbar" />
            </div>
            <div id="board">
                {projects.map((x) => {
                    return <ProjectPreview project={x} key={x.name} />;
                })}
            </div>
        </>
    );
}
