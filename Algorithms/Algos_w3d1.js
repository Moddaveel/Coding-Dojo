function reverse(str){
    let revStr = "";
    for( let i = str.length - 1; i >= 0; i--){
        revStr += str.charAt(i);
    }
    return revStr;
}
console.log(reverse("creative"))



function acronym(str){
    let newStr = "";
    let wordArr = str.split(" ")
    for ( let i = 0; i < wordArr.length ; i++){
        newStr += wordArr[i][0]
    }
    return newStr.toUpperCase();
}
console.log(acronym("there's no free lunch - gotta pay yer way"))

