
const inpArray_lab9 = document.querySelector(".inplab9");
const outREVArray_lab9 = ARS_RSLT_lab7[5];

inpArray_lab9.addEventListener("keypress" , (ev) => {
    let arrVAL = inpArray_lab9.value;
    if(ev.keyCode == 13){
        if(arrVAL.startsWith("[") && arrVAL.endsWith("]")){
            arrVAL = arrVAL.slice(1,arrVAL.length -1).split(",");
            console.log(arrVAL);
        }
        else{
            outREVArray_lab9.textContent = "invalid array syntax missing '[' or ']'";
        }
    }      
});

function ArrayRev(arr = []){
    if(arr.length < 0){
        return [];
    }

    if(Array.isArray(arr)){
        let revArr = [];
        let ct =0;
        for(let i = arr.length-1 ; i >= 0 ; i-=1){
            revArr[ct] = arr[i];
            ct+=1;
        }
        return revArr;
    }
}