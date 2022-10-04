const path = require("path");
const express = require("express");
const { sendMessage } = require("./sendMessage");
var app = express();
console.log("Back", process);
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/api/contact", (req, res) => {
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
});

app.set("port", process.env.PORT || 7001);

var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});
