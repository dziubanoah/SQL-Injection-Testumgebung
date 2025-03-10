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

        ctv_DB.query(`SELECT * FROM ctv_hacking_table WHERE User='admin' AND Passwort='${body}';`, function(error, result) {
            body = '';
            if (error) throw error;
            console.log(result.length);
            if (result.length > 0) {
                open("http://localhost/phpmyadmin/");
            }
        })
    }
}

const Abfrage_Server = http.createServer(requestlistener);

Abfrage_Server.listen(8080);