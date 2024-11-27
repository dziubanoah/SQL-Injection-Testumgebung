const express = require('express');
const mysql = require("mysql");
const app = express();
const PORT = 1212;
const fs = require("fs");
const cors = require('cors');
const { exec} = require("child_process");
//const json_values = require("./write.json");
app.use(cors());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    passwort: "",
    database: "employee_test"
});

app.use(express.json());

app.post("/send-json", (req, res) => {
    const JSONData = req.body;
    console.log(JSONData, "ist da");
    let JSONData_ID = JSONData.ID;
    let JSONData_ID_first_Value = JSONData.ID[0];
    console.log(JSONData_ID, JSONData_ID_first_Value);
    fs.writeFile("write.json", JSON.stringify(JSONData, null, 2), (err) => {
        if (err) {
            console.error("Fehler beim beschreiben der Datei", err);
            return res.status(500).send("Fehler beim schreiben der Datei. ");
        }
        console.log("Daten wurden erfolgreich in write.txt geschrieben")
        
        res.status(200).send("Daten erfolgreich gespeichert")
    });
        if (JSONData_ID.length >= 1) {
        con.connect(function(err) {
            if (err) throw err;
            console.log("connected");
            PersonID = JSONData.ID;
            Passwort = JSONData.passwort;
            console.log("SELECT PersonID, PW FROM persons WHERE PersonID=" + PersonID + " AND PW=" + Passwort + ";");
            con.query("SELECT PersonID, PW FROM persons WHERE PersonID=" + PersonID + " AND PW=" + Passwort + ";", function(err, result, fields) {
                if (err) throw err;
                console.log(result[0].PersonID);
                if (result.length > 0 && result[0].PersonID == "2005"){
                console.log("result equals Noah");
                exec(`start cmd.exe /K "color a && more finish.txt && cd C:/xampp/mysql/bin && mysql.exe -u root"`)
                }
                else {
                    console.log("error");
                    };
                });
            });
        }else{
            console.log("Weniger als eine value, zugriff nicht gewährt");
        };
    });
    app.listen(PORT, () => {
        console.log('Server läuft auf http://localhost:4567')
    })
