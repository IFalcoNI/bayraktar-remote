const mqtt = require('mqtt');
let client = mqtt.connect("mqtt://test.mosquitto.org", 1883);
const express = require("express")
const path = require("path");
//
const app = express();
const port = process.env.PORT || 3000;
//

// Setting path for public directory
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

// Handling request
app.post("/", (req, res) => {
    text = req.body.cmd
    console.log(text);
})
app.post("/forward", (req, res) => {

    text = req.body.cmd
    client.publish('game/control', text)
    console.log("Message: " + text + ' sent');
})
app.post("/back", (req, res) => {

    text = req.body.cmd
    client.publish('game/control', text)
    console.log("Message: " + text + ' sent');
})
app.post("/left", (req, res) => {

    text = req.body.cmd
    client.publish('game/control', text)
    console.log("Message: " + text + ' sent');
})
app.post("/right", (req, res) => {

    text = req.body.cmd
    client.publish('game/control', text)
    console.log("Message: " + text + ' sent');
})
app.post("/fire", (req, res) => {

    text = req.body.cmd
    client.publish('game/control', text)
    console.log("Message: " + text + ' sent');
})

// Server Setup
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});





