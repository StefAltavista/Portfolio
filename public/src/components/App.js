import React from "react";
import Home from "./Home";
import Project from "./Project";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
    if (!navigator.userAgent.includes("Chrome")) {
        alert(
            "Welcome! \nPlease use a different browser to unlock complex animation"
        );
    }
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>

                    <Route
                        exact
                        path="/noises"
                        element={<Project name="noises" />}
                    ></Route>

                    <Route
                        exact
                        path="/animate"
                        element={<Project name="animate" />}
                    ></Route>
                    <Route
                        exact
                        path="/wrongimage"
                        element={<Project name="wrongimage" />}
                    ></Route>
                    <Route
                        exact
                        path="/wrongimageboard"
                        element={<Project name="wrongimageboard" />}
                    ></Route>
                    <Route
                        exact
                        path="/mobileapps"
                        element={<Project name="mobileapps" />}
                    ></Route>
                    <Route
                        exact
                        path="/about"
                        element={<Project name="about" />}
                    ></Route>
                </Routes>
            </HashRouter>
        </div>
    );
}
