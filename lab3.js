
// just a foucs background & "prev def"
const foucsBackground_lab3 = document.querySelector(".option-foucs");
// option div "full option"
const optionDOC_lab3 = document.querySelector("#add_doc");
const optionDOCBtns_lab3 = document.querySelectorAll(".option-btn");
const [OpDOCBTN_add,OpDOCBTN_back,EDITBTN_save,EDITBTN_back] = optionDOCBtns_lab3;
const inpOption_lab3 = document.querySelector(".option-inps");

// selection full lab 3
const section_lab3 = Sections[2];
const UL_lab3 = section_lab3.querySelector("ul");
const selection_lab3 = section_lab3.querySelector("select");
// botton add doc/s
const btnAddDoc_lab3 = section_lab3.querySelector(".btns");

let editDoc = section_lab3.querySelector("#edit_doc");
let EDITinp = editDoc.querySelector(".option-inps");
let EDITtype = editDoc.querySelector("select");

// when click on add doc btn
btnAddDoc_lab3.onclick = function(){
    foucsBackground_lab3.style.cssText = "display : block;";
    optionDOC_lab3.style.cssText = "display : block;";
}

// when click on back btn
OpDOCBTN_back.onclick = function(){
    foucsBackground_lab3.style.cssText = "display : none;";
    optionDOC_lab3.style.cssText = "display : none;";
}

// when click on add btn
let cot = 0;
OpDOCBTN_add.onclick = function(){
        let docVAL = inpOption_lab3.value;
        let docTP = selection_lab3.value
    if(docVAL.trim() == " " || docVAL == ""){
        console.warn("empty filed or invalid name");
    }
    else{
        new doc_ADD_lab3(docVAL,docTP,cot).print_to_user();
        cot+=1;
    }
}


function doc_ADD_lab3(docName,docType = "file",ID){
    this.ID = `XRG${ID}`;
    this.DEL = `XDELG${ID}`;
    this.EDIT = `XEDIT${ID}`;
    this.docName = docName;
    this.docType = docType;
    this.print_to_user = () => {
        UL_lab3.insertAdjacentHTML("beforeend",`<li id="${this.ID}"> <img src="./file.png"> <p id=${this.EDIT}> ${this.docName} </p>  
        <button id="${this.DEL}"> del </button>
        </li>`);

        let TargEDIT = UL_lab3.querySelector("#"+this.EDIT);
        TargEDIT.ondblclick = () => {
            foucsBackground_lab3.style.cssText = "display : block;";
            editDoc.style.cssText = "display : block;";
            // when click save
            EDITBTN_save.onclick = () => {
                // EDITinp
                // EDITtype
                foucsBackground_lab3.style.cssText = "display : none;";
                editDoc.style.cssText = "display : none;";
                document.querySelector('#'+this.ID).querySelector("#"+this.EDIT).textContent = EDITinp.value;
            }
            // when click back
            EDITBTN_back.onclick = () => {
                foucsBackground_lab3.style.cssText = "display : none;";
                 editDoc.style.cssText = "display : none;";
            }
        }

        let TargDEL = UL_lab3.querySelector("#"+this.DEL);
        TargDEL.style.cssText = `
                position: relative;
                top: 0.3rem;
                float: right;
                right : 2rem;
                margin-top:2px;
                background :#2f3f5e;
                border-style: none;
                color : white;
                font-weight: bold;
                font-family:  tahoma;
                border-radius: 0.2rem;
                padding: 0.2rem;
                cursor: pointer;
                transition: 0.2s;
                padding-left: 8px;
                padding-right: 8px;
                text-align: center;
        `;
        TargDEL.onclick = () => {
            TargDEL.parentElement.remove();
        }
    }
}


