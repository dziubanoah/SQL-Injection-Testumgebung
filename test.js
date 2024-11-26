const express = require('express');
const mysql = require("mysql");
const app = express();
const PORT = 4567;
const fs = require("fs");

app.use(express.json());

app.post("/send-json", (req, res) => {
    const JSONData = req.body;
    console.log(JSONData + "ist da")
    fs.writeFile("JSON.txt", JSON.stringify(JSONData, null, 2), (err) => {
        if (err) {
            console.error("Fehler beim beschreiben der Datei", err);
            return res.status(500).send("Fehler beim schreiben der Datei. ");
        }
        console.log("Daten wurden erfolgreich in test.txt geschrieben")
        res.status(200).send("Daten erfolgreich gespeichert")
    });
});
app.listen(PORT, () => {
    console.log('Server läuft auf http://localhost:100')
})