// Write a function that given a sorted array of positive page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"



function bookIndex(input){
    var output = ""
    for (i=0;i<input.length; i++) {
        if(input[i+1]==input[i]+1) {
            var j=i;
        while(input[j+1] == input[j]+1) {
            j++;
        }
            output+=(input[i]+"-"+input[j]);
            i = j;
        } else {
            output+=(input[i]);
        } output += ", "
    }
return (output)
}

console.log(bookIndex([1,3,4,5,7,8,10,12]))
