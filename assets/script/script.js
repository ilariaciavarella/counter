// GRAB ELEMENTS FROM HTML
let numDisplay = document.querySelector('.numbers');
let btnContainer = document.querySelector('.buttons');

// CREATE AND ADD BUTTONS
function createBtn(text, attr, attrValue, node) {
    elem = document.createElement('button');
    elem.setAttribute(attr, attrValue);
    elem.textContent = text;
    node.append(elem);
    return elem;
}

let plusBtn = createBtn('+', 'id', 'plus', btnContainer);
let minusBtn = createBtn('-', 'id', 'minus', btnContainer);
let plusTenBtn = createBtn('+10', 'id', 'plusTen', btnContainer);
let minusTenBtn = createBtn('-10', 'id', 'minusTen', btnContainer);

let resetBtn = createBtn('Reset', 'id', 'reset', btnContainer);

plusBtn.addEventListener('click', () => {
    currentNum++;
    numDisplay.textContent = currentNum;
})

plusTenBtn.addEventListener('click', () => {
    currentNum += 100;
    numDisplay.textContent = currentNum;
})

minusBtn.addEventListener('click', () => {
    currentNum--;
    numDisplay.textContent = currentNum;
})

minusTenBtn.addEventListener('click', () => {
    currentNum -= 10;
    numDisplay.textContent = currentNum;
})

resetBtn.addEventListener('click', () => {
    numDisplay.textContent = '000';
})