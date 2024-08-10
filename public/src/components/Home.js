import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Typewriter from "typewriter-effect/dist/core";
import Footer from "./Footer.js";

export default function Home({ projects }) {
    const nameTitle = useRef();
    const nameSubTitle = useRef();
    const nameDescription = useRef();
    const typeWriterText = useRef();
    const sam = useRef();
    let typewriter;
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
            typewriter.start();
        } else typewriter.stop();
    };

    useEffect(() => {
        gsap.from(nameTitle.current, { opacity: 0, duration: 4, delay: 1 });
        gsap.from(nameSubTitle.current, { x: "-100%", duration: 4, delay: 1 });
        gsap.from(nameDescription.current, {
            y: "1000%",
            duration: 4,
            delay: 1,
        });

        typewriter = new Typewriter("#typeWriterText", {
            delay: 40,
            deleteSpeed: 20,
            wrapperClassName: "small_courier",
        });
        typewriter
            .typeString("Hi, ")
            .pauseFor(300)
            .pauseFor(200)
            .typeString("I'm <strong>Stefano Altavista Mascitti</strong>")
            .pauseFor(800)
            .typeString(" a Web Developer based in Berlin (DE).")
            .pauseFor(800)

            .typeString(
                "<br/><br/> Welcome to my portfolio page! <br/> Here, you can explore a curated selection of my projects. <br/>"
            )
            .pauseFor(800)

            .typeString(
                " <br/><br/> If you're interested in my <strong>services</strong>, ranging from Web Design to Full Stack development "
            )
            .pauseFor(200)
            .typeString(
                "or if you would like to discuss potential <strong>collaborations</strong>"
            )
            .typeString(
                `please don't hesitate to  <a href="/contact" > <strong>contact me </strong> </a> <br/>`
            )
            .typeString(
                "Companies seeking to hire can also request my CV for further details."
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
                            Blending creative insight with technical
                            proficiency. <br></br>
                            Crafting dynamic experiences for web and mobile
                        </p>
                    </div>
                </div>
            </div>
            <div id="home_about">
                <div id="intro">
                    {projects && (
                        <img src={projects[0].images[0]} id="home_about_img" />
                    )}
                    <div id="typeWriterText" ref={typeWriterText}></div>
                </div>
            </div>

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
            <Footer />
        </>
    );
}
