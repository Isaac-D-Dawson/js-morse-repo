//handle key imports,
import { morseObject, translateToMorse } from "./morse-translate.js";

//Document query selectors:
const toMorseInput  = document.querySelector(".morsecode__input");
const toMorseMain   = document.querySelector(".morsecode__main");
const toMorseSubmit = document.querySelector(".morsecode__submit");

const toMorseOutput = document.querySelector(".morsecode__response--text");


//callback functions:

const mainCallback = (event) => {
    event.preventDefault();

    toMorseOutput.innerText = translateToMorse(toMorseInput.value);
}

//callback assignment:

toMorseMain.addEventListener("submit", mainCallback);
// toMorseSubmit.addEventListener("click", mainCallback)