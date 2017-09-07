// VIEW

let obj = {
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result'),
    arrImg: ["arlekin", "batman", "harley", "girl", "queen"]
}

// MODEL

function showImg(arr) {
    for (let i of arr) {
        obj.result.innerHTML += "<img src ='../img/" + i + ".jpg'>" + " ";
    }

}


//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    showImg(obj.arrImg);
}