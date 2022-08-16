import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import WaveComplex from "../P5/WaveComplex.js";
import WaveSimple from "../P5/WaveSimple.js";
import ProjectPreview from "./ProjectPreview.js";
import NavBar from "./NavBar.js";
const projects = require("../../../content.json");

export default function Home() {
    console.log(navigator.userAgent);

    return (
        <>
            {" "}
            <div id="header">
                <div id="background">
                    {" "}
                    {navigator.userAgent.includes("Chrome") ? (
                        <ReactP5Wrapper sketch={WaveComplex} id="canvas" />
                    ) : (
                        <>
                            <p
                                style={{
                                    fontSize: "8px",
                                    height: "5px",
                                    color: "white",
                                    textAlign: "right",
                                }}
                            >
                                Please use a different browser to unlock complex
                                animation
                            </p>
                            <ReactP5Wrapper sketch={WaveSimple} id="canvas" />
                        </>
                    )}
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
