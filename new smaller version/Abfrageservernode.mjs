import http from "http";
import cors from "cors";
import mysql from "mysql"
let body = '';

function requestlistener(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 


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

        //ctv_DB.query("")
    }
}

const Abfrage_Server = http.createServer(requestlistener);

Abfrage_Server.listen(8080);