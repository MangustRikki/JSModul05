// VIEW

let obj = {
    siteName: document.querySelector('.siteName'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result'),
    needSlice: ["https://www.", "http://www.", "https://", "http://"]
}

// MODEL

function showDomain(site) {
    let domainName;
    let tmp, reg;
    for (let i of obj.needSlice) {
        reg = new RegExp(i);
        tmp = site.value.search(reg);
        if (tmp >= 0) {
            return obj.result.innerHTML = site.value.slice(i.length);
        } else {
            return obj.result.innerHTML = site.value;
        }
    }
}


//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    showDomain(obj.siteName);
}