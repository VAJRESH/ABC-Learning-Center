const dropdownList = document.getElementById('dropdownList');
let priceTag = [], jsonData = [], originalPrice = [];
setDropdown();

dropdownList.addEventListener('change', (e) => {
    let obj;

    // object of the options which is selected
    for (let object in jsonData) {
        if (jsonData[object].code === e.target.value) {
            obj = jsonData[object];
        }
    }

    // update the DOM
    for (let index in priceTag) {
        if (index === 'entries') return;
        if (priceTag[index]) {
            if (originalPrice.length < priceTag.length) originalPrice.push(priceTag[index].childNodes[1].innerText);
            
            priceTag[index].innerHTML = `${obj.code} <span>${(originalPrice[index] * obj.rate).toFixed(2)}</span>`;
        }
    }
});


const isElementPresent = setInterval(() => {
    priceTag = document.querySelectorAll('.price');
    
    if (priceTag.length>0) clearInterval(isElementPresent);
}, 100);


function setDropdown() {
    $.getJSON('currencyData.json', function (res) {
        
        for (let object of res.data) {
            jsonData.push(object);
        
            const opt = createOption(object.name, object.code);
            dropdownList.append(opt);
        }
    });
}


function createOption(innerText, value) {
    const option = document.createElement('option');
    option.innerText = innerText;
    option.value = value;
    return option;
}