let Passwort_Input = document.getElementById("Passwort_Input");
let Info_Button = document.getElementById("Info_Button");
let Anmelden = document.getElementById("Anmelden");


Info_Button.addEventListener("click", function() {
    window.open("SQL_Info/SQL_Hilf.html");
});

Anmelden.addEventListener("click", function() {
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
console.log("die Payload ist " + Passwort_Value)