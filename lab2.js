const text_areas = document.querySelectorAll("textarea");

// vars lab 2
const outs_lab2 = outs[1];
const inps_lab2 = inps[1];
const txtArea_lab2 = text_areas[0];

function finder(val){
    let targKEY = val;
    let article = txtArea_lab2.value.toString().split(" ");
    let REG_lab2 = new RegExp("\\n","gm");
    let plas = 0;
    let i;
    // checked wired words in textarea ??
    for(i = 0 ; i <= article.length ; i+=1){
        if(REG_lab2.test(article[i]) == true){
            article[i] = article[i].split("\n")[0];
        }
    }
    // start counting targs keywords
    for(i = 0 ; i <= article.length ; i+=1){
        if(article[i] == targKEY){
            plas += 1;
        }
    }
    // clear place
        outs_lab2.textContent = "";
    // append matched found 
        outs_lab2.appendChild(document.createElement("span")).textContent = "matched found :" + plas;
    // append div result
        outs_lab2.appendChild(document.createElement("div")).setAttribute("id","full-arti");
        var flARTI = document.querySelector("#full-arti");
    // print result as last step
        for(i = 0 ; i < article.length ; i+=1){
            if(article[i] == targKEY){
                flARTI.appendChild(document.createElement("mark")).textContent = " "+article[i];
            }
            else if(plas == 0){
                outs_lab2.textContent = "keyword not found";
            }
            else{
                flARTI.appendChild(document.createElement("span")).textContent = " " +article[i] + " ";
            }
        }
}

inps_lab2.onkeypress = (event) => {
    if(event.keyCode == 13 && inps_lab2.value != ""){
        finder(inps_lab2.value);
    }
    else{
        outs_lab2.textContent = "invalid keyword";
    }
}

txtArea_lab2.onkeypress = (event) => {
    if(event.keyCode == 13 && inps_lab2.value != ""){
        finder(inps_lab2.value);
    }
    else{
        outs_lab2.textContent = "invalid keyword";
    }
}
