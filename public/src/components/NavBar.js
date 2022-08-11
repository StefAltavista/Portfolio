import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ idn, css }) {
    const [projects, setProjects] = useState(false);
    const toggle = () => {
        setProjects(!projects);
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

                {projects ? (
                    <div id="pList">
                        <Link to="/noises" style={{ color: co }}>
                            <p>Noises</p>{" "}
                        </Link>
                        <Link to="/wrongimage" style={{ color: co }}>
                            <p>Wrong Image</p>{" "}
                        </Link>
                        <Link to="/wrongimageboard" style={{ color: co }}>
                            <p>Wrong Image-Board</p>{" "}
                        </Link>
                        <Link to="/animatepetition" style={{ color: co }}>
                            <p>Animate</p>{" "}
                        </Link>
                        <Link to="/mobileapps" style={{ color: co }}>
                            <p>Mobile Apps</p>{" "}
                        </Link>
                    </div>
                ) : null}
            </div>
            <Link to="/about" style={{ color: co }}>
                <p>About S.A.M.</p>{" "}
            </Link>
        </div>
    );
}
