import http from "http";
import mysql from "mysql";
import open from "open";
let body = '';

function requestlistener(request, response) {

    if (request.method == "OPTIONS") {
        console.log("POST bekommen");
        console.log(request.method + " bekommen");
        response.writeHead(200);
        response.end();
    }
    else if (request.method == "POST") {
        console.log(request.method + " bekommen");

        request.on("data", chunk => {
            body += chunk // Daten werden zum Body hinzugefügt.
            console.log(body) 
            sql_Abfrage();
        });
    }

    request.on("end", () => {
        console.log(body + " am req.end")
    })

    function sql_Abfrage () {
        let ctv_DB = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "ctv_hacking_db"
        });

        ctv_DB.connect(function(err) {
            if (err) throw err;
            console.log("Verbindung hergestellt.")
        });

        ctv_DB.query(`SELECT Passwort FROM ctv_hacking_table WHERE User='admin';`, function(error, result) {
            console.log(result)
            if (error) throw error;
            let passwort = result[0].Passwort;
            console.log("Aus dem front-end kenne ich: " + body)
            console.log("Die Datenbank sagt: " + passwort)
            if (passwort === body) {
                console.log("Jaa Das passwort ist korrekt !")
                body = ''
            }
            else {
                console.log("Deine eingebe =! das passwort aus der DB")
                console.log("Deine eingabe: " + body)
                body = ''
            }
        })
    }
}

const Abfrage_Server = http.createServer(requestlistener);

Abfrage_Server.listen(8081);