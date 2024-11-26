const express = require('express');
const mysql = require("mysql");
const app = express();
const PORT = 100;
const fs = require("fs");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    passwort: "",
    database: "employee_test"
});

app.use(express.json());

app.post("/send-json", (req, res) => {
    const JSONData  =req.body;
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
    console.log('Server läuft auf http://localhsot:100')
})


con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    let PersonID = "2005";
    con.query("SELECT Name FROM persons WHERE PersonID=" + PersonID + ";", function(err, result, fields) {
        if (err) throw err;
        if (result.length > 0 && result[0].Name == "Noah"){
            console.log("result equals Noah");
            console.log(DatabaseValue)
        }
        else {
            console.log("error");
        };
    });
});

 
