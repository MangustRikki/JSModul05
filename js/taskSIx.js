// VIEW

let obj = {
    string: document.querySelector('.string'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result')
}

// MODEL

function showCode(string, result) {
    let codsArr = Array.from(string.value, x => x.charCodeAt());
    result.innerHTML = "Коды введеных символов: "
    for (let i of codsArr) {
        result.innerHTML += i + ", ";
    }
}


//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    showCode(obj.string, obj.result);
}