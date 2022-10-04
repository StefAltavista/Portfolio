const nodemailer = require("nodemailer");

const receiver = require("./config.json").EMAIL_TO;
const sender = require("./config.json").EMAIL_FROM;
const pass = require("./config.json").EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: { user: sender, pass: pass },
});

const sendMessage = (message) => {
    return new Promise((resolve, reject) => {
        const options = {
            from: sender,
            to: receiver,
            subject: "MESSAGE FROM PORTFOLIO PAGE",
            html: message,
        };

        transporter.sendMail(options, function (e, info) {
            if (e) {
                console.log("ERROR Message NOT sent", e);
                reject({
                    e,
                    info,
                    result: ":/ sorry there was a probelem with the server. Please try again or use the direct contact link",
                });
            }

            resolve({
                e: null,
                result: "Message sent! Thanks for contacting me :) I will answer you as soon as possible. Stef",
            });
        });
    });
};

module.exports = {
    sendMessage,
};
