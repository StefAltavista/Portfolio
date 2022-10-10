import React, { useState, useEffect } from "react";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const projects = require("../../../content.json");
    const [message, setMessage] = useState("");
    const newline = (x) => x.split("\n").map((str, i) => <p key={i}>{str}</p>);

    useEffect(() => {
        if (!navigator.userAgent.includes("Chrome")) {
            console.log(navigator.userAgent);

            if (!navigator.userAgent.includes("iPhone")) {
                setMessage(
                    `Dear visitor\nSafari does not fully support this website\n 
                    Please use a different browser to unlock more complex animations`
                );
                // alert(
                //     "Dear visitor \nPlease use a different browser to unlock complex animations"
                // );
            }
        }
    }, []);

    return (
        <div>
            <HashRouter>
                {message ? (
                    <div id="alert">
                        <p id="close" onClick={() => setMessage("")}>
                            X
                        </p>
                        <p>{newline(message)}</p>
                    </div>
                ) : null}
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    {projects.map((x) => (
                        <Route
                            exact
                            path={"/" + x.name}
                            element={<Project name={x.name} />}
                            key={"/" + x.name}
                        ></Route>
                    ))}
                    <Route exact path="/contact" element={<Contact />}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
}
