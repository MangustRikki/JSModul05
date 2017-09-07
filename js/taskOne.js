// VIEW

let obj = {
    string: document.querySelector('.string'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result')
}

// MODEL

function calc(string, result) {
    return result.textContent = "Длина вашей строки " + string.value.length + " символов";
}


//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    calc(obj.string, obj.result);
}