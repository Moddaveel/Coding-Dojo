var like = 7
var liker = 12
var liked = 11


var likeAdder = document.querySelector('#like')
var likerAdder = document.querySelector('#liker')
var likedAdder = document.querySelector('#liked')


function addLikes(){
    like++;
    likeAdder.innerText++;
}

function addLikes2(){
    liker++;
    likerAdder.innerText++;
}

function addLikes3(){
    like++;
    likedAdder.innerText++;
}


// <!--- Alt solution is below
// var likes = [9, 12, 9];
// var spans = [
//     document.querySelector("#post-1"),
//     document.querySelector("#post-2"),
//     document.querySelector("#post-3")
// ];

// function like(id) {
//     likes[id]++;
//     spans[id].innerHTML = likes[id] + "like(s)";
// }