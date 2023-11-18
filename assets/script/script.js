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
function createBtn(text, attr, attrValue, node) {
    elem = document.createElement('button');
    elem.setAttribute(attr, attrValue);
    elem.textContent = text;
    node.append(elem);
    return elem;
}

//calculations
function add() {
    if (count + 1 < 1000) {
        count++;
        updateDisplay();
    }
}

function subtract() {
    if (count - 1 >= 0) {
        count--;
        updateDisplay();
    }
}

function addTen() {
    if (count + 10 < 1000) {
        count += 10;
    } else {
        count = 999;
    }
    updateDisplay();
}

function subtractTen() {
    if (count - 10 >= 0) {
        count -= 10;
    } else {
        count = 0;
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
}


// CREATE BUTTONS
let plusBtn = createBtn('+', 'id', 'plus', btnContainer);
let minusBtn = createBtn('-', 'id', 'minus', btnContainer);
let plusTenBtn;
let minusTenBtn;

if (isTouchDevice()) {
    plusTenBtn = createBtn('+10', 'id', 'plusTen', btnContainer);
    minusTenBtn = createBtn('-10', 'id', 'minusTen', btnContainer);

    plusTenBtn.addEventListener('click', () => {
        e.preventDefault();
        addTen();
    })

    minusTenBtn.addEventListener('click', () => {
        e.preventDefault();
        subtractTen();
    })
}

let resetBtn = createBtn('Reset', 'id', 'reset', btnContainer);

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

resetBtn.addEventListener('click', () => {
    e.preventDefault();
    reset();
})

//use keyboard
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

    if (e.key == "Backspace") {
        reset();
    }
})

//INSTRUCTIONS
let instrIcon = document.querySelector('.instrIcon');
let instructions = document.querySelector('.instructions');

let overlay = document.createElement('div');

instrIcon.addEventListener('mouseenter', () => {
    instructions.classList.add('display');
    overlay.classList.add('overlay');
    document.querySelector('body').append(overlay);
})

instrIcon.addEventListener('mouseleave', () => {
    instructions.classList.remove('display');
    document.querySelector('body').removeChild(overlay);
})

window.addEventListener('dblclick', (e) => {
    e.preventDefault();
})