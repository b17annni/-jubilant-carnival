// onclick function
function btnclick(){
    document.getElementById("try").innerHTML = wheel();
}

// function give random value from array
function wheel(){
    var rand = pnshArray[Math.floor(Math.random() * pnshArray.length)];
    return rand;
}

// array of punishment --
var pnshArray = [
    "crow", 
    "bag", 
    "triangle", 
    "mouth", 
    "horns", 
    "birb", 
    "bottle"

];