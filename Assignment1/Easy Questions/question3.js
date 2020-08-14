replaceVowel=(c)=>{
    for (let i = 0; i < c.length; i++) {
        c=c.replace('a',1)
        c=c.replace('e',2)
        c=c.replace('i',3)
        c=c.replace('o',4)
        c=c.replace('u',5)
    }
    return c
}

console.log(replaceVowel("Shekhawat"))