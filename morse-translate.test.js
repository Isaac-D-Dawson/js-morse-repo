import {morseObject, translateToMorse} from "./morse-translate"

describe("translateToMorse", () => {
    it("Should return a valid morse string for a provided english string", () => {
        const testInput = ["a", "b", "x", "w"];
        const testMorse = ["*-", "-***", "-**-", "*--"];

        const result    = testInput.map((letter) => {
            return translateToMorse(letter);
        })
        
        expect(result).toEqual(testMorse);
    })

    it("Should ignore capitaliseation of english letters", () => {
        const testInput = ["A", "B", "X", "W"];
        const testMorse = ["*-", "-***", "-**-", "*--"];

        const result    = testInput.map((letter) => {
            return translateToMorse(letter);
        })
        
        expect(result).toEqual(testMorse);
    })

    //Theese next two are for ease of readability.
    it("should return '/' for space characters", () => {
        //Could use "   " instead, but this reads nicer.
        
        const testInput = " ";
        const testMorse ="/";

        const result = translateToMorse(testInput);

        expect(result).toEqual(testMorse);
    })

    it("should return '//' for a '.'(Full-Stop character", () => {
        //As with above, there is another option.
        //Should technically be using "STOP", but "//" reads nicer.

        const testInput = ".";
        const testMorse = "//";

        const result = translateToMorse(testInput);

        expect(result).toEqual(testMorse);
    })

    //Longer string testing
    it("Should be able to handle proper sentences", () => {
        const testInput = "Read Books";
        const testMorse ="*-* * *- -** / -*** --- --- -*- ***";

        const result = translateToMorse(testInput);

        expect(result).toEqual(testMorse);
    })

    //Exception testing
    it("Should ignore empty strings", () => {
        const testInput = "";
        const testMorse ="";

        const result = translateToMorse(testInput);

        expect(result).toEqual(testMorse);
    })

    it("Should ignore invalid/unreconised chars", () => {
        const testInput = "820193;:@/";
        const testMorse ="";
        //I'll need to update that test string as I add more functionality
        //Morse has compatability with numbers and basic punctuation, but-
        //-I won't include that by default.

        const result = translateToMorse(testInput);

        expect(result).toEqual(testMorse);
    })

    //Leaving space open for extra tests.
    //Depending on time I may add more functionality to this, so-
    //-I'll wanna check what I add.
})