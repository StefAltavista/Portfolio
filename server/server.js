const path = require("path");
const express = require("express");
const { sendMessage } = require("./sendMessage");
const https = require("https");
const fs = require("fs");
const content = require("./content.json");
const app = express();

// const httpsServer = https.createServer(
//     {
//         key: fs.readFileSync(
//             "/etc/letsencrypt/live/softwarenoise.com/privkey.pem"
//         ),
//         cert: fs.readFileSync(
//             "/etc/letsencrypt/live/softwarenoise.com/fullchain.pem"
//         ),
//     },
//     app
// );

// app.use(express.static(path.join(__dirname, "../", "dist")));

app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());
app.get("/api/content", (req, res) => {
    if (req.headers.authorization == "FuckYouWhatAreYouEvenTryingToGet?") {
        res.json(content);
    } else res.json({ fuck: "you" });
});

app.get("/appultraviolet", (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname,
            "../",
            "../",
            "Ultraviolet",
            "dist",
            "index.html"
        )
    );
});
app.post("/api/contact", (req, res) => {
    if (req.headers.authorization == "FuckYouWhatAreYouEvenTryingToGet?") {
        const { message } = req.body;

        sendMessage(message)
            .then(({ e, info, result }) => {
                res.json({
                    e,
                    info,
                    result,
                });
            })
            .catch(({ e, info, result }) => {
                console.log("Server ERROR:", e);
                res.json({ e, info, result });
            });
    } else res.json({ e: "ERROR" });
});

app.set("port", process.env.PORT || 7001);

var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});

// httpsServer.listen(app.get("port"), function () {
//     console.log("listening on port ", server.address().port);
// });
