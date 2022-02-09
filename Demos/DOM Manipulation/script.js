// var something = {name: "value"}

// console.log(something)

// something["address"] = "101 here Street"
// something.favnumb = 99
// something.favnumb++
// console.log(something.address)
// console.log(something["favnumb"])

// something.name = "David"
// console.log(something)+


// var mybutton = document.queryselect("button")

var testdiv = document.querySelector('#testdiv')
var reddivs = document.getElementsByClassName('reddivs')
var input = document.querySelector('#name')

testdiv.addEventListener('click', whoami)


function clickevent(){    

    testdiv.innerText = input.value
    testdiv.style.backgroundColor = "firebrick"

}

function clickevent2(){ 
    for (let i = 0; i <reddivs.length;i++){
    reddivs[i].style.background ='green'
    }
}

function whoami(){
   console.log(this)            
}

function help(){
    testdiv.whoami()
}