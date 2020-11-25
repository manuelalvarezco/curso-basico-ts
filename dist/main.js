"use strict";
console.log('Hello main');
//Number
// Explícito
var phone;
phone = 1;
// phone = '222'
var phoneNumber = 3232323;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//Tipo : Boolean
// Tipado explícito
var isPro;
isPro = true;
// Strings
var username = 'manuelalvarez';
username = "luis";
// username = true;
// Template String
// Uso de back-tick ``
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstname: " + (username + 'Alvarez') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
