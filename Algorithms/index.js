var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);



var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for (let i = 0; i < numbers.length; i++) {
  if ( numbers[i] > 0) {
  countPositives += 1;    
  }
}
    
console.log("there are " + countPositives + " positive values");


var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);



function isPal(arr) {
  for(let left=0; left<arr.length/2; left++) {
      let right = arr.length-1-left;
      if(arr[left] != arr[right]) {
          return "Not a pal-indrome!";
      }
  }
  return "Pal-indrome!";
}
  
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
  
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);


var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}


function reverse(array) {
  reversedArray=[]

  for(let i = array.length -1; i >= 0; i--) {
  reversedArray.push(array[i]);  
  }
}

reverse(["a", "b", "c", "d", "e"])

console.log(reversedArray)

function reverse(arr) {

  reversedArr = [];
  let i = 0;

  while( i < arr.length -1) {
    for (let i = arr.length -1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  }
}

reverse(["a", "b", "c", "d", "e"])

console.log(reversedArr)





var array = ["a", "b", "c", "d", "e"];

function reverse(arr) {
    var reversed = [];
    var start = 0;
    var end = arr.length-1;
    while (start <= end) {
        reversed.push(arr[end]);
        end--;
    }

    return reversed;
}

console.log(reverse(array));
console.log(reverse([1,2,3,4,5]))


function reverseWhile(arr) {

  var x = 0;
  while( x < arr.length / 2){
    var temp = arr[x];
    arr[x] = arr[arr.length-1-x];
    arr[arr.length-1-x] = temp;
    x++;
  }
  return arr;
}

console.log(reverse(["a", "b", "c", "d", "e"]));
console.log(reverseWhile(["a", "b", "c", "d", "e"]));

