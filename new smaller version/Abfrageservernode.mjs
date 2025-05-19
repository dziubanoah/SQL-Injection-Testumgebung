import http, { request } from "http";
import mysql from "mysql";
import open from "open";
let port = 8082;
let body = '';

http.createServer(function(request, response) {
    console.log("Server läuft auf " + port)

    if (request.method == "OPTIONS") { //Vor der POST Anfrage kommt idr. eine Options Anfrage.
        console.log(request.method + " bekommen");
        response.writeHead(200); //bedeutet, die Anfrage & Antwort war korrekt / ohne Fehler.
        response.end();
    }
    else if (request.method == "POST") {
        console.log(request.method + " bekommen");
        response.writeHead(200);

        request.on("data", chunk => {
            body += chunk // Daten werden an "body" gehangen.
            console.log(body);
            sql_Abfrage(); //startet die funktion, damit die DB Verbindung bei einem POST hergestellt wird.
        });
    }

    request.on("end", () => {
        console.log(body + " am req.end")
    })

    function sql_Abfrage () {
        let ctv_DB = mysql.createConnection({ //Verbindungsconfig
            host: "localhost",
            user: "root",
            password: "",
            database: "ctv_hacking_db"
        });

        ctv_DB.connect(function(err) {
            if (err) throw err;
            console.log("Verbindung hergestellt.");
        });

        ctv_DB.query(`SELECT * FROM ctv_hacking_table WHERE User='admin' AND Passwort='${body}';`, function(error, result) {
            console.log(result)
            body = ''; //setzt body auf nichts, falls 2 Anfragen kommen, bleibt der wert in body nicht stehen.
            if (error) throw error;
            console.log(result + "ist das result.")
            console.log(result.length + "ist die result länge.");
            if (result.length > 0) { //die ANmeldung ist true, wenn mindestens ein Wert zurückkommt.
                open("http://localhost/phpmyadmin/");
            }
        })
    }
}).listen(port);