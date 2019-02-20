const FULL = 10000;
var feedOptions = [["Grass (50)",50], ["Kibble (500)",500], ["Carrots (150)",150], ["Kale (250)",250]];
feedCurrent = feedOptions[0][0];
var feedlen = feedOptions.length;
var i = 0;

var hunger = FULL;

function nameChange() {
    let name = prompt('What will you name your pet?');
    document.getElementById("name").innerHTML = name;
}

var living = setInterval(entropy, 1000);
function entropy() {
    hunger = hunger - 250;
    if(hunger <= 0) {
        document.getElementById("status").innerHTML = "DEAD";
        document.getElementById("btnF").disabled = true;
        document.getElementById("btnCF").disabled = true;
        clearInterval(living);

    }
    else{
    document.getElementById("status").innerHTML = hunger;}

}

function feedChange() {
    if(i+1 == feedlen) {
        i=0; 
        feedCurrent = feedOptions[i][0]}
    else if(feedCurrent = feedOptions[i][0]) {   
        i++;
        feedCurrent = feedOptions[i][0];}
    document.getElementById("feed").innerHTML = feedCurrent;
}

function feedEm(){
    hunger = hunger + feedOptions[i][1];
    if(hunger>FULL) {
        hunger = FULL;
        document.getElementById("status").innerHTML = "FULL";
    }
    else{document.getElementById("status").innerHTML = hunger;}
}

