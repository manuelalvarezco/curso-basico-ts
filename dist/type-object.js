"use strict";
// Type object
var user;
user = {}; // Object
user = {
    id: 1,
    username: 'manuelalvarezco',
    firstName: 'Manuel',
    isPro: true
};
console.log('user', user);
// console.log('username', user.username); // Error
// Object vs object (Clase JS vs Tipo TS)
var myObj = {
    id: 1,
    username: 'manuelalvarezco',
    firstName: 'Manuel',
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log('isInstance', isInstance);
console.log('username', myObj.username);
