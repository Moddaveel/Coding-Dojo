function hide(element) {
    element.remove();
}

var pets1 = 3
var pets2 = 5
var pets3 = 7

var pets1Adder = document.querySelector('#pets1')
var pets2Adder = document.querySelector('#pets2')
var pets3Adder = document.querySelector('#pets3')

function addPetting(){
    pets1++;
    pets1Adder.innerText++;
}

function addPetting2(){
    pets2++;
    pets2Adder.innerText++;
}
function addPetting3(){
    pets3++;
    pets3Adder.innerText++;
}
