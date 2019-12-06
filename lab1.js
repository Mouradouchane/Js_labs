// array of all I/O
const inps = document.querySelectorAll(".inps");
const outs = document.querySelectorAll(".outs");

inps[0].addEventListener("keypress", (event) => {
    // if prees enter in keyboard
    if(event.keyCode == 13){
     outVALS = detectedFormat_lab_1(inps[0].value);
        //if empty
        if(inps[0].value == "" || inps[0].value == " "){
            outs[0].textContent = "invalid or empty filed text try again";
        }
        else if(outVALS.length <= 0 || outVALS == undefined || outVALS == null){
            outs[0].textContent = "invalid format/s";
        }
        else{
            outs[0].textContent = outVALS.toString();
        }
    }
});

function detectedFormat_lab_1(vl){
    let REG = new RegExp("([\W{1,}\.\W{1,}])|([\W{1,}\.\W{1,}\.\W{1,}])","im");
    let vls = vl.split(" ");

    let Format = [];

    for(let i = 0; i <= vls.length ; i++){
        if(REG.test(vls[i]) == true){
            let frmt = vls[i].split(".");

            for(let c = 1 ; c < frmt.length ; c+=1){
                Format.push(frmt[c]);
            }
        }
    }

    return Format;
}