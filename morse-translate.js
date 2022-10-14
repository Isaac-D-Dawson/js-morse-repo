import { join } from "path";

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
    const lowerArr = engString.split(filter).map((char) => char.toLowerCase());
    const mappedArr = lowerArr.map((char) => morseObj[char] ?? "");
    const cleanArr = mappedArr.filter((item) => item !== "");
    return cleanArr.join(joiner)
}

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