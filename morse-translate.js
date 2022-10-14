import { easterEggs } from "./EasterEggs.js";

export const morseObject = {
    "a" : "*-",     "b" : "-***",   "c" : "-*-*",
    "d" : "-**",    "e" : "*",      "f" : "**-*",
    "g" : "--*",    "h" : "****",   "i" : "**",
    "j" : "*---",   "k" : "-*-",    "l" : "*-**",
    "m" : "--",     "n" : "-*",     "o" : "---",
    "p" : "*--*",   "q" : "--*-",   "r" : "*-*",
    "s" : "***",     "t" : "-",      "u" : "**-",
    "v" : "***-",   "w" : "*--",    "x" : "-**-",
    "y" : "-*--",   "z" : "--**",   " " : "/",
    "." : "//"
}


/**
 * Converts a string of english characters into morse code.
 * Includes a default moreObject, but feel free to add your own.
 * @param {String} engString 
 * @param {Object} morseObj 
 * @returns String
 */
export const translateToMorse = (engString, morseObj=morseObject, filter="", joiner=" ") => {
    if (Object.keys(easterEggs).includes(engString)) {return translateToMorse(easterEggs[engString])};
    const lowerArr = engString.split(filter).map((char) => char.toLowerCase());
    const mappedArr = lowerArr.map((char) => morseObj[char] ?? "");
    const cleanArr = mappedArr.filter((item) => item !== "");
    return cleanArr.join(joiner)
}

/**
 * Takes anobject and returns a reversed object, where all keys and pairs have been exchanged.
 * may behave weirdly if there are multiple keys for one value.
 * @param {Object} revObj 
 * @returns Object
 */
const reverseObj = (revObj) => {
    const results = {};
    [...Object.keys(revObj)].forEach((key) => {
        results[revObj[key]] = key;
    });
    return results;
}

export const fromMorseObject = reverseObj(morseObject);

export const translateFromMorse = (morseStr) => {
    return translateToMorse(morseStr, fromMorseObject, " ", "");
}