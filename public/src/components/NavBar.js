import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ options }) {
    const { idn, css, projectMenu, projectMenuBG } = options;
    const [proj, setProj] = useState(projectMenu);
    const projects = require("../../../content.json");
    const projMenu = useRef();
    const toggle = () => {
        setProj(!proj);
    };

    const bg = css.backgroundColor;
    const co = css.color;

    console.log(idn);
    return (
        <div id={idn} style={{ background: bg, letterSpacing: "2px" }}>
            {options.home ? (
                <>
                    <Link to="/" style={{ color: co }}>
                        <p>Home</p>{" "}
                    </Link>
                </>
            ) : (
                <>
                    <p
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Stefano<br></br>Altavista<br></br>Mascitti<br></br>
                    </p>
                </>
            )}
            <div id="menuProjects">
                <p onClick={toggle} style={{ color: co }}>
                    Projects
                </p>

                {proj ? (
                    <div
                        id="pList"
                        style={
                            projectMenuBG
                                ? { background: bg }
                                : { background: "rgb(0,0,0,0)" }
                        }
                        ref={projMenu}
                    >
                        {projects.map((x) => {
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
        </div>
    );
}
