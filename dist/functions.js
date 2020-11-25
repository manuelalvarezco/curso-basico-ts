"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    // Se crea la fotgrafía
    console.log('create picture ', title, date, size);
}
//createPicture('My Birthday','2020202','500x500');
// Parámetros opcionales en una función
function createPictur(title, date, size) {
    // Se crea la fotgrafía
    console.log('create picture ', title, date, size);
}
createPictur('My Birthday', '2020202', '500x500');
createPictur('My Birthday', '2020202');
var createPic = function (title, date, size) { return { title: title, date: date, size: size }; };
var picture = createPic('name', 'date', '100x100');
console.log(picture);
// Tipo de retorno TS
function handleError(code, message) {
    // Procesamiento code or message
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
}
catch (error) {
}
