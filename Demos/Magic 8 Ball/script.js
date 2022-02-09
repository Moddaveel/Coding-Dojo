// document.addEventListener('DOMContentLoaded', function() {


// })


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

var answer = document.querySelector('.answer p')
var myButton = document.querySelector('button')
var timer = 1000;
var timediv = document.getElementById('timediv')
var timedivx = -125;
myButton.addEventListener('click', mydelay)
timediv.style.left = "" + timedivx + 'px';

function mydelay(){
    timediv.style.left = '-125px';
    timedivx = -125;
    timediv.style.backgroundColor = 'red';
    movediv()
    setTimeout(shake,2000)
}

function movediv(time = timer){
    if(time > 100) {
        setTimeout(movediv,200,time-100)        
    } else {
        timediv.style.backgroundColor = 'black'
    }
    timedivx += 25;
    timediv.style.left = "" + timedivx + 'px';
    console.log('timer:', time)
}



// var shake = function(){} - bread crumb to a different way to do this!!!

function shake(){   

    var rand = Math.floor( Math.random()*lifesAnswers.length)

    answer.innerHTML = lifesAnswers[rand]    

    // var newText = document.createTextNode(lifesAnswers[rand])
    // answer.appendChild(newText)    
}

// Server side rendering will give your website more traffic and

// angular and react load content after so crawlers dont see everything in the beginning