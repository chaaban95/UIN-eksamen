/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####
const startHere = "Her kommer din kode";
var stepActive = document.getElementsByClassName('step active');
var stepNotActive = document.getElementsByClassName("step");
//Knapper og steg som skal vises og ikke vises
const nextButtonId = document.getElementById("next");
const prevButtonId = document.getElementById("prev");
const submitButtonId = document.getElementById("send");
const stepOneId = document.getElementById("step_one");
const stepTwoId = document.getElementById("step_two");
const stepThreeId = document.getElementById("step_three");
const errorId = document.getElementsByClassName("error");
//Inputs
const inputOne = document.getElementById("name");
const inputTwo = document.getElementById("email");
const inputThree = document.getElementById("age");



//Farge på steg legges til når siden åpnes.
updateStepColor();
//Input feltene blir blanke, tilfelle man laster siden på nytt og hadde skrevet noe i de tidligere
inputOne.value = '';
inputTwo.value = '';
inputThree.value = '';

const submittedText = document.createElement("h1");

nextButtonId.addEventListener("click", nextButton);
prevButtonId.addEventListener("click", prevButton);
submitButtonId.addEventListener("click", function(event) {
  event.preventDefault();
  submitted();
});

function nextButton() {
  //onclick next button
  //Needs to check what step we are on and move forward one
  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 1) {
      //Add function to change from step 1 to step 2
      if (inputOne.value == '' || isNaN(inputOne.value) == false || inputOne.value.length < 10 || inputOne.value.includes(" ") == false) {
        errorId[0].hidden = false;
        break;
      } else {
        errorId[0].hidden = true;
        stepTwo();
        break;
      }
    }
    if (stepActive[i].innerHTML == 2) {
      if (inputTwo.value == '' || inputTwo.value.includes("@") == false) {
        errorId[1].hidden = false;
        break;
      } else {
        errorId[1].hidden = true;
        stepThree();
        break;
      }
    }
  }
  updateStepColor();
  //Sjekke at det finnes noe i input feltet, hvis ikke kan man ikke gå videre og det vil komme en feilmelding. 
}
function submitted() {
  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 3) {
      if (inputThree.value == '' || isNaN(inputThree.value) == true || inputThree.value < 18) {
        errorId[2].hidden = false;
        submitButtonId.style.transform = "translateY(10%)";
        break;
      } else {
        errorId[2].hidden = true;
        formSent();
        break;
      }
    }
  }
}
function prevButton() {
  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 2) {
      stepOne();
    }
    if (stepActive[i].innerHTML == 3) {
      stepTwo();
    }
  }
  updateStepColor();
}

function stepOne() {
  stateOfStepOne();

  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 2 || stepActive[i].innerHTML == 3)
    stepActive[i].className = "step";
    
  }
  for (var i = 0; i < stepNotActive.length; i++) {
    if (stepNotActive[i].innerHTML == 1) {
      stepNotActive[i].className = "step active";
    }
  }
  
}
function stepTwo() {
  stateOfStepTwo();

  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 1 || stepActive[i].innerHTML == 3)
    stepActive[i].className = "step";
    
  }
  for (var i = 0; i < stepNotActive.length; i++) {
    if (stepNotActive[i].innerHTML == 2) {
      stepNotActive[i].className = "step active";
    }
  }
}
function stepThree() {
  stateOfStepThree();
  
  for (var i = 0; i < stepActive.length; i++) {
    if (stepActive[i].innerHTML == 1 || stepActive[i].innerHTML == 2)
    stepActive[i].className = "step";
    
  }
  for (var i = 0; i < stepNotActive.length; i++) {
    if (stepNotActive[i].innerHTML == 3) {
      stepNotActive[i].className = "step active";
    }
  }
}
function formSent() {
  const body = document.querySelector("main");
  body.innerText = "Takk ditt skjema er sendt";
  body.style.fontSize = "2rem";
}

// Global functions
function updateStepColor() {
  for(var i = 0; i < stepNotActive.length; i++) {
//<<<<<<< HEAD
    stepNotActive[i].style.backgroundColor = "white";
//=======
    stepNotActive[i].style.backgroundColor = "rgb(183, 183, 183)";
//>>>>>>> Andrea
  }
  for(var i = 0; i < stepActive.length; i++) {
    stepActive[i].style.backgroundColor = "rgb(25, 232, 168)";
  }
}
function stateOfStepOne() {
  prevButtonId.hidden = true;
  stepOneId.hidden = false;
  stepTwoId.hidden = true;
}
function stateOfStepTwo() {
  prevButtonId.hidden = false;
  nextButtonId.hidden = false;
  submitButtonId.hidden = true;
  stepOneId.hidden = true;
  stepTwoId.hidden = false;
  stepThreeId.hidden = true;
}
function stateOfStepThree() {
  nextButtonId.hidden = true;
  submitButtonId.hidden = false;
  stepTwoId.hidden = true;
  stepThreeId.hidden = false;
}
//<<<<<<< HEAD

//=======
//>>>>>>> Andrea
