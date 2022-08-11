import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { Link } from "react-router-dom";
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
                <NavBar
                    idn="navbar"
                    css={{
                        backgroundColor: "rgb(94, 83, 159)",
                        color: "rgb(141, 202, 255)",
                    }}
                />
            </div>
            <div id="board">
                {projects.map((x) => {
                    return <ProjectPreview project={x} key={x.name} />;
                })}
            </div>
        </>
    );
}
