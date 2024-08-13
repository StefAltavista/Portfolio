import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Contact from "./Contact";
import Home_projects from "./Home_projects.js";

export default function Home({ projects }) {
    const nameTitle = useRef();
    const nameSubTitle = useRef();
    const nameDescription = useRef();
    const sam = useRef();
    let typewriter_intro;
    let typewriter_contact;
    const techLogos = [
        "/images/techLogos/1.svg",
        "/images/techLogos/2.svg",
        "/images/techLogos/3.svg",
        "/images/techLogos/4.svg",
        "/images/techLogos/5.png",
        "/images/techLogos/6.svg",
        "/images/techLogos/7.svg",
        "/images/techLogos/8.svg",
        "/images/techLogos/9.svg",
        "/images/techLogos/10.svg",
        "/images/techLogos/11.webp",
        "/images/techLogos/12.svg",
        "/images/techLogos/13.svg",
        "/images/techLogos/14.svg",
        "/images/techLogos/15.svg",
        "/images/techLogos/16.svg",
        "/images/techLogos/17.svg",
        "/images/techLogos/18.svg",
        "/images/techLogos/19.svg",
        "/images/techLogos/20.svg",
        "/images/techLogos/21.webp",
        "/images/techLogos/22.jpg",
        "/images/techLogos/23.svg",
        "/images/techLogos/24.svg",
        "/images/techLogos/25.png",
        "/images/techLogos/26.svg",
    ];

    const scrollLeft = () => {
        const scrl = window.scrollY;
        sam.current.style.left = -parseFloat(scrl) + "px";
        sam.current.style.opacity = 1 - scrl / 800;

        if (scrl / 10 > 70) {
            typewriter_intro.start();
        } else typewriter_intro.stop();

        if (scrl / 10 > 140) {
            typewriter_contact.start();
        } else typewriter_contact.stop();
    };

    useEffect(() => {
        gsap.from(nameTitle.current, { opacity: 0, duration: 4, delay: 0 });
        gsap.from(nameSubTitle.current, { x: "100%", duration: 4, delay: 0 });
        gsap.from(nameDescription.current, {
            y: "1000%",
            duration: 4,
            delay: 0,
        });

        typewriter_intro = new Typewriter("#typeWriterText_intro", {
            delay: 40,
            deleteSpeed: 20,
            wrapperClassName: "small_courier",
            cursor: "",
        });
        typewriter_intro
            .typeString("Hi, ")
            .pauseFor(300)
            .pauseFor(200)
            .typeString(`I'm <p class="agraham">Stefano Altavista Mascitti</p>`)
            .pauseFor(800)
            .typeString(" a Web Developer based in Berlin (DE).")
            .pauseFor(800)
            .typeString(
                `<br/><br/> Welcome to my portfolio page! <br/> Here, you can explore a curated selection of my <p class="agraham">projects</p>.`
            );

        typewriter_contact = new Typewriter("#typeWriterText_contact", {
            delay: 40,
            deleteSpeed: 20,
            wrapperClassName: "small_courier",
            cursor: "",
        });
        typewriter_contact
            .typeString(
                `If you're interested in my <p class="agraham">services</p>, ranging from <p class="agraham"> Web </p>Design to Full Stack  <p class="agraham">development </p>`
            )
            .pauseFor(200)
            .typeString(
                `or if you would like to discuss potential collaborations `
            )
            .typeString(
                `please don't hesitate to  <a href="/contact" > <p class="agraham">contact me </p> </a> <br/>`
            )
            .typeString(
                `Companies seeking to hire can also <p class="agraham">request my CV</p> for further details.`
            );

        window.addEventListener("scroll", scrollLeft);
        return () => window.removeEventListener("scroll", scrollLeft);
    }, []);

    return (
        <>
            <div id="header">
                <div id="sam" ref={sam}>
                    <div id="nameTitle">
                        <Link to={`./about`}>
                            <div ref={nameTitle} id="nameTitleInline">
                                <h3 className="agraham">S . A . M .</h3>
                                <p ref={nameSubTitle} className="small_courier">
                                    Full Stack Developer & I.T. Specialist
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div id="nameSubTitle">
                        <p ref={nameDescription} className="agraham">
                            Crafting dynamic experiences for web and mobile
                            <br></br>
                            Blending creative insight with technical proficiency
                        </p>
                    </div>
                </div>
            </div>
            <div id="homeBody">
                <div className="home_about">
                    <div className="introText">
                        {projects && (
                            <img
                                src={projects[0].logo[0]}
                                id="home_about_img"
                            />
                        )}
                        <div
                            id="typeWriterText_intro"
                            className="typewriter"
                        ></div>
                    </div>
                </div>
                <Home_projects projects={projects} />

                <div className="home_about">
                    <div className="introText">
                        <div
                            id="typeWriterText_contact"
                            className="typewriter"
                        ></div>
                    </div>
                </div>
                <Contact />

                <div id="technologies">
                    <p className="agraham">
                        My constantly exapnding and evolving technology stack
                    </p>{" "}
                    <div>
                        {techLogos.map((x, idx) => (
                            <img
                                src={x}
                                key={idx}
                                alt="Stefano Altavista Web Developer"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
