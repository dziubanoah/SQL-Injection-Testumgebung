var mysql = require("mysql");

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
        console.log(result.length)
        if (result.length > 0 && result[0].Name == "Noah"){
            console.log("result equals Noah");
        }
        else {
            console.log("error");
        };
    });
});