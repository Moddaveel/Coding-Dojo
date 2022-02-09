// The Math Library
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


// Dice Roller
function d6(max,min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var roll = Math.floor((Math.random() * max + min));
    return roll;
}
    
var playerRoll = d6(6,1);
console.log("The player rolled: " + playerRoll);

    

// Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// function oracle(){

//     var prediction = Math.random(lifesAnswers.length)
    

//     return prediction
// }


var ranNum = Math.floor(Math.random() * (lifesAnswers.length));
console.log("ranNum: " + ranNum)
console.log(lifesAnswers[ranNum]);


