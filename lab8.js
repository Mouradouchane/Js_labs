
function Deleted(arr = [] , targetINDEX = 0 , right_to_left = true){
    let rtl = right_to_left;
    if(Array.isArray(arr)){
        let newARR = [];
        for(let i = 0 ; i < arr.length ; i+=1){
            if(newARR[i] != targetINDEX){
                newARR.push(arr[i]);
            }
        }
        return newARR;
    }
}

let ars = [0,1,2,3];

console.log("old array : " + ars);

let newars = Deleted(ars,1);

console.log("new array : " + newars);