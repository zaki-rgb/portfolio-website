// CALC PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
    resizeDisplayFont()
}

function clearDisplay(){
    display.value = "";
    resizeDisplayFont()
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    resizeDisplayFont()
}

function resizeDisplayFont() {
    const length = display.value.length;
    
    if (length > 12) {
        display.style.fontSize = "3rem";
    } else if (length > 8) {
        display.style.fontSize = "4rem";
    } else {
        display.style.fontSize = "5rem";
    }
}
