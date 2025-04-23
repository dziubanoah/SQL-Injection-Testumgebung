let Passwort_Input = document.getElementById("Passwort_Input");
let Info_Button = document.getElementById("Info_Button");
let Anmelden = document.getElementById("Anmelden");
let Klartext_Passwort = document.getElementById("Klartext_Passwort");

Info_Button.addEventListener("click", function() {
    window.open("SQL_Info/SQL_Hilf.html");
});

Passwort_Input.addEventListener('input', function() {
    Klartext_Passwort.innerHTML = Passwort_Input.value;
})

Anmelden.addEventListener("click", function() {
    let Passwort_Wert = Passwort_Input.value;
    let Passwort_Value = sha256(Passwort_Wert);
    console.log(Passwort_Value)
    window.alert(Passwort_Value)
    fetch("http://localhost:8081", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain" 
        },
        body: Passwort_Value
    })
})
.then(response => response.text)
.then(data => console.log(data))
.catch(error => console.log(error));
console.log("die Payload ist " + Passwort_Value)

