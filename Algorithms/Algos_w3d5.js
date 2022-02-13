// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny


// function generateCoinChange(input) {

//     var quarters = 0
//     var dimes = 0
//     var knickles =0
//     var pennys = 0

//     for ( let i = while(input > 1){
        
//     }

//     return change
// }


function change(money){
    var quarters = 0;
    var dimes = 0;
    var nickles = 0;
    var pennies = 0;

    money *= 100;

    while(money > 0){
        if(money >= 25){
            quarters++;
            money -= 25;
        }else if(money >= 10){
            dimes++;
            money -= 10;
        }else if(money >= 5){
            nickles++;
            money -= 5;
        }else{
            pennies++; 
            money -= 1;
        }
    }

    return `quarters: ${quarters}, dimes ${dimes}, nickles ${nickles}, pennies ${pennies}`;
}

console.log(change(1.97));
console.log(change(20.20));
