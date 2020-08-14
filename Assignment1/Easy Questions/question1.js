countchar=(a,b)=>{
    let count=0;
    for(i=0;i<b.length;i++){
        if(b[i]==a){
            count++;
        }
    }
    return count
}
console.log(countchar("s","My name is Ajay singh shekhawat"))