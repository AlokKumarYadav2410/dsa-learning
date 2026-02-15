function toggleCase(str) {
    let newStr = "";
    for (let char of str) {
        let c = char.charCodeAt();
        if (c >= 65 && c <= 90) {
            newStr += String.fromCharCode(c).toLowerCase();
        } else if(c >= 97 && c <= 132){
            newStr += String.fromCharCode(c).toUpperCase();
        }
        else{
            newStr += String.fromCharCode(c);
        }
    }
    return newStr;
}

console.log(toggleCase('AcgDfD'))