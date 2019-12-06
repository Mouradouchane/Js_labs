
function toHEX(dec = 0){

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
    let BINvals = ["000","001","010","011","100","101","110","111"];
    let temp = dec.toString().split("");
    let OCT = [];
    if(temp < 8){
        let c = 0;
        while(true){
            if(temp == BINvals[c]){
                OCT.push(BINvals[c]);
                break;
            }
            c+=1;
        }
    }
    else{
        for(let i = 0 ; i < temp.length ; i += 1){
        let bin = toBIN(Number.parseInt(temp[i]));
        let c = 0;
        while(true){
            if(bin == BINvals[c]){
                OCT.push(BINvals[c]);
                break;
            }
            c+=1;
        }
    }
}
    return OCT;
}

// testing part
function tester(){
    let randVAL = Math.floor(Math.random() * 25);

    let bothBIN  = Number.parseInt((randVAL).toString(2));
    let MyBIN = toBIN(randVAL);

    if(MyBIN != bothBIN){
        mistake +=1;
        console.warn("mistake : " + mistake);
    }
    console.log(`MyBIN ${MyBIN}\t||\tbothBIN ${bothBIN}`);
}

let mistake = 0;
// var interVal_test = setInterval(tester , 2000);

