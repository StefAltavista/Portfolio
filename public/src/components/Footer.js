import React from "react";
import Contact from "./Contact";
export default function Footer() {
    const socialMediaLogos = [
        "/images/socialMediaLogos/1.svg",
        "/images/socialMediaLogos/3.svg",
        "/images/socialMediaLogos/4.svg",
    ];
    return (
        <div id="footer">
            <Contact />
            <div id="social_media_contact">
                {socialMediaLogos.map((x, idx) => (
                    <div>
                        {" "}
                        <img
                            src={x}
                            key={idx}
                            alt="Stefano Altavista Web Developer"
                        />
                    </div>
                ))}
            </div>
            <h3>
                Build from scratch with React.js, Node.js, NoSql, P5.js and a
                lot of Passion!
            </h3>
            <p>Copirigt 2022 stefanoaltavista.com. All Rights Reserved.</p>
        </div>
    );
}
