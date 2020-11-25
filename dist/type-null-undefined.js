"use strict";
// Explícita
var nullVariable;
nullVariable = null;
// nullVariable = 1; // Error
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
var otherUndefined = undefined;
otherUndefined = 22;
console.log('undefinedVaribla', undefinedVariable);
console.log('otherUndefined', otherUndefined);
// Null and undefined with subtypes
// --strictNullChecks
var albunName;
//albunName = null; // Error    
// albunName = undefined;// Error  
