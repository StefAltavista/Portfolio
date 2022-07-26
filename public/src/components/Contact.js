import React, { useState } from "react";
import Background from "./Background";
import NavBar from "./NavBar";

export default function () {
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState();

    const sendMessage = () => {
        const message =
            `<div><p>MESSAGE FROM PORTFOLIO PAGE</p>` +
            `<strong>From:</strong><br></br><p>${email}</p>` +
            `<strong>Object:</strong><p><br></br>${object}</p> ` +
            `<strong>Message:</strong><br></br><p>${content}</p> </div> `;

        fetch("/api/contact", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ message }),
        })
            .then((res) => res.json())
            .then(({ result }) => {
                console.log(result);
                setResult(result);
            });
    };
    return (
        <>
            <Background />
            <div id="contact">
                <div id="navBar">
                    <NavBar
                        options={{
                            home: true,
                            projectMenu: true,
                            projectMenuBG: false,
                            idn: "navBar",
                            css: {
                                backgroundColor: "transparent",
                                color: "rgb(141, 202, 255)",
                            },
                        }}
                    />
                </div>
                <div id="messageForm">
                    <h1>Contact S.A.M.</h1>
                    <form>
                        {!result ? (
                            <div>
                                <div className="field">
                                    <p>E-Mail address</p>
                                    <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className="field">
                                    <p>Object</p>
                                    <input
                                        type="text"
                                        name="Object"
                                        value={object}
                                        onChange={(e) =>
                                            setObject(e.target.value)
                                        }
                                    ></input>
                                </div>
                                <div className="field">
                                    <p>Message</p>
                                    <textarea
                                        name="message"
                                        value={content}
                                        onChange={(e) =>
                                            setContent(e.target.value)
                                        }
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        sendMessage(e);
                                    }}
                                >
                                    Send
                                </button>
                            </div>
                        ) : (
                            <p>{result}</p>
                        )}
                        <a href="mailto:altavista.stef@gmail.com">
                            Direct mail
                        </a>
                    </form>
                </div>
            </div>
        </>
    );
}
