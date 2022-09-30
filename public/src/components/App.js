import React from "react";
import Home from "./Home";
import Project from "./Project";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const projects = require("../../../content.json");
    if (!navigator.userAgent.includes("Chrome")) {
        console.log(navigator.userAgent);

        if (!navigator.userAgent.includes("iPhone")) {
            alert(
                "Dear visitor \nPlease use a different browser to unlock complex animations"
            );
        }
    }
    return (
        <div>
            <HashRouter>
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
                </Routes>
            </HashRouter>
        </div>
    );
}
