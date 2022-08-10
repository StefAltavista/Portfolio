import React from "react";
import Home from "./Home";
import Project from "./Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>

                    <Route
                        exact
                        path="/noises"
                        element={<Project name="noises" />}
                    ></Route>

                    <Route
                        exact
                        path="/animatepetition"
                        element={<Project name="Animate Petition" />}
                    ></Route>
                    <Route
                        exact
                        path="/wrongimage"
                        element={<Project name="Wrong Image" />}
                    ></Route>
                    <Route
                        exact
                        path="/wrongimageboard"
                        element={<Project name="Wrong Image-Board" />}
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
            </BrowserRouter>
        </div>
    );
}
