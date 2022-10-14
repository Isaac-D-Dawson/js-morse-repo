
const morseObject = {
    "a" : "*-",     "b" : "-***",   "c" : "-*-*",
    "d" : "-**",    "e" : "*",      "f" : "**-*",
    "g" : "--*",    "h" : "****",   "i" : "**",
    "j" : "*---",   "k" : "-*-",    "l" : "*-**",
    "m" : "--",     "n" : "-*",     "o" : "---",
    "p" : "*--*",   "q" : "--*-",   "r" : "*-*",
    "s" : "**",     "t" : "-",      "u" : "**-",
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
const translateToMorse = (engString, morseObj=morseObject) => {
    const lowerArr = engString.split("").map((char) => char.toLowerCase());
    const mappedArr = lowerArr.map((char) => morseObj[char] ?? "");
    const cleanArr = mappedArr.filter((item) => item !== "");
    return cleanArr.join(" ")
}

