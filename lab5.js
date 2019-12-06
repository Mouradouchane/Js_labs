
const CSV = "John,Doe,120 jefferson st.,Riverside, NJ, 08075";

const CVS_Content_lab5 = document.querySelector("#csvContent");
const converted_Content_lab5 = document.querySelector("#convertedContent");
const BTN_convert_lab5 = document.querySelector("#BTNconv_lab5");

BTN_convert_lab5.onclick = () => {
    // call function converted CSV to 2D Array
    let arr = to2DARR(CVS_Content_lab5.value);
    // print result CSV
    printRSLT(converted_Content_lab5,arr);

}

function to2DARR(cont){
    let val = cont.split(",");
    let AR2D = [];

    for(let i = 1 ; i < val.length ; i+=2){
        if(val[i-1].includes("\n")){
            val[i-1] = val[i-1].replace("\n","");
        }
        if(val[i].includes("\n")){
            val[i] = val[i].replace("\n","");
        }
        AR2D.push([val[i-1],val[i]]);
        
    }

    return AR2D;
}

function printRSLT(where,ARR2D){
    where.textContent = `${ARR2D.toSource()}`;
}
