//handle key imports,
import { morseObject, translateToMorse, fromMorseObject, translateFromMorse } from "./morse-translate.js";

//Document query selectors:
const toMorseInput  = document.querySelector(".morsecode__input");
const toMorseMain   = document.querySelector(".morsecode__main");
const toMorseSubmit = document.querySelector(".morsecode__submit");

const toMorseOutput = document.querySelector(".morsecode__response--text");


const fromMorseInput  = document.querySelector(".codemorse__input");
const fromMorseMain   = document.querySelector(".codemorse__main");
const fromMorseSubmit = document.querySelector(".codemorse__submit");

const fromMorseOutput = document.querySelector(".codemorse__response--text");


//callback functions:

const morsecodeCallback = (event) => {
    event.preventDefault();

    toMorseOutput.innerText = translateToMorse(toMorseInput.value);
}

const codemorseCallback = (event) => {
    event.preventDefault();

    fromMorseOutput.innerText = translateFromMorse(fromMorseInput.value);
}
//callback assignment:

toMorseMain.addEventListener("submit", morsecodeCallback);
fromMorseMain.addEventListener("submit", codemorseCallback);
