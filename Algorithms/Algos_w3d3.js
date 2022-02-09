// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPalindrome(str) {
    for (var i = 0; i < str.length/2; i++){
        var right = str.length-1-i;
        console.log("Going through the loop")
        if (str[i] != str[right]) {
            console.log("False! This is not a Palindrome.")
            return false;
        }
    }
    console.log("True! This is a Palindrome!");
    return true;
}

isPalindrome("racecar")
isPalindrome("hello")



// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function isPallindrome(str) {
    
}