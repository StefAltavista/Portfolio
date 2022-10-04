const nodemailer = require("nodemailer");
let EMAIL_TO;
let EMAIL_FROM;

if (process.env.NODE_ENV == "production") {
    EMAIL_TO = process.env.SESSION_SECRET;
    EMAIL_FROM = process.env.SESSION_SECRET;
    EMAIL_PASS = process.env.SESSION_SECRET;
} else {
    EMAIL_TO = require("./config.json").EMAIL_TO;
    EMAIL_FROM = require("./config.json").EMAIL_FROM;
    EMAIL_PASS = require("./config.json").EMAIL_PASS;
}
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: { user: EMAIL_FROM, pass: EMAIL_PASS },
});

const sendMessage = (message) => {
    return new Promise((resolve, reject) => {
        const options = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
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
