let MitarbeiterID = document.getElementById("MitarbeiterID");
let passwort = document.getElementById("passwort");
let submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    console.log(passwort.value);
    console.log(MitarbeiterID.value);
    window.alert("short pause");

    const sendData = async () => {
        const JSONData = {
            passwort: passwort.value,
            ID: MitarbeiterID.value
        };
        console.log(JSONData)
    }

fetch("http://localhost:100", {
    method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({JSONData}),
    })
    .then(response => response.JSON())
    .then(data => console.log("Value ist: ",data))
    .catch(error => console.error("Fehler:", error));
});