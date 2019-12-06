
const divHEXARSLT_lab6 = document.querySelector("#hexaColorRSLT_lab6");
const spanHEXARLST_lab6 = document.querySelector("#hedaColorCODERSLT_lab6");
const generatorBTN_lab6 = document.querySelector("#generated_lab6");

function HexaGEN(){
    let HEXA = [];

    // add numbers 0 => 10
    for(let i = 0 ; i < 10 ; i+=1){
        HEXA.push(i);
    }
    // add hexa words a => f
    for(let i = 97 ; i <= 96+6 ; i+= 1){
        HEXA.push(String.fromCharCode(i));
    }

    let RANDOM_HEX = `#`;
    for(let i = 0 ; i < 6 ; i+=1){
        RANDOM_HEX += HEXA[Math.floor(Math.random() * HEXA.length)];
    }
    return RANDOM_HEX;
}

generatorBTN_lab6.onclick = () => {
    let HEX = HexaGEN();
    if(HEX.includes("undefined")){
        console.warn("undifined spoted");
    }
    divHEXARSLT_lab6.style.cssText = `background : ${HEX}`;
    spanHEXARLST_lab6.textContent = HEX;
}