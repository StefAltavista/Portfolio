import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    const socialMediaLogos = [
        "/images/socialMediaLogos/1.svg",
        "/images/socialMediaLogos/2.svg",
        "/images/socialMediaLogos/3.svg",
    ];
    return (
        <div id="footer">
            <div id="footer_contact" className="footer_section">
                <Link to="/contact">Contact</Link>
                {socialMediaLogos.map((x, idx) => (
                    <div key={idx}>
                        {" "}
                        <img src={x} alt="Stefano Altavista Web Developer" />
                    </div>
                ))}
            </div>
            <div id="footer_sitemap" className="footer_section">
                <p>Sitemap</p>
            </div>
            <div id="footer_disclaimer" className="footer_section">
                <p>
                    This website does not collect any data and does not utilize
                    any cookie! your privacy is safe.
                </p>
                <p>
                    {" "}
                    Build from scratch with React.js, Node.js, NoSql, P5.js and
                    a lot of Passion!
                </p>
                <p>Copiright 2022 stefanoaltavista.com. All Rights Reserved.</p>
            </div>
        </div>
    );
}
