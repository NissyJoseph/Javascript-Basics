/*------- VALUE TYPES -------*/
function ValueTypes() {
    let hulkStrength = 10; // Initial strength value
    let thorStrength = hulkStrength; 
    hulkStrength = 20; // Hulk gains more strength
    console.log(`Value Types: Hulk Strength = ${hulkStrength}, Thor Strength = ${thorStrength}`); // Updated output
}

ValueTypes();
// Output: Value Types: Hulk Strength = 20, Thor Strength = 10


/*------- REFERENCE TYPES -------*/
function ReferenceTypes() {
    let ironMan = { 
        name: "Tony Stark",
        suit: "Mark 1",
        abilities: ["Flight", "Repulsor Blasts", "Intelligence"]
    };

    let warMachine = ironMan; // War Machine references Iron Man's object

    ironMan.suit = "Mark 2"; // Iron Man upgrades his suit

    console.log(`Reference Types: Iron Man's Suit = ${ironMan.suit}, War Machine's Suit = ${warMachine.suit}`);
}

ReferenceTypes();
// Output: Reference Types: Iron Man's Suit = Mark 2, War Machine's Suit = Mark 2
