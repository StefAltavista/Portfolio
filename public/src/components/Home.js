import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import Background from "./Background.js";
import ProjectPreview from "./ProjectPreview.js";
import NavBar from "./NavBar.js";

export default function Home({ projects }) {
    const nameTitle = useRef();
    const nameSubTitle = useRef();
    const nameDescription = useRef();
    const sam = useRef();
    const navBarScroll = useRef();

    const scrollLeft = () => {
        const scr = window.scrollY;
        sam.current.style.left = -parseFloat(scr) + "px";
        sam.current.style.opacity = 1 - scr / 800;
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
        gsap.from(nameDescription.current, { y: "1000%", duration: 4 });

        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return (
        <>
            <div id="header">
                <Background />

                <div id="sam" ref={sam}>
                    <div id="nameTitle">
                        <Link to={`./about`}>
                            <h3 ref={nameTitle}>Stefano Altavista Mascitti</h3>
                            <p ref={nameTitle}>
                                Full Stack Developer & I.T. Specialist
                            </p>
                        </Link>
                    </div>
                    <div id="nameSubTitle">
                        <p ref={nameSubTitle}>
                            Continuous Creative Constructions
                        </p>
                        <p ref={nameDescription}>
                            Blending creative insight with technical
                            proficiency. <br></br>
                            Crafting dynamic experiences for web and mobile
                        </p>
                    </div>
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
                        projects={projects ? projects : null}
                    />
                </div>
            </div>
            <div id="board">
                {projects &&
                    projects.map((x) => {
                        return <ProjectPreview project={x} key={x.name} />;
                    })}
            </div>
        </>
    );
}
