removedups=(array)=>{
    var set1 = new Set(array);
    array=Array.from(set1)
    return array
}
console.log(removedups(["The","Cat","Cat"]))