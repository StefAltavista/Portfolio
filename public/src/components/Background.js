import React from "react";
import WaveComplex from "../P5/WaveComplex";
import WaveSimple from "../P5/WaveSimple";
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function Background() {
    return (
        <div id="background">
            {" "}
            {navigator.userAgent.includes("Chrome") ? (
                <ReactP5Wrapper sketch={WaveComplex} id="canvas" />
            ) : (
                <>
                    {navigator.userAgent.includes("iPhone") ||
                    navigator.userAgent.includes("Mozzilla") ? (
                        <ReactP5Wrapper sketch={WaveComplex} id="canvas" />
                    ) : (
                        <>
                            {" "}
                            <p
                                style={{
                                    fontSize: "8px",
                                    height: "5px",
                                    color: "white",
                                    textAlign: "right",
                                }}
                            >
                                Please use a different browser to unlock complex
                                animation
                            </p>
                            <ReactP5Wrapper sketch={WaveSimple} id="canvas" />
                        </>
                    )}
                </>
            )}
        </div>
    );
}
