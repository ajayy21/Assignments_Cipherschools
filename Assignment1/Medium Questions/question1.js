sreverse=(str,ch)=>{
    let a=str.split(" ")
    let s=""
    a.map((i)=>{
        if(i[0]===ch){
            i=i.split('').reverse().join('')
            s=s+" "+i
        }
        else{
            s=s+" "+i
        }
    })
    return s
}
console.log(sreverse("word searches are super fun", "s" ))