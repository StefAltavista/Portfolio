import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Background from "./Background.js";
import ProjectPreview from "./ProjectPreview.js";
import NavBar from "./NavBar.js";

const projects = require("../../../content.json");

export default function Home() {
    const nameTitle = useRef();
    const nameSubTitle = useRef();
    const sam = useRef();
    const navBarScroll = useRef();

    const scrollLeft = () => {
        const scr = window.scrollY;
        sam.current.style.left = -parseFloat(scr) + "px";
        sam.current.style.opacity = 1 - scr / 800;

        // navBarScroll.current.style.opacity = scr / 800;
        scr / 10 < 30
            ? ((navBarScroll.current.style.left = -30 + scr / 10 + "%"),
              (navBarScroll.current.style.opacity = scr / 100))
            : ((navBarScroll.current.style.left = "0%"),
              (navBarScroll.current.style.opacity = 1));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.from(nameTitle.current, { opacity: 0, duration: 4 });
        gsap.from(nameSubTitle.current, { x: "-100%", duration: 4 });

        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return (
        <>
            <div id="header">
                <Background />

                <div id="sam" ref={sam}>
                    <div>
                        <Link to={`./about`}>
                            <h3 ref={nameTitle}>Stefano Altavista Mascitti</h3>
                        </Link>
                    </div>
                    <p ref={nameSubTitle}>
                        Continuous Creative Development <br></br> Full-Stack
                        engineer
                    </p>
                </div>
                <div ref={navBarScroll} id="navBarScroll">
                    <NavBar
                        options={{
                            home: false,
                            projectMenu: true,
                            projectMenuBG: false,
                            idn: "navBar",
                            css: {
                                backgroundColor: "transparent",
                                color: "rgb(141, 202, 255)",
                            },
                        }}
                    />
                </div>
            </div>
            <div id="board">
                {projects.map((x) => {
                    return <ProjectPreview project={x} key={x.name} />;
                })}
            </div>
        </>
    );
}
