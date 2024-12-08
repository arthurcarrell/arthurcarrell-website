let programString = "";
let blockedCodes = [0,1,2,3,4,5,6,7,8,9,10,,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function updateProgramString() {
    let currentLine = 1;
    let textHTML = document.getElementById("text").textContent;
    let finalString = "";
    programString.split("-").forEach(line => {
        finalString += `<div id=line${currentLine}>${line}</div>\n`;
        currentLine++
    });
    document.getElementById("text").innerHTML = finalString;
}

function keyPressed(key) {
    keycode = key.keyCode;
    char = String.fromCharCode(keycode);
    
    if (keycode == 8){programString = programString.substring(0,programString.length-1);updateProgramString();}
    if (keycode == 13){programString += "-"} // '-' represents new line
    if (blockedCodes.includes(keycode)) {return;}
    programString += char;
    updateProgramString();
}
addEventListener("keydown",keyPressed);

