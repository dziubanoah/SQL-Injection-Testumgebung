let Rechts_Click = document.getElementById("Rechts_Click");
let Links_Click = document.getElementById("Links_Click");
let Info_Div = document.getElementsByClassName("Info_Div");
let Seiten_Zahl = document.getElementById("Seiten_Zahl");
let Text_Div_0 = document.getElementById("Text_Div_0");
let Text_Div_1 = document.getElementById("Text_Div_1");
let Text_Div_2 = document.getElementById("Text_Div_2");
let Text_Div_3 = document.getElementById("Text_Div_3");
let Text_Div_4 = document.getElementById("Text_Div_4");
let Text_Div_5 = document.getElementById("Text_Div_5");
let Text_Div_6 = document.getElementById("Text_Div_6");
let Text_Div_7 = document.getElementById("Text_Div_7");
let InfoText = document.getElementsByClassName("InfoText")
let Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
let InfoText_1 =  document.getElementById("InfoText_1");
let InfoText_2 = document.getElementById("InfoText_2");
let InfoText_3 = document.getElementById("InfoText_3");
let InfoText_4 = document.getElementById("InfoText_4");
let InfoText_5 = document.getElementById("InfoText_5");
let InfoText_6 = document.getElementById("InfoText_6");
let InfoText_7 = document.getElementById("InfoText_7");
let Schnipsel_1 = document.getElementById("Schnippsel_1");
let Schnipsel_2 = document.getElementById("Schnippsel_2");
let Schnipsel_3 = document.getElementById("Schnippsel_3");
let Schnipsel_4 = document.getElementById("Schnippsel_4");
let CheckSchnipsel = document.getElementById("CheckSchnippsel");
let Korrekter_Code = document.getElementById("Korrekter_Code");

Links_Click.onclick = click_btn_left();
Rechts_Click.onclick = click_btn_right();

function click_btn_left (){
    Links_Click.addEventListener("click", function() {
        Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
        console.log(Aktuelle_Seitenzahl);
        Seiten_Zahl.innerHTML = (parseInt(Seiten_Zahl.innerHTML) - 1);
        if (Aktuelle_Seitenzahl <= 1) {
            window.alert("diese Seite gibt es nicht.");
        }
        Load_Container();
    });
}
function click_btn_right () {
    Rechts_Click.addEventListener("click", function() {
        Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
        console.log(Aktuelle_Seitenzahl);
        Seiten_Zahl.innerHTML = (parseInt(Seiten_Zahl.innerHTML) + 1);
        if (Aktuelle_Seitenzahl >= 7) {
            window.alert("diese Seite gibt es nicht.");
        }
        Load_Container();
    });
}

function Load_Container () {
    Aktuelle_Seitenzahl = parseInt(Seiten_Zahl.innerHTML);
    Text_Div_0.style.visibility = "hidden";
    Text_Div_2.style.visibility = "hidden";
    Text_Div_3.style.visibility = "hidden";
    Text_Div_1.style.visibility = "hidden";
    Text_Div_4.style.visibility = "hidden";
    Text_Div_5.style.visibility = "hidden";
    Text_Div_6.style.visibility = "hidden";
    Text_Div_7.style.visibility = "hidden";

switch(Aktuelle_Seitenzahl) {
    case 0: Text_Div_0.style.visibility = "visible";
    break;
    case 1: Text_Div_1.style.visibility = "visible"; 
    start_Animation(InfoText_1);
    break;
    case 2: Text_Div_2.style.visibility = "visible"; 
    start_Animation(InfoText_2);
    break;
    case 3: Text_Div_3.style.visibility = "visible"; 
    start_Animation(InfoText_3);
    break;
    case 4: Text_Div_4.style.visibility = "visible"; 
    start_Animation(InfoText_4);
    break;
    case 5: Text_Div_5.style.visibility = "visible";
    start_Animation(InfoText_5);
    break;
    case 6: Text_Div_6.style.visibility = "visible";
    start_Animation(InfoText_6);
    break;
    case 7: Text_Div_7.style.visibility = "visible";
    start_Animation(InfoText_7);
    break;
    case 8: Text_Div_0.style.visibility = "visible";
    break;
    default: break
    }
}


function start_Animation(element) {
    // Animation stoppen und Reflow erzwingen
    element.style.animation = 'none';
    void element.offsetWidth;

    // Animation nach einer kurzen Verzögerung neu starten
    setTimeout(function() {
        element.style.animation = ''; // Entfernt die Animation-Eigenschaft
        element.style.animation = 'typing 5s steps(150) 1s 1 normal both'; // Animation neu starten
    }, 10); // Kurze Verzögerung
}

/*
Aufpassen. Die Animation NIE auf eine klasse anwenden, wenn es wiederholt werden soll. Die klasse wird ja logischerweise auf mehrere Obejkte gleichzeitig angewand....
dh. Beim wiederholen wird imme alles wiederholt oder es funktioniert erst garnicht. IMMER JEDEM TEXT EINE KLASSE GEBEN.
*/ 

//code für die Code Schnipsel:

CheckSchnipsel.addEventListener("click", function() {
    if (Schnipsel_1.value == "2" && Schnipsel_2.value == "1" && Schnipsel_3.value == "4" && Schnipsel_4.value == "3") {
        window.alert("Das ist Korrekt. Jetzt kannst du es im Admin Bereich Probieren.");
        Schnipsel_1.value = "0";
        Schnipsel_2.value = "0";
        Schnipsel_3.value = "0";
        Schnipsel_4.value = "0";
        Korrekter_Code.innerHTML = "Die korrekte Syntax ist: Pw' OR 1=1; -- "
    }
    else {
        window.alert("Das ist leider falsch.");
        Schnipsel_1.value = "0";
        Schnipsel_2.value = "0";
        Schnipsel_3.value = "0";
        Schnipsel_4.value = "0";
    }
});