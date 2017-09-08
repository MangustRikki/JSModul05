// VIEW

let obj = {
    form: document.forms[0],
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result'),
    getValue: function() {
        return Array.from(this.form.elements, x => x.value.trim());
    },
    inputs: []
}

function clearRes(result) {
    result.innerHTML = "";
}

function showEmptyErr() {
    return obj.result.innerHTML += "<p>Все поля должны быть заполнены.</p>";
}

function showPassErr() {
    return obj.result.innerHTML += "<p>Пароль должен быть не меньше 5 символов.</p>";
}

function showMailErr() {
    return obj.result.innerHTML += "<p>Email должен содержать @  и не содержать пробелов.</p>";
}

// MODEL

function checkEmptyInput(inputs) {
    for (let i of inputs) {
        if (i.replace(/\s/g, "") == "") {
            return showEmptyErr();
        }
    }
}


function checkPass(form) {
    for (let i of form.elements)
        if (i.type == "password") {
            if (i.value.length < 5) {
                return showPassErr();
            }
        }
}

function checkMail(form) {
    let numDogs;
    let numSpaces;
    for (let i of form.elements)
        if (i.type == "email") {
            debugger
            numDogs = i.value.match(/@/g);
            numSpaces = i.value.search(/\s/g);
            console.log(i.value);
            if (!numDogs || numSpaces >= 0) {
                return showMailErr();
            } else if (numDogs.length != 1) {
                return showMailErr();
            }
        }
}




//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    // получить значение полей
    obj.inputs = obj.getValue();
    // очистить поле вывода результата
    clearRes(obj.result);
    // проверить на пустоту и пробелы
    checkEmptyInput(obj.inputs);
    // проверка пароля
    checkPass(obj.form);
    // проверка поля эмаил
    checkMail(obj.form);
    // console.log(obj.form.elements);
}