"use strict";
// Tipado Explícito
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
// Tipo Inferido
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprise = 'hello typescript';
// surprise.sayHello() // Error
var res = surprise.substring(6); // Error
console.log('res', res);
