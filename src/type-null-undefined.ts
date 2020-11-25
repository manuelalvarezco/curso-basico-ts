// Explícita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error

let otherVariable  = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);


// Undefined
let undefinedVariable: undefined = undefined;

// undefinedVariable = 'test'; // Error

let otherUndefined  = undefined;
otherUndefined = 22;

console.log('undefinedVaribla', undefinedVariable);
console.log('otherUndefined', otherUndefined);


// Null and undefined with subtypes

// --strictNullChecks
let albunName: string;

//albunName = null; // Error    
// albunName = undefined;// Error  