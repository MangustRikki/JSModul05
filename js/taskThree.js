// VIEW

let obj = {
    siteName: document.querySelector('.siteName'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result')
}

// MODEL

function showDomain(site) {
    //определяю, в формате http или https
    let charCode = site.value.charCodeAt(4);
    let domainName;
    if (charCode == 115) {
        domainName = site.value.slice(8);
    } else {
        domainName = site.value.slice(7);
    }
    obj.result.innerHTML = domainName;
}


//CONTROLER

obj.submit.addEventListener('click', go);

function go(e) {
    e.preventDefault(e);
    showDomain(obj.siteName);
}