// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
const startHere = "Her kommer din kode";
// Listen hvor vi skal plassere 4 unike ord fra wordList
let randomWordArr = [];
// Listen over tallene vi skriver inn i input feltene
let guessNumberArr = [];
// Listen av de fire ordene men sortert alfabetisk
let sortWordArr = [];
let originalWordArr = [];
let wordCompareArr = [];

const inputOne = document.getElementsByTagName('input')[0];
const inputTwo = document.getElementsByTagName('input')[1];
const inputThree = document.getElementsByTagName('input')[2];
const inputFour = document.getElementsByTagName('input')[3];
const spanOne = document.getElementsByTagName('span')[0];
const spanTwo = document.getElementsByTagName('span')[1];
const spanThree = document.getElementsByTagName('span')[2];
const spanFour = document.getElementsByTagName('span')[3];
const testButton = document.getElementById("test");

const gameOver = false;



testButton.addEventListener("click", checkForChange);
//Funksjonen som skjer når knappen trykkes
function setup() {
  //Hver gang vi trykker på knappen ønsker vi å starte med en blank liste
  randomWordArr = [];
  //Fjerner verdier som ligger inne i input feltet fra tidligere forsøk
  inputOne.value = "";
  inputTwo.value = "";
  inputThree.value = "";
  inputFour.value = "";
  //Denne funksjonen skal skjøres hver gang knappen trykkes
  generateNumber(4, 25);
  //Vi har generert 4 unike tall mellom 0-24, de tallene bruker vi til å hente ordene som befinner seg på de ulike indeksene
  spanOne.innerHTML = wordList[randomWordArr[0]];
  spanTwo.innerHTML = wordList[randomWordArr[1]];
  spanThree.innerHTML = wordList[randomWordArr[2]];
  spanFour.innerHTML = wordList[randomWordArr[3]];
  //Vi har enda ikke en liste med kun de fire ordene, vi har kun en med tall så denne listen inneholder de 4 ordene som ble valgt
  sortWordArr = [wordList[randomWordArr[0]], wordList[randomWordArr[1]], wordList[randomWordArr[2]], wordList[randomWordArr[3]]];
  originalWordArr = [wordList[randomWordArr[0]], wordList[randomWordArr[1]], wordList[randomWordArr[2]], wordList[randomWordArr[3]]];
  //Etter listen er laget så sorterer vi listen alfabetisk
  sortWordArr.sort();
  //Her ser vi hvordan listen ser ut, man kan console logge før sort også for å se at sort faktisk gjør det den skal. 
  console.log(sortWordArr);
}
//Funksjon som genererer 4 unike og tilfeldige tall mellom 0-24 som er ment å representere ideksene i wordList
function generateNumber() {
  while (randomWordArr.length < 4) {
    let numberCheck = Math.floor(Math.random() * 25)
    if(randomWordArr.indexOf(numberCheck) === -1) randomWordArr.push(numberCheck)
  }  
}

//Denne funksjonen skjer hver gang man endrer et av input feltene, når det skjer en endring så må vi sjekke om kombinasjonen er riktig, eller feil og eventuelt hva som er feil. 
function checkForChange() {
  console.log(sortWordArr);
  const button = document.getElementById("test");
  guessNumberArr[0] = inputOne.value
  guessNumberArr[1] = inputTwo.value
  guessNumberArr[2] = inputThree.value
  guessNumberArr[3] = inputFour.value
  inputOne.style.borderColor = button.style.borderColor;
  inputTwo.style.borderColor = button.style.borderColor;
  inputThree.style.borderColor = button.style.borderColor;
  inputFour.style.borderColor = button.style.borderColor;

  if(button.textContent == failText) {
    button.style.backgroundColor = "rgb(244, 244, 244)";
    button.innerText = "Test";
  }

  for (let i = 0; i < 4; i++) {
    if (guessNumberArr[i] < 1 || guessNumberArr[i] > 4) {
      button.style.backgroundColor = failColor;
      button.innerText = failText;
    }
  }
  const langIf = guessNumberArr.indexOf("1") !== -1 || guessNumberArr.indexOf("2") !== -1 || guessNumberArr.indexOf("3") !== -1 || guessNumberArr.indexOf("4") !== -1;

  
  
  if (langIf) {
    wordCompareArr.splice(0, 1, originalWordArr[guessNumberArr.indexOf("1")]);
    wordCompareArr.splice(1, 1, originalWordArr[guessNumberArr.indexOf("2")]);
    wordCompareArr.splice(2, 1, originalWordArr[guessNumberArr.indexOf("3")]);
    wordCompareArr.splice(3, 1, originalWordArr[guessNumberArr.indexOf("4")]);
  }
  
  if (isNaN(guessNumberArr[0]) || isNaN(guessNumberArr[1]) || isNaN(guessNumberArr[2]) || isNaN(guessNumberArr[3])   ) {
    button.style.backgroundColor = failColor;
    button.innerText = failText;
  }
  if (langIf) {
  
    if(button.textContent == correctText) {
      setup();
      button.style.backgroundColor = "rgb(244, 244, 244)";
      button.innerText = "Test";
      return;
    } else if (JSON.stringify(sortWordArr) === JSON.stringify(wordCompareArr)) {
      button.style.backgroundColor = correctColor;
      button.innerText = correctText;
    } else {
      button.style.backgroundColor = failColor;
      button.innerText = failText;
      wrongNumberCheck();
    }
  }
 
}

const checkElement = (element) => {
  return element.value !== 1 || element.value !== 2 || element.value !== 3 || element.value !== 4;
}

function wrongNumberCheck () {
  
  if (checkElement(inputOne)) {
    console.log("Input field one needs a number between 1 and 4")
    inputOne.style.borderColor = failColor;
  }
  if (checkElement(inputTwo)) {
    console.log("Input field two needs a number between 1 and 4")
    inputTwo.style.borderColor = failColor;
  }
  if (checkElement(inputThree)) {
    console.log("Input field three needs a number between 1 and 4")
    inputThree.style.borderColor = failColor;
  }
  if (checkElement(inputFour)) {
    console.log("Input field four needs a number between 1 and 4")
    inputFour.style.borderColor = failColor;
  }
}



window.onload = () => {
  setup();
}