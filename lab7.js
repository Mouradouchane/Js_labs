
function toHEX(dec = 0){
    if(isNaN(dec)){
        return "not a number";
    }
    let arr = [];
    let temp = dec;
    let stop = false;

    function writerHEXA(HEXA_ARRAY = [0]){
        hexaKEYS = [];
        for(let i = 0 ; i < 10 ; i+=1){
            hexaKEYS.push(i);
        }
        for(let i = 65 ; i < 65+6 ; i+=1){
            hexaKEYS.push(String.fromCharCode(i));
        }
    
        if(HEXA_ARRAY.length == 0 || HEXA_ARRAY == []){
            return "#0";
        }
        else{
            let HEXADECIMAL = "#";
            for(let i = 0 ; i < HEXA_ARRAY.length ; i +=1){
                if(HEXA_ARRAY[i] > 9){
                    
                    for(let c = 0 ; c < hexaKEYS.length ; c+=1){
                        if(HEXA_ARRAY[i] == hexaKEYS.indexOf(hexaKEYS[c])){
                            HEXADECIMAL += hexaKEYS[c];
                        }
                    }
    
                }
                else{
                    HEXADECIMAL += HEXA_ARRAY[i];
                }
            }
            return HEXADECIMAL;
        }
    }

    while(true){

        if(stop == true){
            return writerHEXA(arr.reverse());
        }
        if(temp <= 15){
            arr.push(temp);
            stop = true;
        }
        else if((temp%16) == 0){
            arr.push(0);
            temp = Math.floor(temp/16);
        }
        else if((temp%16) != 0){
            let vals = (temp/16).toString().split(".");
            let [nextVALUE , REMI] = vals;
            REMI = "0." + REMI;
            temp = Math.floor(Number.parseInt(nextVALUE));
            let REMINDER = (Number.parseFloat(REMI) * 16);
            arr.push(REMINDER);
        }
    }
}

function toBIN(dec = 0){
    if(isNaN(dec)){
        return "not a number";
    }
    let arr = [];
    let temp = Math.floor(dec);
    let stop = false;
    
    if(temp > 1){
        while(true){
            if(stop == true){
                return writer(arr.reverse());
            }
            if(temp < 2){
                stop = true;
            }
            if((temp%2) != 0){
                arr.push(1);
                temp = Math.floor(temp/2);
            }
            else{
                arr.push(0);
                temp = Math.floor(temp/2);
            }
        }
    }
    else{
        arr.push(temp);
        return writer(arr.reverse());
    }

    function writer(bin = [0]){
        let binSTR = "";
        for(let i = 0 ; i < bin.length ;i +=1){
            binSTR += bin[i];
        }
        binSTR = Number.parseInt(binSTR);
        return binSTR;
    }
}

function toOCT(dec = 0){
    // 0
    if(isNaN(dec)){
        return "not a number";
    }

    // 1
    let temp = dec;
    let OCT = [];
    let stop = false;

    function writer(oct = [0]){
        let OCTAL = oct.reduce((e,ev) => e = ""+e+ev);
        return OCTAL;
    }
    while(true){
        if(stop == true){
            OCT.reverse();
            return writer(OCT);
        }
        // 2
        if(temp < 8){
            OCT.push(temp);
            stop = true;
            OCT.reverse();
            return writer(OCT);
        }
        else {
            //3
            if((temp%8) == 0){
                OCT.push(0);
                temp = Math.floor(temp/8);
            }
            else if((temp%8) != 0){
                // 4
                let val = (temp/8).toString().split(".");
                let [, REMINDER] = val;
                let REMI = Number.parseFloat("0."+ REMINDER) * 8;
                OCT.push(REMI);
                temp = Math.floor(temp/8);
            }
        }
    }
}

// testing function 
function tester(){
    let randVAL = Math.floor(Math.random() * 2155);
    let bothOCT = Number.parseInt((randVAL).toString(8));
    let MyOCT = toOCT(randVAL);

    if(MyOCT != bothOCT){
        mistake +=1;
        console.warn("mistake : " + mistake);
    }
    console.log("\t value used is : " + randVAL);
    console.log(`MyOCT ${MyOCT}\t||\tbothOCT ${bothOCT}`);
}

// let mistake = 0;
// var interVal_test = setInterval(tester , 2000);

const inp_lab7 = inps[3];
const ARS_RSLT_lab7 = document.querySelectorAll(".valConvert_lab7");
const [hexPlace_lab7,octPlace_lab7,binPlace_lab7] = ARS_RSLT_lab7;

inp_lab7.onkeypress = (event) => {
    let val = inp_lab7.value.trim();
    function printERR(){
        let err = "invalid input value because using a forbidden value like : {float number , NAN , keywords , spaces , empty} !";
        hexPlace_lab7.textContent = err;
        octPlace_lab7.textContent = err;
        binPlace_lab7.textContent = err; 
    }
    // if user press enter
    if(event.keyCode == 13){
        // if empty or has space or has world 
        if(val.length == 0 || Anti_SPACE_REGEXP.test(val) == true || Anti_Numbers_REGEXP.test(val) == true){
            printERR();
        }
        else{
            hexPlace_lab7.textContent = toHEX(val);
            octPlace_lab7.textContent = toOCT(val);
            binPlace_lab7.textContent = toBIN(val);
        }   
    }
};

const Anti_Numbers_REGEXP = new RegExp("(\[A-z]{1,})","i");
const Anti_SPACE_REGEXP = new RegExp("( +)", "i");