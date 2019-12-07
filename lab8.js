
function Del(arr = [] , targetINDEX = 0 , right_to_left = false){
    let rtl = right_to_left;
    if(Array.isArray(arr)){
        let newARR = [];
        let rtl = right_to_left;

        if(rtl == true){
            arr.reverse();
            for(let i = arr.length-1 ; i >= 0 ; i-=1){
                if(arr[i] != arr[targetINDEX]){
                    newARR.push(arr[i]);
                }
            }
        }

        else{
            for(let i = 0 ; i < arr.length ; i+=1){
                if(arr[i] != arr[targetINDEX]){
                    newARR.push(arr[i]);
                }
            }
        }
        return newARR;
    }
}

function Multi_del(arr = [] , start = 0, end = undefined, right_to_left = false){
    let newMultiARR =  [];
    let rtl = right_to_left; 
    // check if param is array
    if(Array.isArray(arr)){
        if(end == undefined){
            end = arr.length -1;
        }
        // if right to left is true
        if(rtl == true){
            arr.reverse();
            for(let i = 0 ; i < arr.length ; i +=1){
                if(arr[i] >= arr[start] && arr[i] <= arr[end]){
                    
                }
                else{
                    newMultiARR.push(arr[i]);
                }
            }
        }
        // if right to left is false
        else{
            for(let i = 0 ; i < arr.length ; i +=1){
                if(arr[i] >= arr[start] && arr[i] <= arr[end]){
                    
                }
                else{
                    newMultiARR.push(arr[i]);
                }
            }
        }
        return newMultiARR;
    }
}

let ars = [1,2,3];
let ltr = Multi_del(ars,0,0);

let oldARR = ARS_RSLT_lab7[3] , newARR = ARS_RSLT_lab7[4];

oldARR.textContent = "old array => [" + ars +"]";
newARR.textContent = "new array => (ltr) [" + ltr+"]";