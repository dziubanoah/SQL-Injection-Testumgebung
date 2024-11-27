const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    passwort: "",
    database: "employee_test"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    let PersonID = 'Müll OR 1=1';
    let Passwort = 'nikhs OR 1=1';
    let SQL_Statement = "SELECT * FROM persons WHERE PersonID = " + PersonID + " AND PW = " + Passwort + ";";
    //console.log(SQL_Statement)
    con.query(SQL_Statement, function(err, result, fields) {
        if (err) throw err;
        //let ResultID = result[0].Name;
        let ResultID = result;
        console.log(ResultID)
        if ((ResultID = result[0].Name) === "Noah" | (ResultID = result[0].Name) === "Lukas"){
            console.log("result equals");
        }
        else {
            console.log("error");
        };
    });
});