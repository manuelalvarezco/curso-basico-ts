"use strict";
// Void
// Tipo explícito
function showInfo(user) {
    console.log('user Info', user.id, user.username, user.firstName);
    //return 'hello';
}
showInfo({ id: 1, username: 'manuelalvarez', firstName: 'Luis' });
// Tipo inferido
function showFormatedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormatedInfo({ id: 1, username: 'manuelalvarez', firstName: 'Luis' });
// Tipo void como tipo de dato
var unusuable;
// unusuable = null; //Error
// Tipo Never
function handleError(code, message) {
    // Process your code here
    //Generate a message
    throw new Error(message + ", Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
