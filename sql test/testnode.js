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
    let PersonID = "2005";
    con.query("SELECT Name FROM persons WHERE PersonID=" + PersonID + ";", function(err, result, fields) {
        if (err) throw err;
        let ResultID = result[0].Name;
        console.log(ResultID)
        if (ResultID = "Noah"){
            console.log("result equals Noah");
        }
        else {
            console.log("error");
        };
    });
});