const fs = require('fs');
const { exec} = require("child_process");
var config = require('./test.json');
let PersonID = config.UserLogin[0].ID;
//console.log(config.UserLogin[0].ID);
console.log(PersonID);
var PersonIDsearch = PersonID.search;

//window.open("https://google.com/");

console.log("node works");

exec(`start cmd.exe /K "more no_access.txt"`);