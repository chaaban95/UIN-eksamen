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
// Listen hvor vi skal plassere 4 unike ord fra wordList
let randomWordArr = [];
// Listen over tallene vi skriver inn i input feltene
let guessNumberArr = [];
// Listen av de fire ordene men sortert alfabetisk
let sortWordArr = [];
let originalWordArr = [];
let wordCompareArr = [];

//Funksjonen som skjer når knappen trykkes
function buttonTest() {
  //Hver gang vi trykker på knappen ønsker vi å starte med en blank liste
  randomWordArr = [];
  //Fjerner verdier som ligger inne i input feltet fra tidligere forsøk
  document.getElementById("inputOne").value = "";
  document.getElementById("inputTwo").value = "";
  document.getElementById("inputThree").value = "";
  document.getElementById("inputFour").value = "";
  //Denne funksjonen skal skjøres hver gang knappen trykkes
  generateNumber(4, 25);
  //Vi har generert 4 unike tall mellom 0-24, de tallene bruker vi til å hente ordene som befinner seg på de ulike indeksene
  document.getElementById("spanOne").innerHTML = wordList[randomWordArr[0]];
  document.getElementById("spanTwo").innerHTML = wordList[randomWordArr[1]];
  document.getElementById("spanThree").innerHTML = wordList[randomWordArr[2]];
  document.getElementById("spanFour").innerHTML = wordList[randomWordArr[3]];
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
  // Her lager vi en ny liste, hver gang vi oppdaterer input feltene så blir verdien i input feltet lagt inn i listen. 
  guessNumberArr[0] = document.getElementById("inputOne").value
  guessNumberArr[1] = document.getElementById("inputTwo").value
  guessNumberArr[2] = document.getElementById("inputThree").value
  guessNumberArr[3] = document.getElementById("inputFour").value

  console.log(guessNumberArr);
  if (guessNumberArr.indexOf("1") !== -1 || guessNumberArr.indexOf("2") !== -1 || guessNumberArr.indexOf("3") !== -1 || guessNumberArr.indexOf("4") !== -1) {
    wordCompareArr.splice(0, 1, originalWordArr[guessNumberArr.indexOf("1")]);
    wordCompareArr.splice(1, 1, originalWordArr[guessNumberArr.indexOf("2")]);
    wordCompareArr.splice(2, 1, originalWordArr[guessNumberArr.indexOf("3")]);
    wordCompareArr.splice(3, 1, originalWordArr[guessNumberArr.indexOf("4")]);
  }
  
  if (isNaN(guessNumberArr[0]) || isNaN(guessNumberArr[1]) || isNaN(guessNumberArr[2]) || isNaN(guessNumberArr[3])   ) {
    console.log("Please type in numbers from 1 to 4");
  }
  
  if (guessNumberArr.indexOf("1") !== -1 && guessNumberArr.indexOf("2") !== -1 && guessNumberArr.indexOf("3") !== -1 && guessNumberArr.indexOf("4") !== -1) {
    
    console.log(wordCompareArr);
    
    if (JSON.stringify(sortWordArr) === JSON.stringify(wordCompareArr)) {
      console.log("you won");
    }
    else {
      console.log("Wrong combination, try again")
      wrongNumberCheck ();
    }
    
  }
  
  
}

function wrongNumberCheck () {
  if (document.getElementById("inputOne").value !== 1 || document.getElementById("inputOne").value !== 2 || document.getElementById("inputOne").value !== 3 || document.getElementById("inputOne").value !== 4) {
    console.log("Input field one needs a number between 1 and 4")
  }
  if (document.getElementById("inputTwo").value !== 1 || document.getElementById("inputTwo").value !== 2 || document.getElementById("inputTwo").value !== 3 || document.getElementById("inputTwo").value !== 4) {
    console.log("Input field two needs a number between 1 and 4")
  }
  if (document.getElementById("inputThree").value !== 1 || document.getElementById("inputThree").value !== 2 || document.getElementById("inputThree").value !== 3 || document.getElementById("inputThree").value !== 4) {
    console.log("Input field three needs a number between 1 and 4")
  }
  if (document.getElementById("inputFour").value !== 1 || document.getElementById("inputFour").value !== 2 || document.getElementById("inputFour").value !== 3 || document.getElementById("inputFour").value !== 4) {
    console.log("Input field four needs a number between 1 and 4")
  }
}