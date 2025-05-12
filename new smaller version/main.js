let Passwort_Input = document.getElementById("Passwort_Input");
let Info_Button = document.getElementById("Info_Button");
let Anmelden = document.getElementById("Anmelden");
let Klartext_Passwort = document.getElementById("Klartext_Passwort");

Passwort_Input.addEventListener('input', function() { //Zeigt in dem Klartext_Passwort das Passwort im Klartext.
    Klartext_Passwort.innerHTML = Passwort_Input.value;
});

Info_Button.addEventListener("click", function() { //Öffnet die Hilfe Seite.
    window.open("SQL_Info/SQL_Hilf.html");
});

Anmelden.addEventListener("click", function() { //schickt den Wert aus dem Input Feld an den Node Server.
    let Passwort_Value = Passwort_Input.value;
    window.alert(Passwort_Value)
    fetch("http://localhost:8080", {
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
console.log("body ist " + Passwort_Value)