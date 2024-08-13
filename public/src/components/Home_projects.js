import React from "react";
import gsap from "gsap";

export default function Home_projects({ projects }) {
    const latestProj = [projects[0], projects[1], projects[2]];
    const creativeProj = [
        projects[projects.findIndex((x) => x.name == "ultraviolet")],
        projects[projects.findIndex((x) => x.name == "wrongimage")],
        projects[projects.findIndex((x) => x.name == "animate")],
    ];

    return (
        <div id="home_projects">
            <p className="agraham">Latest works</p>
            <div>
                {latestProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <img src={x.logo} />
                        </div>
                    </div>
                ))}
            </div>
            <p className="agraham">Creative Ventures</p>
            <div>
                {creativeProj.map((x, idx) => (
                    <div key={idx}>
                        <p>{x.title}</p>
                        <div>
                            <img src={x.logo} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
