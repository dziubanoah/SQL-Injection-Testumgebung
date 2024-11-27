const fs = require('fs');
var config = require('./test.json');
let PersonID = config.UserLogin[0].ID;
//console.log(config.UserLogin[0].ID);
console.log(PersonID);