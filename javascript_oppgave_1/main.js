
let digits = [];
let realDigits = [];
const addButton = document.getElementById("add");
const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", buttonSort);
addButton.addEventListener("click", buttonAdd);

function buttonAdd() {
    for(let i = 0; i < 4; i++) {
        digits[i] = (Math.floor(1 + Math.random() * 9))
        document.getElementById('myList').getElementsByTagName('li')[i].innerHTML = digits[i];
    }
    realDigits = digits.map(Number)
}

function buttonSort() {
    realDigits.sort(function(a, b){return a - b});
    for(let i = 0; i < 4; i++) {
        document.getElementById('myList').getElementsByTagName('li')[i].innerHTML = realDigits[i];
    }
}

