// 1st Problem
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

// console.log(arr2d[0][1]);
function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            if (value == arr2d[i][j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent2d(arr2d, 5))
console.log(isPresent2d(arr2d, 17))



// 2nd Problem
var arr = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

function flatten(arr) {
    var flat = [];

    for (var i = 0; i < arr.length; i++) {
        for ( var j = 0; j < arr[i].length; j++){
            flat.push(arr[i][j])  
        }
    }
    return flat;
}

console.log(flatten(arr));

