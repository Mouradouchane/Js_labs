
const section_lab4 =  Sections[3];
const codeContent_lab4 = document.querySelector("#code");
const CopyBTN = document.querySelector("#BTNcopy");
const RSLT_lab4 = outs[2];

codeContent_lab4.value ="let array = ['this','is','array',1];";
codeContent_lab4.disabled = true;

CopyBTN.addEventListener("click", () => {

    Copy(codeContent_lab4,true);
    // try{
    //     codeContent_lab4.disabled = false;
    //     codeContent_lab4.select(); 
    //     document.execCommand("copy");
    //     RSLT_lab4.textContent = "success copy !";
    //     codeContent_lab4.disabled = true;
    // }
    // catch(error){
    //     console.error("error because :" + error);
    //     alert("error because : " + error);
    // }
    
});


function Copy(INP,disabled = true){
    try{
        if(disabled == true){
            INP.disabled = false;
            INP.select(); 
            document.execCommand("copy");
            INP.disabled = true;
        }
        else if(disabled == false){
            INP.disabled = false;
            INP.select(); 
            document.execCommand("copy");
    
        }
    }
    catch(error){
        return error;
    } 
}