import React from "react";
import { Link } from "react-router-dom";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Glitches from "../P5/glitches.js";
import PerlinNoise from "../P5/perlinNoise.js";
const projects = require("../../../content.json");

export default function Home() {
    console.log(projects);
    return (
        <>
            <img src="../../images/background.png" />
            <h1>Stefano Altavista Mascitti</h1>
            <p>
                Continuous Creative Development <br></br> Full-Stack engineer
            </p>
            <div id="body">
                <ReactP5Wrapper sketch={PerlinNoise} id="canvas" />
            </div>
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
