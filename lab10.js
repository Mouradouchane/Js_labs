                
function ARRsort(arr = [0]){
    let Arr = arr;
    let i;
    // first compared element in array
    let f;
    // secend compared element in array
    let s;
    
    // first loop just a full comparing & sorting for making array ready for next comparing 
    for(i = 0 ; i < Arr.length -1 ; i += 1){
        f = i;
        s = i+1;
        if(Arr[f] > Arr[s]){
            // swap
            [Arr[f],Arr[s]] = [Arr[s],Arr[f]];
        }
    }

    // last comparing last sorting
    for(let p = 0 ; p < Arr.length ; p+=1){
        for(i = Arr.length ; i >= 0 ; i -= 1){
            f = i-1;
            s = i;
            if(Arr[f] > Arr[s]){
                // swap
                [Arr[f],Arr[s]] = [Arr[s],Arr[f]];
            }
        }
    }
    return Arr;
}

var avr =  ARRsort([9,4,7,5,1]);
console.log(avr);