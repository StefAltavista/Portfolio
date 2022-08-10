import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ idn }) {
    const [projects, setProjects] = useState(false);
    const toggle = () => {
        setProjects(!projects);
    };
    console.log(idn);
    return (
        <div id={idn}>
            <Link to="/">
                <p>Home</p>{" "}
            </Link>

            <div id="menuProjects">
                <p onClick={toggle}>Projects</p>

                {projects ? (
                    <div>
                        <Link to="/noises">
                            <p>Noises</p>{" "}
                        </Link>
                        <Link to="/wrongimage">
                            <p>Wrong Image</p>{" "}
                        </Link>
                        <Link to="/wrongimageboard">
                            <p>Wrong Image-Board</p>{" "}
                        </Link>
                        <Link to="/animatepetition">
                            <p>Animate</p>{" "}
                        </Link>
                        <Link to="/mobileapps">
                            <p>Mobile Apps</p>{" "}
                        </Link>
                    </div>
                ) : null}
            </div>
            <Link to="/about">
                <p>About S.A.M.</p>{" "}
            </Link>
        </div>
    );
}
