let Rechts_Click = document.getElementById("Rechts_Click");
let Links_Click = document.getElementById("Links_Click");
let Info_Div = document.getElementsByClassName("Info_Div");
let Seiten_Zahl = document.getElementById("Seiten_Zahl");
let Text_Div_1 = document.getElementById("Text_Div_1");
let Text_Div_2 = document.getElementById("Text_Div_2");
let Text_Div_3 = document.getElementById("Text_Div_3");
let Text_Div_4 = document.getElementById("Text_Div_4");
let Text_Div_5 = document.getElementById("Text_Div_5");
let InfoText = document.getElementsByClassName("InfoText")
let Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);


Links_Click.addEventListener("click", function() {
    Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
    console.log(Aktuelle_Seitenzahl);
    Seiten_Zahl.innerHTML = (parseInt(Seiten_Zahl.innerHTML) - 1);
    Load_Container();
});

Rechts_Click.addEventListener("click", function() {
    Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
    console.log(Aktuelle_Seitenzahl);
    Seiten_Zahl.innerHTML = (parseInt(Seiten_Zahl.innerHTML) + 1);
    Load_Container();
});

function Load_Container () {
    Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);

    Text_Div_2.style.visibility = "hidden";
    Text_Div_3.style.visibility = "hidden";
    Text_Div_1.style.visibility = "visible";
    Text_Div_4.style.visibility = "hidden";
    Text_Div_5.style.visibility = "hidden";

switch(Aktuelle_Seitenzahl) {
    case 1: Text_Div_1.style.visibility = "visible"; 
    start_Animation();
    break;
    case 2: Text_Div_2.style.visibility = "visible"; 
    start_Animation();
    break;
    case 3: Text_Div_3.style.visibility = "visible"; 
    start_Animation();
    break;
    case 4: Text_Div_4.style.visibility = "visible"; 
    start_Animation();
    break;
    case 5: Text_Div_5.style.visibility = "visible";
    start_Animation();
    break;
    default: break
    }
}

function start_Animation () {
    element.style.animation = 'none';
    void element.offsetWidth;
    setTimeout(function() {
        me.style.webkitAnimation = ''; // Animation zurücksetzen
        me.style.webkitAnimation = 'typing 5s steps(150) 1s 1 normal both'; // Animation neu starten
    }, 10); // Kurze Verzögerung, um den Reflow abzuwarten
}