// function paransValid(str){
//     for (let i = 0; i < str.length/2; i++){
//         for(let j = str.length - 1; j > str.length/2; j--){
//             if (i == '(' && j == ')')
//             return true;
//             else 
//             return false;
//         }
//     }         <!---- Working on my own solution
// }
// console.log(paransValid('((())'))
// console.log(paransValid('((()))'))


// Tammas Solution
let stack = []
var string = "[{a(a)a}]"
var t = false;

for (let i = 0; i < string.length; i++) {
    if (string[i] == ')' || string[i] == '}' || string[i] == ']') {
        if (stack.length == 0) {
            break;
        }
        var s = stack.pop()
        stack.push(s)
        if (string[i] == ')' && s == ('(')) {
            t = true;
            stack.pop()

        } else if (string[i] == '}' && s == '{') {
            t = true;
            stack.pop()
        } else if (string[i] == ']' && s == '[') {
            t = true;
            stack.pop()
        } else {
            t = false;
            break;
        }
    } else {
        if (string[i] == '(' || string[i] == '{' || string[i]=='[')
        stack.push(string[i])
    }
}
if (stack.length == 0)
    console.log(t)
else console.log(t)


// Andrew's Solution
function parensValid(str){
    var open=0;
    for(var i=0;i<str.length;i++){
        switch(str[i]){
            case '(':
                open++;
                break;
            case ')':
                open--;
                break;
        }
        if(open<0){
            return false;
        }
    }
    return open==0;
}

//Team Lisa's solution
function bracesValid(str){
    //empy arr
    var inStr = [];
    // elements checking for in parameter string
    var elements = ["(",")","{","}","[","]"];
    //looking at each incv element in parameter
    for(i=0;i<str.length; i++){
        //checks that char compare to each of the elements in elements arr
        for(k=0;k<elements.length;k++){
            //compare - if they're == pushes item into array inStr
            if(str[i] == elements[k]){
                inStr.push(elements[k]);
            }
        }
    }
    // on/off switch
    var valid;

    // if its odd automatically false
    if(inStr.length % 2 == 0){
        // loops through checking pairs first to last || element to element next to
        for(b = 0; b < inStr.length / 2; b++){
            //lisa: put me into a for loop
            if(inStr[b] == "(" && (inStr[inStr.length - 1 - b] == ")") ||
            inStr[b] == ")"){
                valid = true;
            }else if(inStr[b] == "{" && (inStr[inStr.length - 1 - b] == "}") || inStr[b] == "}" ){
                valid = true;
            }else if(inStr[b] == "[" && inStr[inStr.length - 1 - b] == "]" ||
            inStr[b] == "]"){
                valid = true;
            }else{
                valid = false;
            }
        }
    }else{
        valid = false;
    }
    return valid;
}


// calling function
// console.log(bracesValid("({[({})]})"));
// console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log(bracesValid("{{[a]}}(){bcd}{()}"));

// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true