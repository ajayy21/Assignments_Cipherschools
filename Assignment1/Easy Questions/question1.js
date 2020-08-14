countchar=(a,b)=>{
    let count=0;
    for(i=0;i<b.length;i++){
        if(b[i]==a){
            count++;
        }
    }
    return count
}
console.log(countchar("b","big fat bubble"))