let MitarbeiterID = document.getElementById("MitarbeiterID");
let passwort = document.getElementById("passwort");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    console.log(passwort.value);
    console.log(MitarbeiterID.value);
    window.alert("short pause");

        const JSONData = {
            ID: '"' + MitarbeiterID.value + '"',
            passwort: '"' + passwort.value + '"'
        };
        console.log(JSONData.toString);
    

fetch("http://localhost:1212/send-json", {
    method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(JSONData),
    })
    .then(response => response.json())
    .then(data => console.log("Value ist: ",data))
    .catch(error => console.error("Fehler:", error));
    window.alert(JSON.stringify(JSONData));
});