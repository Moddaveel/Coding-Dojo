function logout(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
}

function hide(element) {
    element.remove();
}


// <!-- this deletes the either topRight div
// var topRight = document.querySelector('#topRight')

// function hide() {
//     topRight.remove();
// }



