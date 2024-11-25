let MitarbeiterID = document.getElementById("MitarbeiterID");
let passwort = document.getElementById("passwort");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    console.log(passwort.value);
    console.log(MitarbeiterID.value);
    window.alert("short pause");
});

/*fetch("localhost:120" {
    method = "GET"


})
    */