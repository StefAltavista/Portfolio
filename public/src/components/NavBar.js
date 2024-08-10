import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar(props) {
    const { projects } = props;
    const [proj, setProj] = useState(false);
    const [bg, setBg] = useState("rgb(0, 0, 0,0)");
    const [co, setCo] = useState("rgb(141, 202, 255)");

    const location = useLocation().pathname;
    const projMenu = useRef();
    const navBarScroll = useRef();
    const toggle = () => {
        console.log("toggle");
        setProj(!proj);
    };

    const scrollLeft = () => {
        const scrl = window.scrollY;
        scrl / 10 < 30
            ? ((navBarScroll.current.style.left = -30 + scrl / 10 + "%"),
              (navBarScroll.current.style.opacity = scrl / 100))
            : ((navBarScroll.current.style.left = "0%"),
              (navBarScroll.current.style.opacity = 1));
    };

    useEffect(() => {
        if (projects && location != "/" && location != "/contact") {
            console.log("Projects", projects);
            const currentProj = projects.find(
                (x) => x.name == location.replace("/", "")
            );
            console.log("navbar read current Project:", currentProj);
            setBg(currentProj.background);
            setCo(currentProj.color);
        }

        if (location === "/") {
            window.addEventListener("scroll", scrollLeft);
            scrollLeft();
        }
        return () => window.removeEventListener("scroll", scrollLeft);
    }, [location]);
    return (
        <div
            className={location === "/" ? "offScreenNavBar" : "onScreenNavBar"}
            id={location === "/" ? "navBarScroll" : "navBarFixed"}
            style={{ background: bg, letterSpacing: "2px" }}
            ref={navBarScroll}
        >
            {location == "/" ? (
                <>
                    <p
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Stefano<br></br>Altavista<br></br>Mascitti<br></br>
                    </p>
                </>
            ) : (
                <>
                    <Link to="/" style={{ color: co }}>
                        <p>Home</p>{" "}
                    </Link>
                </>
            )}
            <div id="menuProjects">
                <p onClick={toggle} style={{ color: co }}>
                    Projects
                </p>

                {proj ? (
                    <div id="pList" ref={projMenu}>
                        {projects &&
                            projects.map((x) => {
                                return x.name == "about" ? null : (
                                    <Link
                                        to={`/${x.name}`}
                                        key={x.name}
                                        style={{
                                            color: co,
                                        }}
                                    >
                                        <p
                                            onClick={() => {
                                                if (window.innerWidth < 800) {
                                                    toggle();
                                                }
                                            }}
                                        >
                                            {x.title}
                                        </p>
                                    </Link>
                                );
                            })}
                    </div>
                ) : null}
            </div>
            <Link to="/about" style={{ color: co }}>
                <p>About</p>{" "}
            </Link>
            <Link to="/contact" style={{ color: co }}>
                <p>Contact</p>{" "}
            </Link>
        </div>
    );
}
