let n = 148;
let k = 3


function superDigit(n, k) {
    // Write your code here
    n = n.split('').map(i=>i*k).join('');
    for(let i=0 ;i>-1;i++){
        n = n.toString().split('').reduce((a,b)=>Number(a)+Number(b)).toString()
        if(n.length==1){
            break;
        }
    }
    return n;
}

superDigit(n, k)