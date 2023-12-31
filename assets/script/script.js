// GRAB ELEMENTS FROM HTML
let numDisplay = document.querySelector('.numbers');
let btnContainer = document.querySelector('.buttons');

// FUNCTIONS
// detect touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

// create and add buttons
function createBtn(text, attr, attrValue) {
    elem = document.createElement('button');
    elem.setAttribute(attr, attrValue);
    elem.textContent = text;
    return elem;
}

//calculations
function add() {
    if (count + 1 < 1000) {
        count++;
        updateDisplay();
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        plusTenBtn.disabled = false;
        minusTenBtn.disabled = false;

    } else {
        plusBtn.disabled = true;
        plusTenBtn.disabled = true;
    }
}

function subtract() {
    if (count - 1 >= 0) {
        count--;
        updateDisplay();
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        plusTenBtn.disabled = false;
        minusTenBtn.disabled = false;

    } else {
        minusBtn.disabled = true;
        minusTenBtn.disabled = true;
    }
}

function addTen() {
    if (count + 10 < 1000) {
        count += 10;
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        plusTenBtn.disabled = false;
        minusTenBtn.disabled = false;
    } else {
        count = 999;
        plusBtn.disabled = true;
        plusTenBtn.disabled = true;
    }
    updateDisplay();
}

function subtractTen() {
    if (count - 10 >= 0) {
        count -= 10;
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        plusTenBtn.disabled = false;
        minusTenBtn.disabled = false;
    } else {
        count = 0;
        minusBtn.disabled = true;
        minusTenBtn.disabled = true;
    }
    updateDisplay();
}

//update display
function updateDisplay() {
    numDisplay.textContent = count.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
}

//reset
function reset() {
    count = 0;
    updateDisplay();
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    plusTenBtn.disabled = false;
    minusTenBtn.disabled = false;
}


// CREATE BUTTONS
let plusBtn = createBtn('+', 'id', 'plus');
let minusBtn = createBtn('-', 'id', 'minus');
let resetBtn = createBtn('Reset', 'id', 'reset');

btnContainer.append(plusBtn, minusBtn, resetBtn);

let plusTenBtn = createBtn('+10', 'id', 'plusTen');
let minusTenBtn = createBtn('-10', 'id', 'minusTen');

if (isTouchDevice()) {
    resetBtn.before(plusTenBtn, minusTenBtn);
}

//DEFINE DISPLAY NUMBER
let count = 0;

plusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.shiftKey) {
        addTen();
    } else {
        add();
    }
})

minusBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.shiftKey) {
        subtractTen();
    } else {
        subtract();
    }
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
})

// mobile only buttons
plusTenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTen();
})

minusTenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    subtractTen();
})

//only keyboard
document.addEventListener('keydown', (e) => {
    // add or subtract
    if (e.key == '+' || e.key == "ArrowUp") {
        if (e.shiftKey) {
            addTen();
        } else {
            add();
        }
    } else if (e.key == '-' || e.key == "ArrowDown") {
        if (e.shiftKey) {
            subtractTen();
        } else {
            subtract();
        }
    }

    //reset
    if (e.key == "Backspace") {
        reset();
    }
})

//INSTRUCTIONS
let instrIcon = document.querySelector('.instrIcon');
let instructions = document.querySelector('.instructions');

let overlay = document.createElement('div');

if (!isTouchDevice()) {
    instrIcon.classList.add('display');
}

instrIcon.addEventListener('mouseenter', () => {
    instructions.classList.add('display');
    overlay.classList.add('overlay');
    document.querySelector('body').append(overlay);
})

instrIcon.addEventListener('mouseleave', () => {
    instructions.classList.remove('display');
    document.querySelector('body').removeChild(overlay);
})

// avoid zooming on rapid clicks
window.addEventListener('dblclick', (e) => {
    e.preventDefault();
})