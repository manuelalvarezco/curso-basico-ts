"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> // Angle Bracket sintax
var username;
username = 'manuelalvarez';
// Tenemos una cadena, TS confía en mí.
var message = username.length > 5 ?
    "Wellcome " + username :
    "Username is too short";
console.log('message', message);
var usernameWithName = 'manuelalvarez 1';
// Cómo obtener el username ?
username = usernameWithName.substring(0, 13);
console.log('username Only', username);
// Sintaxis 'as'
message = username.length > 5 ?
    "Wellcome " + username :
    "Username is too short";
var helloUser;
helloUser = 'Hello manuel';
username = helloUser.substring(5);
console.log('username', username);
