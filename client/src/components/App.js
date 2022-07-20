import React from "react";
import Home from "./Home";
import ProjectPreview from "./ProjectPreview";
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
                        element={<ProjectPreview name="noises" />}
                    ></Route>

                    <Route
                        exact
                        path="/animatepetition"
                        element={<ProjectPreview name="Animate Petition" />}
                    ></Route>
                    <Route
                        exact
                        path="/wrongimage"
                        element={<ProjectPreview name="Wrong Image" />}
                    ></Route>
                    <Route
                        exact
                        path="/mobileapps"
                        element={<ProjectPreview name="mobileapps" />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
