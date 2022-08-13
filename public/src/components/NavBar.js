import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ idn, css }) {
    const [proj, setProj] = useState(false);
    const projects = require("../../../content.json");
    const toggle = () => {
        setProj(!proj);
    };

    const bg = css.backgroundColor;
    const co = css.color;

    console.log(idn);
    return (
        <div id={idn} style={{ backgroundColor: bg }}>
            <Link to="/" style={{ color: co }}>
                <p>Home</p>{" "}
            </Link>

            <div id="menuProjects">
                <p onClick={toggle} style={{ color: co }}>
                    Projects
                </p>

                {proj ? (
                    <div
                        id="pList"
                        style={{
                            backgroundColor:
                                window.innerWidth < 800 ? co : null,
                            opacity: "80%",
                        }}
                    >
                        {projects.map((x) => {
                            return x.name == "about" ? null : (
                                <Link
                                    to={`/${x.name}`}
                                    key={x.name}
                                    style={{
                                        color:
                                            window.innerWidth < 800 ? bg : co,
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
                <p>About S.A.M.</p>{" "}
            </Link>
        </div>
    );
}
