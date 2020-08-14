
checknumber=(string)=>{
    for (let i = 0; i < string.length; i++) {
        if(string[i]>=1&&string[i]<=9){
            return true
        }
    }
    return false
}

numInstr=(array)=>{

    a=array.filter((string)=>{
        return checknumber(string)
    })
    return a

}
console.log(numInstr(["1a","a","2b","a"]))