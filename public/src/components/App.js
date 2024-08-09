import React, { useState, useEffect } from "react";
import Home from "./Home";
import Project from "./Project";
import Contact from "./Contact";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const [projects, setProjects] = useState();
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
            }
        }
        fetch("/api/content", {
            method: "GET",
            headers: { Authorization: "FuckYouWhatAreYouEvenTryingToGet?" },
        })
            .then((res) => res.json())
            .then((response) =>
                !response.fuck ? setProjects(response) : setProjects(null)
            );
    }, []);

    return (
        <div>
            <BrowserRouter>
                {message ? (
                    <div id="alert">
                        <p id="close" onClick={() => setMessage("")}>
                            X
                        </p>
                        <p>{newline(message)}</p>
                    </div>
                ) : null}
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home projects={projects ? projects : null} />}
                    ></Route>
                    {projects &&
                        projects.map((x) => (
                            <Route
                                exact
                                path={"/" + x.name}
                                element={
                                    <Project
                                        name={x.name}
                                        projects={projects ? projects : null}
                                    />
                                }
                                key={"/" + x.name}
                            ></Route>
                        ))}

                    <Route exact path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
