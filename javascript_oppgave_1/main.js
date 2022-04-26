

let singleNumber = "";
let digits = "";
let realDigits = "";

function buttonAdd() {
    singleNumber = (Math.floor(1000 + Math.random() * 9000));
    digits = singleNumber.toString().split('');
    realDigits = digits.map(Number)
    console.log(realDigits);
    document.getElementById("numberOne").innerHTML = realDigits[0];
    document.getElementById("numberTwo").innerHTML = realDigits[1];
    document.getElementById("numberThree").innerHTML = realDigits[2];
    document.getElementById("numberFour").innerHTML = realDigits[3];
}

function buttonSort() {
    realDigits.sort(function(a, b){return a - b});
    console.log("This sorts")
    document.getElementById("numberOne").innerHTML = realDigits[0];
    document.getElementById("numberTwo").innerHTML = realDigits[1];
    document.getElementById("numberThree").innerHTML = realDigits[2];
    document.getElementById("numberFour").innerHTML = realDigits[3];
}